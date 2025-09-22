import json, re, os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import SystemMessage, HumanMessage
from bs4 import BeautifulSoup
from langchain_community.tools import DuckDuckGoSearchRun

search_tool = DuckDuckGoSearchRun()

def process_and_structure_content(llm: ChatGoogleGenerativeAI, html_content: str, output_path: str):
    """
    Takes raw HTML, processes it, and uses the LLM to structure the content.
    Includes a fallback to web search if the HTML is empty.
    """
    print("Data Agent: Processing raw HTML content...")

    # Step 1
    soup = BeautifulSoup(html_content, 'html.parser')
    main_text_elements = soup.find_all(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
    main_text = ' '.join([element.get_text() for element in main_text_elements])
    clean_text = ' '.join(main_text.split()).strip()

    # Step 2: Implement the fallback logic
    if len(clean_text) < 100:
        print("Data Agent: Insignificant content found on page. Initiating fallback web search.")
        search_query = "Bella Rosa Village website rates floor plans contact info"
        
        # Use the search tool to find relevant text from the web
        search_results = search_tool.run(search_query)
        
        # Use the search results as the new content to analyze
        content_to_analyze = f"Web search results for '{search_query}':\n\n{search_results}"
    else:
        # If the page had content, use it as planned
        print("Data Agent: Extracted and cleaned text. Sending to LLM...")
        content_to_analyze = f"Text from website scrape:\n\n{clean_text}"
    print("Data Agent: Extracted and cleaned text. Sending to LLM...")

    # Step 3: Use the LLM to structure the data with a clear prompt
    prompt = [
        SystemMessage(content="You are a data structuring expert. Your task is to extract all key information from the provided text and format it into a single JSON object. Do not include any extra text, comments, or explanations. Only provide the JSON object."),
        HumanMessage(content=f"""
        Analyze the following text from the Bella Rosa website. Extract and structure all relevant business information, including:
        - "commercial": page for the commercial investers
            - "home": return to home page
            - "about_us": A summary of the buildings's background.
            - "floor plans": floor plans for three buildings
            - "gallery": Photo gallery with balconies, exterior, interior, lifestyle center, pool area and gym area photos.
            - "prices": Any pricing or rate information found.
            - "last phase": Any new information and gallery for new buildings
            - "emergency evacuation protocol": pdf with exit routs
            - "rules": pdfs with sets of rules 
            - "documentation": conditions of sale and schedule of finishes pdfs
            - "overall site map": pdf map
            - "location:" png map
            - "contact us": Key details like address, phone number, and email.
        - "residential" page for the residents
            - "home": return to home page
            - "about_us": A summary of the buildings's background.
            - "developers": architecttures and developers
            - "gallery": Photo gallery with exterior, lifestyle center, water features and blooms
            - "plots": map of plots for sale
            - "rules": pdfs with sets of rules 
            - "emergency evacuation protocol": pdf with exit routs
            - "location:" png map
            - "contact us": Key details like address, phone number, and email.
        
        If a category is not mentioned, its value should be null. The output must be a valid JSON object.
        
        Text to analyze:
        ---
        {content_to_analyze}
        ---
        """),
    ]

    try:
        # Get the LLM's response
        response = llm.invoke(prompt)
        json_output = response.content
        cleaned_json_string = re.sub(r'```json|```', '', json_output.strip())
        structured_data = json.loads(cleaned_json_string)
        
        if not structured_data or all(value is None for value in structured_data.values()):
            print("\n🚨 Data Agent: Automated data extraction failed to find sufficient information.")
            print("🚨 **HUMAN-IN-THE-LOOP REQUIRED**")
            print("Please create a file named 'structured_content.json' in your project directory with the correct information.")
            print("Once the file is ready, you can manually run the next steps in the pipeline.")
            print("The process will now terminate, awaiting your input.")
            return False # Return False to signal the Orchestrator to stop
        
        with open(output_path, 'w') as f:
            json.dump(structured_data, f, indent=4)
        
        print(f"Data Agent: Successfully structured and saved data to {output_path}")
        return True
    
    except json.JSONDecodeError as e:
        print(f"Data Agent Error: LLM response was not valid JSON. Error: {e}")
        print("LLM Output:", json_output)
        return False
    except Exception as e:
        print(f"Data Agent Error: {e}")
        return False