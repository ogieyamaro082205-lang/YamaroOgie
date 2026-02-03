// Greet button alert
document.getElementById("greetBtn").onclick = function () {
    alert("Hello! Welcome to my JavaScript demo.");
};

// Show name input
document.getElementById("showNameBtn").onclick = function () {
    let name = document.getElementById("nameInput").value;
    document.getElementById("nameOutput").innerText = "Your name is: " + name;
};

// Change text color on hover
let hoverText = document.getElementById("hoverName");

hoverText.onmouseover = function () {
    hoverText.style.color = "yellow";
};

hoverText.onmouseout = function () {
    hoverText.style.color = "white";
};
