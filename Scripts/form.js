"use strict";
// Function to double-check form validation and redirect the user to the Bio page if all fields are valid.
function formValidation() {
    let form = document.querySelector("form");
    if (form["fullName"] != "" &&
        form["email"] != "" &&
        form["message"] != "") {
        form.action = "bio.html";
    }
}
let button = document.querySelector("button");
button.addEventListener("click", function (e) {
    formValidation();
});
//# sourceMappingURL=form.js.map