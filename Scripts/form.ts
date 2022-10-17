"use strict";

function formValidation() {
	let form = document.querySelector("form");

	if (
		form["fullName"] != "" &&
		form["email"] != "" &&
		form["message"] != ""
	) {
		form.action = "bio.html";
	}
}
let button = document.querySelector("button");
button.addEventListener("click", function (e) {
	formValidation();
});
