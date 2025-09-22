import os, sys
from dotenv import load_dotenv
from langchain.agents import AgentExecutor
from langchain_google_genai import ChatGoogleGenerativeAI
from discovery_agent import get_website_content # Discovery agent
from data_agent import process_and_structure_content # Data agent
from design_agent import generate_design_blueprint
from code_agent import generate_all_website_code
from manual_data_agent import process_manual_data # Manual input agent

# Load environment variables from .env file
load_dotenv()

class OrchestratorAgent:
    def __init__(self, llm_model):
        self.llm = llm_model
        # Note: The Orchestrator itself doesn't have tools, but it will
        # orchestrate the calls to other agents that do.
    
    def run_automated_conversion(self, url: str):
        print(f"Orchestrator initiated AUTOMATED conversion for: {url}")
        
        raw_html = get_website_content(url)
        structured_data_path = "structured_content.json"
        
        success_data = process_and_structure_content(self.llm, raw_html, structured_data_path)
        
        if success_data:
            self.run_design_and_code(structured_data_path)
        else:
            print("Orchestrator: Automated data processing failed. Aborting mission.")
    
    def run_manual_conversion(self):
        print("Orchestrator initiated MANUAL conversion using human-provided data.")
        structured_data_path = "structured_content_manual.json"
        
        success_data = process_manual_data(self.llm, "manual_data", structured_data_path)
        
        if success_data:
            self.run_design_and_code(structured_data_path)
        else:
            print("Orchestrator: Manual data processing failed. Aborting mission.")

    def run_design_and_code(self, structured_data_path: str):
        print("Orchestrator: Data processing complete. Building the next agents.")
        
        output_dir = "src"
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
            print(f"Orchestrator: Created output directory '{output_dir}'.")
            
        css_blueprint_path = os.path.join(output_dir, "design_blueprint.css")
        success_design = generate_design_blueprint(self.llm, structured_data_path, css_blueprint_path)

        if success_design:
            print("Orchestrator: Design blueprint complete. Generating website code.")
            
            # The code agent now safely runs after the CSS file has been created
            success_code = generate_all_website_code(self.llm, structured_data_path, css_blueprint_path, output_dir)

            if success_code:
                print(f"Orchestrator: Website conversion successful! Check the '{output_dir}' folder for your new HTML files.")
            else:
                print("Orchestrator: Code generation failed. Aborting.")
        else:
            print("Orchestrator: Design blueprint generation failed. Aborting.")


if __name__ == "__main__":
    # Initialize the core LLM
    llm = ChatGoogleGenerativeAI(
        model="gemini-2.5-flash",
        temperature=0,
        google_api_key=os.getenv("GOOGLE_API_KEY")
    )

    # Initialize the Orchestrator
    orchestrator = OrchestratorAgent(llm)
    # target_url = "https://www.bellarosa.co.za/"
    target_url = "https://sites.google.com/view/alex-and-minette/home"

    if len(sys.argv) > 1 and sys.argv[1] == "manual":
        # Run in manual mode
        orchestrator.run_manual_conversion()
    else:
        # Run in automated mode
        orchestrator.run_automated_conversion(target_url)