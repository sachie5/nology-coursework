"use strict";

function changeColour(colour) {
  var selColour = document.getElementById("colour-picker").value;
  colour.style.backgroundColor = selColour;
}