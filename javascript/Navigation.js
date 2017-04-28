var menuButton = document.querySelector(".menubutton");
menuButton.addEventListener('click', showHide);

var navigation = document.querySelector(".Main-navigation")

function showHide () {
	if (navigation.style.display == "none") {
		document.querySelector('.Main-navigation').style.display = "inline-block"; }
	else {
		document.querySelector('.Main-navigation').style.display = "none"; }
}