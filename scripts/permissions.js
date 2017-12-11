console.log("connected")

var permissions = document.querySelector("#permissions")

var permissions_table = document.querySelector("#permissions_table")

var white = document.querySelector(".white")

var white2 = document.querySelector(".white") 

var show = document.querySelector("#show")

show.addEventListener("click", function(){
	permissions.style.color = "black";
	permissions_table.style.color = "black";
	white.style.color = "black";
	white2.style.color = "black";
})