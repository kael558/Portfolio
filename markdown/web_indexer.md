# Web Indexer

## <span> Problem Statement </span>

This project was made for the AI21 labs hackathon organized by lablab.ai.

The search bar found on most websites typically only performs keyword searches, which can be a slow and tedious process for users as they must sift through a large amount of information before finding the specific piece of information they were looking for.

My goal was to create a question answering tool that can be easily integrated into any website. It allows you to find specific information, provides answers in a clear, understandable way and includes sources and more information should the user need it.

## <span> Implementation </span>

To retrieve

![Implementation](images/rp_ss/semantic_search.png)

The blue indicates the process I take to index a website. I pass in the domain and url for the website I want to scrape. The scraper retrieves all the text and it is indexed into the vector database using coheres embed API.

Then the red indicates the process of question answering. It gets relevant context for the question from the vector database. Then it is sent to AI21 labs generation api along with the question. Finally, the response is returned back to the front end.

## <span> Skills </span>

Python, Scrapy,

## <span> Links </span>

- [Demo](https://kael558-redesigned-spoon-ui-em33xz.streamlit.app/)
- [Repository](https://github.com/kael558/redesigned-spoon)
