var pORg= document.querySelector('#porg')
var patientORcaregiver = document.querySelector('#porg').value;
pORg.addEventListener("click", redirect, false);

landingpage="https://google.com"


function redirect() {
  var patientORcaregiver = document.querySelector('#porg').value;
  if (patientORcaregiver == "Patient") {
    landingpage = "main.html";
  	document.querySelector("#loginButton").href=landingpage;
  } else if (patientORcaregiver == "Caregiver"){
    document.querySelector("#loginButton").href="main_caregiver.html";
  } else{
  	document.querySelector("#loginButton").href="main_subsitute.html"
  }
}