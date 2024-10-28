function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB"; 
    window.speechSynthesis.speak(text_speak);
}

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('#btn');
    let voice = document.querySelector('#voice');

    // Initially hide the voice image
    voice.style.display = "none";

    // Add a click event listener to the button
    btn.addEventListener("click", () => {
        console.log("Button clicked!");  // Debugging log to ensure the button is clicked
        btn.style.display = "none";  // Hide the button when clicked
        voice.style.display = "block";  // Show the voice image

        // Start speech recognition
        let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            let recognition = new SpeechRecognition();
            recognition.continuous = false;  // Stops listening after command is spoken
            recognition.interimResults = false;  // Only show final results

            recognition.onresult = (event) => {
                let currentIndex = event.resultIndex;
                let transcript = event.results[currentIndex][0].transcript;
                
                console.log("You said: ", transcript);
                speak("You said: " + transcript);

                // Call the function to process the command
                takeCommand(transcript.toLowerCase());
                
                // Show the button again after processing the command
                btn.style.display = "block"; // Show the button again
                voice.style.display = "none"; // Hide the voice image
            };

            recognition.onerror = (event) => {
                console.error("Speech Recognition Error: ", event.error);
                // Show the button again in case of error
                btn.style.display = "block"; // Show the button again
                voice.style.display = "none"; // Hide the voice image
            };

            recognition.start();
        } else {
            console.log("Speech Recognition not supported in this browser.");
        }
    });
});

// Function to process and respond to commands
function takeCommand(message) {
    message = message.toLowerCase(); // Convert message to lowercase for easy matching
    if (message.includes("hello")) {
        speak("Hello, I am Robo Girl. How can I help you?");
    } else if (message.includes("how are you")) {
        speak("I am fine, thank you. How can I assist you today?");
    } else if (message.includes("who are you?")) {
        speak("I am Robo Girl, your virtual assistant.");
    } else if (message.includes("who are created you?")) {
        speak("I am a virtual assistant, created by Vaishnavi Shinde.");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube");
        window.open("https://www.youtube.com/", "_blank");
    } else if (message.includes("open google")) {
        speak("Opening Google");
        window.open("https://www.google.com/", "_blank");
    } else if (message.includes("play a song")) {
        speak("Playing a song for you on Spotify.");
        window.open("https://open.spotify.com/playlist/2n3i7V1ViDPMxdPCGm1bhG?si=259ce497cb7f4fa4", "_blank");
    } else if (message.includes("goodbye")) {
        speak("Goodbye, Madam. Have a great day!");
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator.....");
        window.open("calculator://")
    }

    else {
        speak(`i found on internet ${message}`);
        window.open(`https://www.google.com/search?q=${message}`);
    }
}
