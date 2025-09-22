import json, re, os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import SystemMessage, HumanMessage

def generate_design_blueprint(llm: ChatGoogleGenerativeAI, structured_data_path: str, output_path: str):
    """
    Takes structured JSON data and uses the LLM to generate a design blueprint (CSS).
    """
    print("Design Agent: Analyzing structured data to create a design blueprint...")
    
    with open(structured_data_path, 'r') as f:
        structured_data = json.load(f)

    # Use a highly specific prompt to get the desired output
    prompt = [
        SystemMessage(content="You are an expert web designer. Your task is to generate a comprehensive design blueprint from structured JSON data. Your output must be in a single Markdown code block containing all the CSS styles needed to match the content and aesthetic of the provided JSON. Do not include any HTML or extra text."),
        HumanMessage(content=f"""
        Analyze the following structured data and generate CSS styles.
        
        Requirements:
        1.  Base styles for a modern, clean, and minimalist layout with a modern Italian aesthetic (muted terracotta, olive, warm gold, and cream tones; classic serif for headings, clean sans-serif for body; generous whitespace and subtle borders/shadows).
        2.  Navigation menus must be horizontal (items side-by-side) using flexbox. Apply styles to header nav, nav.top-nav, nav.main-nav, and nav.container. Ensure nav ul display: flex with gaps, nav li margin-bottom: 0, and allow wrapping on small screens. Keep link styling refined (uppercase, slight letter-spacing, pill/underline hover).
        3.  Sub-navigation (.sub-page-navigation, .sub-page-nav) should render as horizontal chips/pills and wrap on small screens.
        4.  Responsive design for desktop and mobile.
        5.  CSS classes for key sections: .about-section, .services-section, .contact-info.
        6.  The output must ONLY be a valid CSS block within a ```css...``` Markdown block.
        
        Structured Data:
        ---
        {json.dumps(structured_data, indent=4)}
        ---
        """),
    ]

    try:
        response = llm.invoke(prompt)
        css_output = response.content.strip()
        
        cleaned_css_string = re.sub(r'```css|```', '', css_output.strip())
        
        with open(output_path, 'w') as f:
            f.write(cleaned_css_string)
        
        print(f"Design Agent: Successfully created design blueprint at {output_path}")
        return True

    except Exception as e:
        print(f"Design Agent Error: {e}")
        return False