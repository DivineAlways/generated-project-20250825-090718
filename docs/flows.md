# User Flows

## 1. Primary Reading Flow

This flow describes the primary path a user will take to explore the content within the application.

**Goal:** The user wants to learn about a specific topic covered in the analysis.

**Actors:** A general user interested in the topic.

### Steps:

1.  **Landing on the Home Page:**
    - The user opens the prototype's `index.html`.
    - The application fetches the content data and renders the Home Page view.
    - The user is presented with a title, an introduction, and a series of cards, each representing a major section of the text (e.g., "Theological Perspectives", "Historical Context").

2.  **Selecting a Topic:**
    - The user finds a topic of interest and clicks on its corresponding card.
    - The application's router detects the click.

3.  **Viewing Topic Details:**
    - The application updates the URL hash to reflect the selected topic (e.g., `.../index.html#historical-context`).
    - The view changes from the Home Page to the Detail Page.
    - The content of the selected topic, including its title, subtitles, and paragraphs, is displayed.
    - A "Back to Home" or similar navigation element is clearly visible.

4.  **Returning to the Home Page:**
    - After reading, the user clicks the "Back to Home" button.
    - The application updates the URL hash to remove the topic-specific part.
    - The view changes back to the Home Page, displaying all the topic cards again.

### Alternative Path (Browser Navigation):

-   From the Detail Page (Step 3), the user can also press the browser's "Back" button.
-   The application listens for the `hashchange` event and correctly re-renders the Home Page view, demonstrating proper state management.
