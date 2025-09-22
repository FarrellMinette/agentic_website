import json
import re
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import SystemMessage, HumanMessage

def process_manual_data(llm: ChatGoogleGenerativeAI, data_directory: str, output_path: str):
    """
    Reads text files from a directory, including subdirectories,
    combines their content, and structures it into JSON.
    """
    print("Manual Data Agent: Processing human-provided text files from all subfolders...")
    
    if not os.path.exists(data_directory):
        print(f"Manual Data Agent Error: Directory '{data_directory}' not found. Aborting.")
        return False
        
    combined_text = ""
    
    # Walk through the directory and its subdirectories
    for root, dirs, files in os.walk(data_directory):
        for filename in files:
            if filename.endswith('.txt'):
                file_path = os.path.join(root, filename)
                with open(file_path, 'r', encoding='utf-8') as file:
                    # Use the file's path to identify its content
                    combined_text += f"\n--- Content from {file_path} ---\n"
                    combined_text += file.read()
                    combined_text += "\n"
    
    if not combined_text.strip():
        print("Manual Data Agent Error: No content found in text files. Aborting.")
        return False
        
    print("Manual Data Agent: Combined content from all files. Sending to LLM...")

    # Use the LLM to structure the combined content
    prompt = [
        SystemMessage(content="You are a data structuring expert. Your task is to extract all key information from the provided text and format it into a single JSON object. Do not include any extra text, comments, or explanations. Only provide the JSON object."),
        HumanMessage(content=f"""
        Analyze the following text, which is a collection of content from different pages, including both commercial and residential properties. Extract and structure all relevant business information, including:
        - "commercial": A JSON object containing information from commercial properties.
        - "residential": A JSON object containing information from residential properties.
        - Each sub-object should contain details like "about_us", "contact_info", "services", "rates", and "gallery".
        
        If a category is not mentioned, its value should be null. The output must be a valid JSON object.
        
        Text to analyze:
        ---
        {combined_text}
        ---
        """),
    ]

    try:
        response = llm.invoke(prompt)
        json_output = response.content.strip()
        cleaned_json_string = re.sub(r'```json|```', '', json_output)
        structured_data = json.loads(cleaned_json_string)
        
        with open(output_path, 'w') as f:
            json.dump(structured_data, f, indent=4)
        
        print(f"Manual Data Agent: Successfully structured and saved data to {output_path}")
        return True
    
    except Exception as e:
        print(f"Manual Data Agent Error: {e}")
        return False