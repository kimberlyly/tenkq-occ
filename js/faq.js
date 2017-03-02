var lastQ = "";
var lastA = "";

$(document).ready(function() {
	initializePage();
});

function initializePage() {
	hideAllAnswers();
	$(".accordion").click(toggleQuestion);
}

function toggleQuestion(e) {
	// get the ID of question clicked
	var questionID = this.id;
	//console.log("clicked " + questionID);

	// close the previous opened question
	if( questionID != lastQ && lastQ != "") {
		console.log("if");
		var oldQuestion = $('#'+lastQ).text();
		oldQuestion = oldQuestion.substring(2);
		$('#'+lastQ).html("+ "+oldQuestion);
		$('#'+lastA).slideUp();
	}

  // get the question string
	var newQuestion = $('#'+questionID).text();
	var symbol = newQuestion.substring(0,1);
	newQuestion = newQuestion.substring(2);
	
  // get the ID of the corresponding question
	var answerID = "a-"+questionID.substring(2,4);
	var panel = document.getElementById(answerID);
	
	//$('#'+answerID).slideToggle();

	if( symbol == "+") {
		//$('#'+answerID).slideToggle();
		$('#'+answerID).slideDown();
		//$('#'+questionID).html("<a href='#"+questionID+"'>- "+newQuestion+"</a>");
		$('#'+questionID).html("- "+newQuestion);
		lastQ = questionID;
		lastA = answerID;
	}
	else if( symbol == "-") {
		//$('#'+answerID).slideToggle();
		$('#'+answerID).slideUp();
		//$('#'+questionID).html("<a href='#"+questionID+"'>+ "+newQuestion+"</a>");
		$('#'+questionID).html("+ "+newQuestion);
	}
	
	/*if (panel.style.display !== "block") {
		$('#'+questionID).html("- "+newQuestion);
		//$('#'+answerID).slideDown();
		panel.style.display = "block";
	}
	else if (panel.style.display === "block") {
		$('#'+questionID).html("+ "+newQuestion);
		//$('#'+answerID).slideUp();
		panel.style.display = "none";
	}*/
}

function hideAllAnswers() {
	var answers = document.getElementsByClassName("panel");
	//console.log(answers);

	for( var i = 0; i < answers.length; i++ ) {
		var answerID = answers[i].id;
		//console.log(answerID);
		$('#'+answerID).slideUp();
		var panel = document.getElementById(answerID);
		panel.style.display = "none";
	}
}

// Source: http://wpbeaches.com/create-expandcollapse-faq-accordion-collapse-click/
// this one toggles only one open at a time
// Ref  - http://stackoverflow.com/questions/37745154/only-open-one-accordion-tab-at-one-time
/*document.addEventListener("DOMContentLoaded", function(event) {
	var acc = document.getElementsByClassName("accordion");
	var panel = document.getElementsByClassName('panel');

	for (var i = 0; i < acc.length; i++) {
		acc[i].onclick = function() {
			console.log("clicked");
			var setClasses = !this.classList.contains('active');
			setClass(acc, 'active', 'remove');
			setClass(panel, 'show', 'remove');
			if (setClasses) {
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
			}
		}
	}

	function setClass(els, className, fnName) {
		for (var i = 0; i < els.length; i++) {
			els[i].classList[fnName](className);
		}
	}
});*/