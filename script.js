const checkCnpLenght = (string) =>{ 
	//if CNP doesn't have 13 digits, print error and break function.
	if(string.length != 13){
		return alert('Please enter a valid CNP with 13 digits!');
	}
}

const checkBirthday = (year, month, day) =>{
	//check if the numbers from user form a valid date
	var date = new Date();
	date.setFullYear(Number(year), month - 1, day);
	// month - 1 since the month index is 0-based (0 = January)
	const isValidDate = (Boolean(+date) && date.getDate() == day);
	
	if (!isValidDate){
		alert('Please enter a valid birthday !');
	}
}

const matchDayMonthYearWithCnp = (stringCnp,stringYear,numberMonth, numberDay) =>{
	//check if values form a valid date of a year
	const yearFromCnp = parseInt(stringCnp.substring(1,3)); //get 2 chars from CNP string
	let twoCharsOfYear = 0;

	if(stringYear.length > 2){
		twoCharsOfYear = parseInt(stringYear.substring(2,4));

	} else {
		twoCharsOfYear = parseInt(stringYear);
	}

	const monthFromCnp = parseInt(stringCnp.substring(3,5));
	const dayFromCnp = parseInt(stringCnp.substring(5,7));

	//check for valid CNP based on numbers from text boxes
	if( yearFromCnp === twoCharsOfYear && monthFromCnp === numberMonth && dayFromCnp === numberDay){
		let result = document.createElement("h3");
		result.innerHTML = "Your CNP is valid !";
		document.getElementById("postResult").appendChild(result);
	} else {
		let result = document.createElement("h3");
		result.innerHTML = "Your CNP is NOT valid !";
		document.getElementById("postResult").appendChild(result);
	}
}
//the one function to collect them all
const checkCnp = () => {
	const inputCnp = document.getElementById("cnp").value;//string
	const inputDay = parseInt(document.getElementById("dayTextBox").value);//number
	const inputMonth = parseInt(document.getElementById("monthTextBox").value);//number
	const inputYear = document.getElementById("yearTextBox").value;//string
	checkCnpLenght(inputCnp);
	checkBirthday(inputYear,inputMonth,inputDay);
	matchDayMonthYearWithCnp(inputCnp,inputYear,inputMonth,inputDay);
}

//allow only numbers in textboxes
function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

const checkCnpLastNumber = () =>{
	const inputCnp = document.getElementById("cnp").value;//string
	const sumElements = '279146358279';
	let sumCnp = 0;
	for (let i = 0; i < sumElements.length; i++) {
		sumCnp = sumElements[i]*stringCnp[i];		
	}
	if (sumCnp % 11 == parseInt(inputCnp[inputCnp.length-1])) {
		let result = document.createElement("h3");
		result.innerHTML = "Your CNP is VALID according to the control index !";
		document.getElementById("postResult").appendChild(result);
	} else {
		let result = document.createElement("h3");
		result.innerHTML = "Your CNP is NOT VALID according to the control index !";
		document.getElementById("postResult").appendChild(result);
	}
}


