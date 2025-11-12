// Basic function
function welcomeUser() {
    alert("Welcome to Fantasy Sidekick!");
  }
  document.addEventListener("DOMContentLoaded", welcomeUser);

  //Function with two parameters
  function updateUI(elementId, content) {
    document.getElementById(elementId).innerHTML = content;
  }

  //Function with return value

  function calculateFantasyPoints(passYds, rushYds, recYds) {
    var passPoints = passYds * 0.04;
    var rushPoints = rushYds * 0.1;
    var recPoints  = recYds * 0.1;
  
    return passPoints + rushPoints + recPoints;
  }

  function CalculateClick() {
    var pass = Number(document.getElementById("passYds").value);
    var rush = Number(document.getElementById("rushYds").value);
    var rec  = Number(document.getElementById("recYds").value);
  
    var totalPoints = calculateFantasyPoints(pass, rush, rec);
  
    updateUI("finalPoints", "Total Fantasy Points: " + totalPoints.toFixed(2));
  }


  document.addEventListener("DOMContentLoaded", function () {
    
    welcomeUser();

    var calcBtn = document.getElementById("calcBtn");
    calcBtn.addEventListener("click", CalculateClick);
  });