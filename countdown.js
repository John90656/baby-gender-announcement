document.addEventListener("DOMContentLoaded", function () {
    // Set the date and time for the gender reveal
    const revealDate = new Date("2023-11-23T10:00:00");
    const gender = "boy"; // Change to "girl" for a girl reveal

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = revealDate - currentDate;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            const countdownDisplay = document.getElementById("countdownDisplay");
            countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // Intermittent teasing background color change
            const teaseInterval = 10000; // Change the interval in milliseconds (e.g., 10000 for 10 seconds)
            if (timeDifference % teaseInterval < 1000) {
                teaseBackground();
            }

            toggleTextVisibility(); // Toggle visibility of text elements
            setTimeout(updateCountdown, 1000);
        } else {
            // Timer has reached zero, reveal the gender
            const genderContent = document.getElementById("genderContent");
            genderContent.style.display = "block";
            const countdownDisplay = document.getElementById("countdownDisplay");
            countdownDisplay.innerHTML = "Gender Revealed!";

            // Change background color based on gender
            document.body.style.transition = "background-color 2s ease";
            document.body.style.backgroundColor = gender === "boy" ? "#add8e6" : "#ffc0cb";
        }
    }

    function teaseBackground() {
        // Tease the user with a background color change between pink and blue
        document.body.style.transition = "background-color 5s ease";

        // Toggle between pink and blue based on the current background color
        if (document.body.style.backgroundColor === "rgb(173, 216, 230)") {
            document.body.style.backgroundColor = "#ffc0cb"; // Pink
        } else {
            document.body.style.backgroundColor = "#add8e6"; // Blue
        }
    }

    function toggleTextVisibility() {
        const boyText = document.getElementById("boyText");
        const girlText = document.getElementById("girlText");

        if (document.body.style.backgroundColor === "rgb(173, 216, 230)") {
            boyText.style.visibility = "visible";
            girlText.style.visibility = "hidden";
        } else {
            boyText.style.visibility = "hidden";
            girlText.style.visibility = "visible";
        }
    }

    // Initial call to start the countdown
    updateCountdown();
});
