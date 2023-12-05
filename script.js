let square = document.querySelector("#squar");
let circle = document.querySelector("#circle");
let cross = document.querySelector("#cros");
let triangle = document.querySelector("#triangl");

square.addEventListener("mousedown", function() {
    square.style.backgroundColor = "rgba(0, 0, 0, .5)";
});

square.addEventListener("mouseup", function() {
    square.style.backgroundColor = "rgba(0, 0, 0, .2)";
});

square.addEventListener("mouseout", function() {
    square.style.backgroundColor = "rgba(0, 0, 0, .2)";
});

circle.addEventListener("mousedown", function() {
    circle.style.backgroundColor = "rgba(0, 0, 0, .5)";
});

circle.addEventListener("mouseup", function() {
    circle.style.backgroundColor = "rgba(0, 0, 0, .2)";
});

circle.addEventListener("mouseout", function() {
    circle.style.backgroundColor = "rgba(0, 0, 0, .2)";
});

cross.addEventListener("mousedown", function() {
    cross.style.backgroundColor = "rgba(0, 0, 0, .5)";
});

cross.addEventListener("mouseup", function() {
    cross.style.backgroundColor = "rgba(0, 0, 0, .2)";
});

cross.addEventListener("mouseout", function() {
    cross.style.backgroundColor = "rgba(0, 0, 0, .2)";
});

triangle.addEventListener("mousedown", function() {
    triangle.style.backgroundColor = "rgba(0, 0, 0, .5)";
});

triangle.addEventListener("mouseup", function() {
    triangle.style.backgroundColor = "rgba(0, 0, 0, .2)";
});

triangle.addEventListener("mouseout", function() {
    triangle.style.backgroundColor = "rgba(0, 0, 0, .2)";
});
