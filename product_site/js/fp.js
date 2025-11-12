PASS_YARD_POINT = 0.04;  
RUSH_REC_POINT  = 0.1;  

passInput = document.getElementById("passYds");
rushInput = document.getElementById("rushYds");
recInput  = document.getElementById("recYds");
finalPoints  = document.getElementById("finalPoints");
calcBtn   = document.getElementById("calcBtn");

allInputs = document.querySelectorAll("input");

function calculatePoints() {
  var pass = Number(passInput.value);
  var rush = Number(rushInput.value);
  var recv = Number(recInput.value);

  var total = (pass * PASS_YARD_POINT) + (rush * RUSH_REC_POINT) + (recv * RUSH_REC_POINT);

  finalPoints.textContent = `Total Fantasy Points: ${total.toFixed(2)}`;


}

calcBtn.addEventListener("click", calculatePoints);