

//Create variable for the digit buttons and the operators
var digitButtons = document.getElementsByTagName("span");

var result = "";
var endResult = 0;


//create onclick event to all digitButtons
	for (var i =0; i<digitButtons.length; i++) {
    digitButtons[i].addEventListener("click", clickHandler)
  	}

    function clickHandler() {
		var input = this.getAttribute("value");
		var screen = document.getElementById("textbox");

		if(input != "=" && input != "c") {
		result += input;
		screen.innerHTML = result;
		}

		else if (input == "c") {
			result = "";
			screen.innerHTML = "";
		}

		else if (input == "=") {
		
			endResult = eval(result).toFixed(7);
			screen.innerHTML = endResult;
			result = "";
		}

		}

