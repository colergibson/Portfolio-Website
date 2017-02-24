function showAge() {
	var todaysDate = new Date();
	var dateElement = document.querySelector("#age-today");
	var TodayYear = todaysDate.getFullYear();
	var TodayMonth = (todaysDate.getMonth()+1);
	var TodayDay = todaysDate.getDate();
	if (TodayMonth > 6) {
		dateElement.innerHTML = (TodayYear - 1993); }
	else if (TodayMonth == 6 && TodayDay > 4) {
		dateElement.innerHTML = (TodayYear - 1993); }	
	else {
		dateElement.innerHTML = (((TodayYear-1) - 1993));}
}

showAge();