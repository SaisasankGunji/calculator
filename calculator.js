const display = document.getElementById('display');

function appendToDisplay(char) {
    display.value += char;
}

function popDisplay() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
// Function to check time and set background class
function setTimeBasedBackground() {
    const currentHour = new Date().getHours(); // Get current hour (0-23)
    const bodyElement = document.body;

    // Remove any existing theme classes
    bodyElement.classList.remove('background-morning', 'background-night');

    // Apply the correct theme based on the hour
    if (currentHour >= 6 && currentHour < 18) {
        // Morning: 6 AM to 5:59 PM
        bodyElement.classList.add('background-morning');
    } else {
        // Night: 6 PM to 5:59 AM
        bodyElement.classList.add('background-night');
    }
}

// Call the function when the page loads
window.onload = setTimeBasedBackground;

// Optional: Recheck every minute (for dynamic updates)
setInterval(setTimeBasedBackground, 60000);

