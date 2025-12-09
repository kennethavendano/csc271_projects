PASS_YARD_POINT = 0.04;  
RUSH_REC_POINT  = 0.1; 

RUSH_TD_POINT = 6;
REC_TD_POINT = 6;
PASS_TD_POINT = 4;

passInput = document.getElementById("passYds");
rushInput = document.getElementById("rushYds");
recInput  = document.getElementById("recYds");

passTDInput = document.getElementById("passTD");
rushTDInput = document.getElementById("rushTD");
recTDInput = document.getElementById("recTD");

finalPoints  = document.getElementById("finalPoints");

calcBtn   = document.getElementById("calcBtn");

allInputs = document.querySelectorAll("input");

function calculatePoints() {
  var pass = Number(passInput.value);
  var rush = Number(rushInput.value);
  var recv = Number(recInput.value);

  var passTouchdown = Number(passTDInput.value);
  var rushTouchdown = Number(rushTDInput.value);
  var recTouchdown = Number(recTDInput.value);


  var total = (pass * PASS_YARD_POINT) + (rush * RUSH_REC_POINT) + (recv * RUSH_REC_POINT) + (passTouchdown * PASS_TD_POINT) + (rushTouchdown * RUSH_TD_POINT) + (recTouchdown * REC_TD_POINT);

  finalPoints.textContent = `Total Fantasy Points: ${total.toFixed(2)}`;


}

function inform() {
  alert("Test out the points calculator!");
}
document.addEventListener("DOMContentLoaded", inform);


calcBtn.addEventListener("click", calculatePoints);