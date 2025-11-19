let football = document.getElementById("football");
let dragging = false;
let offsetX = 0;
let offsetY = 0;

function handleMouseDown(e) {
  e.preventDefault();        
  dragging = true;

  let rect = football.getBoundingClientRect();

  football.style.position = "absolute";
  football.style.left = rect.left + "px";
  football.style.top = rect.top + "px";

  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  football.style.cursor = "grabbing";
}

function handleMouseMove(e) {
  if (!dragging) return;

  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  football.style.left = x + "px";
  football.style.top = y + "px";
}

function handleMouseUp() {
  dragging = false;
  football.style.cursor = "grab";
}

football.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);