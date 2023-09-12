// Get references to the necessary HTML elements
const counterElement = document.getElementById('counter');
const resetButton = document.getElementById('reset');

let spacebarCount = 0; // Initialize spacebar count
let spacebarHeldDown = false; // Track if spacebar is held down

// Function to update the spacebar count on the page
function updateCounter() {
  counterElement.textContent = spacebarCount;
}

// Event listener to track keypress events
document.addEventListener('keydown', function (event) {
  if (event.key === ' ' && !spacebarHeldDown) { // Check if the pressed key is the spacebar and it's not already held down
    spacebarHeldDown = true; // Set spacebar as held down
    spacebarCount++; // Increment the spacebar count
    updateCounter(); // Update the counter on the page
  }
});

// Event listener to track keyup events
document.addEventListener('keyup', function (event) {
  if (event.key === ' ') { // Check if the released key is the spacebar
    spacebarHeldDown = false; // Set spacebar as not held down
  }
});

// Event listener for the "Reset" button
resetButton.addEventListener('click', function () {
  spacebarCount = 0; // Reset the spacebar count to zero
  updateCounter(); // Update the counter on the page
  location.reload();
});