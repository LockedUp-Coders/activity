function myFunction() {
	var table = document.getElementById("formTable");
	var row = table.insertRow(-1);
	var user = row.insertCell(0);
	var pass = row.insertCell(1);
	var data = document.getElementById("myForm");
	user.innerHTML = data["uname"].value;
	pass.innerHTML = data["email"].value;
	data["uname"].value = "";
	data["email"].value = "";
}