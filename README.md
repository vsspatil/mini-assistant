# Robo Girl - Your Virtual Assistant

## Overview
**Robo Girl** is a voice-activated virtual assistant designed to respond to user commands using speech recognition and synthesis. Built with HTML, CSS, and JavaScript, this assistant listens to user input and can perform actions such as opening websites, playing music, or responding to inquiries. The assistant was created by **Vaishnavi Shinde**.

## Features
- **Speech Recognition**: Robo Girl listens to user commands through the browser's microphone.
- **Speech Synthesis**: Provides spoken feedback for user commands.
- **Command Execution**: Can open websites (e.g., YouTube, Google), perform Google searches, and respond with pre-programmed answers.
- **Dynamic Microphone Button**: The microphone button reappears after the assistant processes a command, allowing continuous interaction.

## Technologies Used
- **HTML**: For structuring the web interface.
- **CSS**: For styling the web interface.
- **JavaScript**: For handling speech recognition, speech synthesis, and user interactions.
- **Google Fonts**: For custom fonts used in the UI.

## Project Structure

### index.html
This file contains the structure of the web page, including:
- A logo image.
- A heading introducing Robo Girl.
- A button that triggers speech recognition.
- A GIF that shows when Robo Girl is listening.

### style.css
This file contains all the styling, such as:
- **Fonts**: Custom fonts are imported from Google Fonts for a unique look.
- **Button Styles**: The button uses a linear gradient, shadow effects, and a hover effect to improve user interaction.
- **Responsive Design**: The use of flexbox ensures that the content is properly aligned and adjusts to different screen sizes.

### script.js
The JavaScript file provides the interactive logic for Robo Girl:
- **Speech Recognition**: Listens to user commands when the button is clicked.
- **Speech Synthesis**: Provides spoken responses using the browser’s built-in speech synthesis API.
- **Command Handling**: Recognizes specific commands and triggers corresponding actions, such as opening YouTube, Google, or Spotify, or providing general responses.

Some commands include:
- **"Hello"**: Robo Girl responds with a greeting.
- **"How are you?"**: Provides a polite response.
- **"Who are you?"**: Introduces Robo Girl as the virtual assistant.
- **"Who created you?"**: Robo Girl introduces the creator, Vaishnavi Shinde.
- **"Open YouTube" / "Open Google" / "Play a song"**: Opens specified websites.
- **"Goodbye"**: Robo Girl bids farewell.
- **"Open calculator"**: Attempts to open the calculator application.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/vsspatil/robo-girl.git
   





#Future Enhancements
Add more commands and improve Robo Girl's understanding using advanced NLP techniques.
Integrate APIs for dynamic data retrieval (e.g., weather updates, calendar reminders).
Add mobile support for better interaction on smartphones.
