import os
import re
from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse

app = FastAPI()
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def wrap_in_native_stage(jsx_content):
    # Added React & ReactDOM CDNs. We inject the jsx_content directly into a React functional component.
    return f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <style>
            body, html {{ 
                margin: 0; padding: 0;
                /* Create a massive stage to prevent any layout wrapping */
                width: 5000px; 
                height: 5000px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: transparent;
            }}
            #component-root {{
                display: inline-block;
                position: relative;
            }}
        </style>
    </head>
    <body>
        <div id="component-root"></div>
        <script type="text/babel">
            // Define the component using the injected JSX
            const Component = () => (
                {jsx_content}
            );

            // Render it properly so all .map() and React logic executes!
            const rootElement = document.getElementById('component-root');
            const root = ReactDOM.createRoot(rootElement);
            root.render(<Component />);

            // Trigger Tailwind upgrade after render if necessary
            setTimeout(() => {{
                if (window.tailwind && window.tailwind.upgrade) window.tailwind.upgrade();
            }}, 500);
        </script>
    </body>
    </html>
    """


@app.get("/render/{category}/{batch_id}/{component_name}")
async def render_component(category: str, batch_id: str, component_name: str):
    file_path = os.path.join(BASE_DIR, "data", "02_mutated_code", category, f"Layout_Batch_{batch_id}.jsx")
    # Render raw seeds
    # file_path = os.path.join(BASE_DIR, "data", "01_raw_seeds", f"{category}.jsx")

    if not os.path.exists(file_path):
        print(f"❌ File not found: {file_path}")
        raise HTTPException(status_code=404, detail=f"JSX file missing: {file_path}")

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # The Regex pattern checks
    pattern = rf"export const {component_name}\s*=\s*\(\)\s*=>\s*\((.*?)\)(?=\s*export const|\s*$)"
    match = re.search(pattern, content, re.DOTALL)

    if not match:
        print(f"❌ Component '{component_name}' not found in {file_path}")
        fallback_pattern = rf"export const {component_name}.*?\((.*?)\)(?=\s*export const|\s*$)"
        match = re.search(fallback_pattern, content, re.DOTALL)

        if not match:
            raise HTTPException(status_code=404, detail=f"Component {component_name} not found in file content")

    print(f"✅ Rendering {component_name} from Batch {batch_id}")
    jsx_snippet = match.group(1).strip()
    jsx_snippet = "".join(char for char in jsx_snippet if char.isprintable())
    jsx_snippet = jsx_snippet.strip("`'\" \n\t\r")
    if jsx_snippet.startswith(">"):
        jsx_snippet = jsx_snippet[1:]

    return HTMLResponse(content=wrap_in_native_stage(jsx_snippet))


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
