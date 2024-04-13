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

const updateButtonHanbin = document.getElementById("quickStats_hanbin"); // Change the ID for the quickStats button
const cancelButtonHanbin = document.getElementById("cancel_hanbin"); // Change the ID for the cancel button
const dialogHanbin = document.getElementById("favDialog_hanbin"); // Change the ID for the dialog box

// Update button opens a modal dialog
updateButtonHanbin.addEventListener("click", () => {
    dialogHanbin.showModal();
    toggleDarkBackground(); // Toggle dark background when the dialog opens
});

// Form cancel button closes the dialog box
cancelButtonHanbin.addEventListener("click", () => {
    dialogHanbin.close("animalNotChosen");
    toggleDarkBackground(); // Toggle dark background when the dialog closes
});
