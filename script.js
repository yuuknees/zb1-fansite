// script.js

// document.addEventListener('DOMContentLoaded', function () {
//     const updateButton = document.getElementById("quickStats");
//     const cancelButton = document.getElementById("cancel");
//     const dialog = new bootstrap.Modal(document.getElementById("favDialog"));

//     function openCheck(dialog) {
//         if (dialog._isShown) {
//             console.log("Dialog open");
//         } else {
//             console.log("Dialog closed");
//         }
//     }

//     // Update button opens a modal dialog
//     updateButton.addEventListener("click", () => {
//         dialog.show();
//         openCheck(dialog);
//     });

//     // Form cancel button closes the dialog box
//     cancelButton.addEventListener("click", () => {
//         dialog.hide();
//         openCheck(dialog);
//     });
// });

const updateButton = document.getElementById("quickStats");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");

function openCheck(dialog) {
    if (dialog.open) {
        console.log("Dialog open");
    } else {
        console.log("Dialog closed");
    }
}

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
    dialog.showModal();
    openCheck(dialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
    dialog.close("animalNotChosen");
    openCheck(dialog);
});