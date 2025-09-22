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
        
        **Key Design Principles:**

        1.  **Aesthetic Inspiration**: Evolve the "Italian Tuscan Village" style. Think:
            * **Colors**: Keep the warm, earthy palette. Use muted terracotta, rich olive green, warm stone beige, deep wine red, and sophisticated gold/bronze accents.
            * **Textures**: Suggest subtle textures that evoke natural materials (e.g., slight paper texture for backgrounds, linen for text areas, or a subtle stucco/stone feel).
            * **Typography**: Pair a classic, elegant serif font (for headings) with a clean, readable sans-serif font (for body text).
            * **Imagery**: Design for large, high-quality imagery that showcases the architecture and landscape.
        2.  **Modern and Clean Layout**:
            * Use a spacious, uncluttered layout.
            * Implement responsive design principles using Flexbox or Grid for adaptability across desktop, tablet, and mobile.
            * Employ subtle shadows, smooth transitions, and elegant spacing for a premium feel.
        3.  **Functionality & User Experience**:
            * Clearly defined navigation bar with smooth hover effects.
            * Readability is paramount for all text.
            * Design attractive buttons and interactive elements.

        **Requirements for the CSS Output:**

        1.  **Global Styles**: Set `box-sizing`, `font-family` (serif for headings, sans-serif for body), `font-size`, and `line-height` for a consistent base.
        2.  **Color Variables**: Define CSS custom properties (variables) for the primary and accent colors to ensure easy theming.
        3.  **Responsive Design**: Include media queries for at least one breakpoint (e.g., for mobile devices).
        4.  **Layout Classes**:
            * `.container`: For max-width and centering content.
            * `.header`: For the site-wide header/navbar.
            * `.main-content`: For the primary content area of each page.
            * `.footer`: For the site footer.
            * `.section`: Generic class for distinct content blocks (e.g., about, services).
        5.  **Typography Classes**:
            * `.heading-primary`, `.heading-secondary`: For different levels of headings.
            * `.body-text`: For general paragraph text.
        6.  **Navigation & Buttons**:
            * `.navbar`: Styles for the main navigation container.
            * `.nav-link`: Styles for individual navigation items (including hover/active states).
            * `.button-primary`, `.button-secondary`: Styles for call-to-action buttons (including hover states).
        7.  **Imagery**:
            * `.hero-image`: For full-width banner images.
            * `.content-image`: For images within content blocks.
        8.  **Sections for Structured Data**:
            * `.about-section`
            * `.services-section` (e.g., for list items)
            * `.rates-table` (for displaying pricing information)
            * `.gallery-grid` (for image layouts)
            * `.contact-info` (for address, phone, email)
        
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