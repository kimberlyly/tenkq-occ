$(document).ready(function() {
	initializePage();
});

function initializePage() {
	$("#contactSubmit").click(contactSubmit);
}

function contactSubmit(e) {
	e.preventDefault();

	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;

	//console.log("Contact message has been submitted.");
}