import requests
from bs4 import BeautifulSoup

def get_website_content(url: str) -> str:
    """
    Scrapes the raw HTML content of a given URL.
    This function acts as the primary tool for the Discovery Agent.
    """
    try:
        print(f"Discovery Agent: Starting crawl of {url}")
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for bad status codes
        print("Discovery Agent: Crawl successful.")
        return response.text
    except requests.exceptions.RequestException as e:
        print(f"Discovery Agent: Error during crawl: {e}")
        return None

if __name__ == "__main__":
    # This is for testing the function independently
    test_url = "https://www.bellarosa.co.za/"
    html_content = get_website_content(test_url)
    if html_content:
        # You can now save or process the HTML content
        print("Content successfully retrieved. Length:", len(html_content))
        # Optional: Use BeautifulSoup to get the title for verification
        soup = BeautifulSoup(html_content, 'html.parser')
        print(f"Website Title: {soup.title.string}")