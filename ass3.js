"use strict";

// Assignment 3 Front-End develpoment Marcus Linsdtedt Malmö Högskola

// Part 1 HTML and CSS setup and adding click event

  var succesButton = document.getElementById("success");
  var errorButton = document.getElementById("error");
  var infoButton = document.getElementById("info");
  var addItemButton = document.getElementById("add-item");
  var removeItemButton = document.getElementById("remove-item");
  var buttons = document.getElementsByClassName("remove-list-item");

  for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", removeElementFromList, false);
  }
  
  succesButton.addEventListener("click",function() { changeDiv("success")}, false);
  errorButton.addEventListener("click", function() { changeDiv("error")}, false);
  infoButton.addEventListener("click", function() { changeDiv("info")}, false);
  addItemButton.addEventListener("click", promptMessage, false);
  removeItemButton.addEventListener("click", removeItemInList, false);

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
		if(window.confirm("Are you certain you want to remove this?")){
			var parentNode = buttons.parentNode;
			this.parentNode.remove(this);
		}
	}
