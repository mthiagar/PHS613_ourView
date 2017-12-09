var firstnamefield = document.querySelector("#FirstName");
var lastnamefield = document.querySelector("#LastName");
var firstname = "";
var lastname = "";

firstnamefield.addEventListener('keypress', function() {
	firstname = document.querySelector("#FirstName").value;
})

lastnamefield.addEventListener('keypress', function() {
	lastname = document.querySelector("#LastName").value;
})

addEventListener("click" ,  function() {
	lastname = document.querySelector("#LastName").value;
	firstname = document.querySelector("#FirstName").value;
})

document.querySelector("#button").addEventListener("click", function(){
	if(firstname==""){
		alert("Please add a caregiver")
	}
	else{
	alert('You have added '+firstname+ ' ' + lastname+ ' as a caregiver');
	}
})