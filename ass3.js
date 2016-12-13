"use strict";

// Assignment 3 Front-End develpoment Marcus Linsdtedt Malmö Högskola

// Part 1 HTML and CSS setup and adding click event

  var succesButton = document.getElementById("success");
  var errorButton = document.getElementById("error");
  var infoButton = document.getElementById("info");
  var addItemButton = document.getElementById("add-item");
  var removeItemButton = document.getElementById("remove-item");
  var buttons = document.getElementsByClassName("remove-list-item");
  var form = document.getElementById("apply-for-pet");

  for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", removeElementFromList, false);
  }

  succesButton.addEventListener("click",function() { changeDiv("success")}, false);
  errorButton.addEventListener("click", function() { changeDiv("error")}, false);
  infoButton.addEventListener("click", function() { changeDiv("info")}, false);
  addItemButton.addEventListener("click", promptMessage, false);
  removeItemButton.addEventListener("click", removeItemInList, false);
  form.addEventListener("submit", function(event){
    event.preventDefault();
    submitInfo(this.elements);
  }, false);


// Function for changing the Div tag
function changeDiv(button){
  var change = document.getElementById("message-box");
  change.className = button;
}

// Part 2 Adding and creating html elements

function promptMessage(){
  var ul = document.getElementById("items");
  var li = document.createElement("li");
  var addItemPrompt = window.prompt("Enter what you would like to add to the list");

  if(addItemPrompt != null && addItemPrompt.length < 250){
    li.appendChild(document.createTextNode(addItemPrompt));
    ul.appendChild(li);
  }
}

// Part 3 Remove elements

function removeItemInList(){
  var theList = document.getElementById("items");

  if(theList.hasChildNodes()){
    theList.removeChild(theList.lastElementChild);
  }
}

// Part 4 Remove element using this

// Removes an element from a list, after user confirmation.
	function removeElementFromList(){

		if(window.confirm("By clicking yes you are allowing the almighty Lord to remove this taint!")){
			var parentNode = buttons.parentNode;
			this.parentNode.remove(this);
		}
	}

    // Part 5 Forms

function submitInfo(info){
  var isChecked = false;
  for(var i = 0; i < info.pet.length; i++){
    if(info.pet[i].checked)
    isChecked = true;
  }

  if(info.firstname.value.length <= 0 || info.firstname.value.length >= 50){
    alert("Invalid input for first name");
  }

  else if(info.lastname.value.length <= 0 || info.lastname.value.length >= 50){
    alert("Invalid input for last name");
  }

  else if(info.age.value.match(/^\d+$/)){
    alert("Age must be a number");
  }

  else if(info.age.value < 0 || info.age.value == ""){
    alert ("Negative number or no number added");
  }

  else if(info.email.value.length <= 0 || info.lastname.value.length >= 50){
    alert("Invalid input for e-mail");
  }

  else if(!isChecked){
    alert("You need to choose which pet you prefer");
  }

  else{
    console.log("First name: " + info.firstname.value + "\n" +
                "Last name: " + info.lastname.value + "\n" +
                  "Age: " + info.age.value + "\n" +
                "E-mail: " + info.email.value);

  event.target.submit();
  }
}
