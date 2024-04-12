// JavaScript
const updateButton = document.getElementById("quickStats");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
const body = document.getElementById("body"); // Assuming the body has an id of "body"

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
    dialog.showModal();
    toggleDarkBackground(); // Toggle dark background when the dialog opens
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
    dialog.close("animalNotChosen");
    toggleDarkBackground(); // Toggle dark background when the dialog closes
});
