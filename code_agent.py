import json, re, os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import SystemMessage, HumanMessage

def generate_single_page(llm: ChatGoogleGenerativeAI, page_name: str, page_data: dict, css_blueprint: str, output_dir: str):
    output_path = os.path.join(output_dir, f"{page_name}.html")
    print(f"Code Agent: Generating {output_path}...")
    
    prompt = [
        SystemMessage(content="You are a senior front-end developer. Your task is to generate a complete HTML file for a single website page based on provided structured data and a CSS blueprint. Do not include any extra text."),
        HumanMessage(content=f"""
        Use the following structured JSON data and CSS blueprint to create a COMPLETE, standalone HTML page for '{page_name}'.
        
        Requirements:
        1) Always output a full HTML5 document: include <!DOCTYPE html>, <html>, <head> (with a descriptive <title>), and <body>.
        2) Include a top navigation bar on EVERY page (including sub-pages) with links to: index.html, commercial.html, residential.html.
        3) If there is data for sub-pages (e.g., "about_us", "gallery", "rates", "contact_info"), add a navigation bar with clear links/buttons in the page that point to those sub-pages using EXACT filenames based on the JSON keys:
           - The filename format must be: section-sub_key.html
           - section = the current section name (e.g., "commercial" or "residential")
           - sub_key = the exact JSON key (e.g., "about_us", "contact_info"). Do NOT rename keys (e.g., do not shorten "about_us" to "about").
           - If page_name contains a dash ("-"), treat it as a sub-page: the section is the part before the dash and the sub_key is the part after the dash.
        4) Link the stylesheet using a relative path appropriate for all pages being in the same output folder: href="design_blueprint.css".
        5) Render all information from the provided JSON data in a readable layout using semantic HTML (sections, headings, lists, etc.).
        6) The output must ONLY be a valid HTML block within a ```html ...``` Markdown code block. Do not include any extra commentary.
        
        Structured Data:
        ---
        {json.dumps(page_data, indent=4)}
        ---
        
        CSS Blueprint:
        ---
        {css_blueprint}
        ---
        """),
    ]

    try:
        response = llm.invoke(prompt)
        html_output = response.content.strip()
        cleaned_html_string = re.sub(r'```html|```', '', html_output)
        
        with open(output_path, 'w') as f:
            f.write(cleaned_html_string)
            
        return True
    except Exception as e:
        print(f"Code Agent Error during generation of {output_path}: {e}")
        return False
      
def generate_all_website_code(llm: ChatGoogleGenerativeAI, structured_data_path: str, css_blueprint_path: str,  output_dir: str):
    """
    Generates multiple HTML pages based on the structured data.
    """
    print("Code Agent: Starting multi-page code generation...")

    with open(structured_data_path, 'r') as f:
        structured_data = json.load(f)

    with open(css_blueprint_path, 'r') as f:
        css_blueprint = f.read()

    # Generate the main index page
    generate_single_page(llm, "index", structured_data, css_blueprint, output_dir)

    for section_name in structured_data.keys():
        section_data = structured_data.get(section_name, {})
        if section_data:
            print("Generate main section page")
            # Generate the main section page (e.g., commercial.html)
            generate_single_page(llm, section_name, section_data, css_blueprint, output_dir)
            
            # Generate sub-pages for each item in the section
            for sub_page_name in section_data.keys():
                sub_page_data = section_data.get(sub_page_name, {})
                if sub_page_data:
                    # Create a unique file name like "commercial-about.html"
                    print(f"Create page for {section_name} and {sub_page_name}")
                    file_name = f"{section_name}-{sub_page_name}"
                    generate_single_page(llm, file_name, sub_page_data, css_blueprint, output_dir)
            
    print("Code Agent: Multi-page website generation complete.")
    return True