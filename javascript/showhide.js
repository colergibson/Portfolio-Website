var aboutMe = document.querySelector("#item-1");
aboutMe.addEventListener('click', showHide1);
var aboutMeText = document.querySelector("#item-1");
var aboutMyselfDisplay = document.querySelector('#About-Myself');

var education = document.querySelector("#item-2");
education.addEventListener('click', showHide2);
var educationText = document.querySelector("#item-2");
var educationDisplay  = document.querySelector('#Education');

var workExperience = document.querySelector("#item-3");
workExperience.addEventListener('click', showHide3);
var workExperienceText = document.querySelector("#item-3");
var workExperienceDisplay  = document.querySelector('#Work-Experience');

var myInterests = document.querySelector("#item-4");
myInterests.addEventListener('click', showHide4);
var myInterestsText = document.querySelector("#item-4");
var myInterestsDisplay  = document.querySelector('#My-Interests');

function showHide1 () {
	if (aboutMyselfDisplay.style.display == "none") {
		document.querySelector('#About-Myself').style.display = "grid";
		aboutMeText.innerHTML = "<h4>Go back</h4>";
		document.querySelector('.item-2').style.display = "none";
		document.querySelector('#item-2').style.display = "none";
		document.querySelector('.item-3').style.display = "none";
		document.querySelector('#item-3').style.display = "none";
		document.querySelector('.item-4').style.display = "none";
		document.querySelector('#item-4').style.display = "none"; 
		document.querySelector('#resume-link').style.display = "none";}
	else {
		document.querySelector('#About-Myself').style.display = "none";
		aboutMeText.innerHTML = "<h4>About Me</h4>";
		document.querySelector('#item-1').style.display = "grid";
		document.querySelector('.item-2').style.display = "grid";
		document.querySelector('#item-2').style.display = "grid";
		document.querySelector('.item-3').style.display = "grid";
		document.querySelector('#item-3').style.display = "grid";
		document.querySelector('.item-4').style.display = "grid";
		document.querySelector('#item-4').style.display = "grid";
		document.querySelector('#resume-link').style.display = "grid";}
}

function showHide2 () {
	if (educationDisplay.style.display == "none") {
		document.querySelector('#Education').style.display = "grid";
		document.querySelector(".item-2").style = "grid-column-start: 1;grid-column-end: 2;grid-row-start:1;grid-row-end: 2;align-self:end;";
		document.querySelector("#item-2").style = "grid-column-start: 1;grid-column-end: 2;grid-row-start:1;grid-row-end: 2;align-self:end;";
		educationText.innerHTML = "<h4>Go back</h4>";
		document.querySelector('#item-1').style.display = "none";
		document.querySelector('.item-1').style.display = "none";
		document.querySelector('.item-3').style.display = "none";
		document.querySelector('#item-3').style.display = "none";
		document.querySelector('.item-4').style.display = "none";
		document.querySelector('#item-4').style.display = "none";
		document.querySelector('#resume-link').style.display = "none";		}
	else {
		document.querySelector('#Education').style.display = "none";
		document.querySelector(".item-2").style = "grid-column-start: 2;grid-column-end: 3;grid-row-start:1;grid-row-end: 2; align-self:end;";
		document.querySelector("#item-2").style = "grid-column-start: 2; grid-column-end: 3; grid-row-start: 1; grid-row-end: 2; align-self:end;";
		educationText.innerHTML = "<h4>Education</h4>";
		document.querySelector('#item-1').style.display = "grid";
		document.querySelector('.item-1').style.display = "grid";
		document.querySelector('#item-2').style.display = "grid";
		document.querySelector('.item-3').style.display = "grid";
		document.querySelector('#item-3').style.display = "grid";
		document.querySelector('.item-4').style.display = "grid";
		document.querySelector('#item-4').style.display = "grid";
		document.querySelector('#resume-link').style.display = "grid";}
}

function showHide3 () {
	if (workExperienceDisplay.style.display == "none") {
		document.querySelector('#Work-Experience').style.display = "grid";
		document.querySelector(".item-3").style = "grid-column-start: 1;grid-column-end: 2;grid-row-start:1;grid-row-end: 2;align-self:end;";
		document.querySelector("#item-3").style = "grid-column-start: 1;grid-column-end: 2;grid-row-start:1;grid-row-end: 2;align-self:end;";
		workExperienceText.innerHTML = "<h4>Go back</h4>";
		document.querySelector('#item-1').style.display = "none";
		document.querySelector('.item-1').style.display = "none";
		document.querySelector('#item-2').style.display = "none";
		document.querySelector('.item-2').style.display = "none";
		document.querySelector('.item-4').style.display = "none";
		document.querySelector('#item-4').style.display = "none";
		document.querySelector('#resume-link').style.display = "none";}
	else {
		document.querySelector('#Work-Experience').style.display = "none";
		document.querySelector(".item-3").style = "grid-column-start: 1; grid-column-end: 2; grid-row-start: 2; grid-row-end: 3; align-self:end;";
		document.querySelector("#item-3").style = "grid-column-start: 1; grid-column-end: 2; grid-row-start: 2; grid-row-end: 3; align-self:end;";
		workExperienceText.innerHTML = "<h4>Work Experience</h4>"
		document.querySelector('#item-1').style.display = "grid";
		document.querySelector('.item-1').style.display = "grid";
		document.querySelector('#item-2').style.display = "grid";
		document.querySelector('.item-2').style.display = "grid";
		document.querySelector('#item-3').style.display = "grid";
		document.querySelector('.item-4').style.display = "grid";
		document.querySelector('#item-4').style.display = "grid";
		document.querySelector('#resume-link').style.display = "grid";}
}

function showHide4 () {
	if (myInterestsDisplay.style.display == "none") {
		document.querySelector('#My-Interests').style.display = "grid";
		document.querySelector(".item-4").style = "grid-column-start: 1;grid-column-end: 2;grid-row-start:1;grid-row-end: 2;align-self:end;";
		document.querySelector("#item-4").style = "grid-column-start: 1;grid-column-end: 2;grid-row-start:1;grid-row-end: 2;align-self:end;";
		myInterestsText.innerHTML = "<h4>Go back</h4>";
		document.querySelector('#item-1').style.display = "none";
		document.querySelector('.item-1').style.display = "none";
		document.querySelector('#item-2').style.display = "none";
		document.querySelector('.item-2').style.display = "none";
		document.querySelector('#item-3').style.display = "none";
		document.querySelector('.item-3').style.display = "none";
		document.querySelector('#resume-link').style.display = "none";}
	else {
		document.querySelector('#My-Interests').style.display = "none";
		document.querySelector(".item-4").style = "grid-column-start: 2; grid-column-end: 3; grid-row-start: 2; grid-row-end: 3; align-self:end;";
		document.querySelector("#item-4").style = "grid-column-start: 2; grid-column-end: 3; grid-row-start: 2; grid-row-end: 3; align-self:end;";
		myInterestsText.innerHTML = "<h4>My Interests</h4>";
		document.querySelector('#item-1').style.display = "grid";
		document.querySelector('.item-1').style.display = "grid";
		document.querySelector('#item-2').style.display = "grid";
		document.querySelector('.item-2').style.display = "grid";
		document.querySelector('#item-3').style.display = "grid";
		document.querySelector('.item-3').style.display = "grid";
		document.querySelector('#item-4').style.display = "grid";
		document.querySelector('#resume-link').style.display = "grid";}
}