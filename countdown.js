const revealDate = new Date("2023-12-01T19:00:00");
const boyText = document.getElementById("boyText");
const girlText = document.getElementById("girlText");
const genderContent = document.getElementById("genderContent");

// Specify the gender for testing (true for boy, false for girl)
const testGender = false; // Change this value for testing

function updateCountdown() {
    const currentDate = new Date();
    const difference = revealDate - currentDate;

    if (difference <= 0) {
        // Gender reveal time
        document.getElementById("countdownDisplay").innerHTML = "It's time to reveal!";
        boyText.style.visibility = "hidden";
        girlText.style.visibility = "hidden";
        genderContent.style.display = "block";

        // Determine the revealed gender
        const isBoy = testGender; // Use the specified test gender

        if (isBoy) {
            // Blue state
            document.body.style.backgroundColor = "#add8e6"; // light blue
            genderContent.innerHTML = "<h2>It's a ...</h2><h1>BOY!</h1>";
        } else {
            // Pink state
            document.body.style.backgroundColor = "#FFC0CB"; // pastel pink
            genderContent.innerHTML = "<h2>It's a ...</h2><h1>GIRL!</h1>";
        }
    } else {
        // Countdown
        const seconds = Math.floor(difference / 1000);

        // Toggle every 5 seconds
        const isBlue = seconds % 10 < 5; // Switch every 10 seconds

        if (isBlue) {
            // Blue state
            document.body.style.backgroundColor = "#add8e6"; // light blue
            boyText.style.visibility = "visible";
            girlText.style.visibility = "hidden";
        } else {
            // Pink state
            document.body.style.backgroundColor = "#FFC0CB"; // pastel pink
            boyText.style.visibility = "hidden";
            girlText.style.visibility = "visible";
        }

        // Display the countdown timer
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("countdownDisplay").innerHTML = `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
    }
}

// Initial call to set up the initial state
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);


// Set the baby name directly
const babyName = "Salmon";

// Update the title with the dynamic value
const revealTitle = document.getElementById("revealTitle");
revealTitle.innerHTML = `Gender Reveal: Baby ${babyName}`;
