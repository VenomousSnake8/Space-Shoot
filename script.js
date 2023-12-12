// взаимодействие с кнопками справа

let square = document.querySelector("#squar");
let circle = document.querySelector("#circle");
let cross = document.querySelector("#cros");
let triangle = document.querySelector("#triangl");
let press_start = document.querySelector(".press_start");

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

function spaceButtonPressed() {
    cross.style.backgroundColor = "rgba(0, 0, 0, .5)";
}

function spaceButtonUnpressed() {
    cross.style.backgroundColor = "rgba(0, 0, 0, .2)";
}

document.addEventListener("keydown", function(event) {
    code = event.code;
    if (code == 'Space') {
        spaceButtonPressed();
        press_start.style.display = "none";
    }
});

document.addEventListener("keyup", function(event) {
    code = event.code;
    if (code == 'Space') spaceButtonUnpressed();
});

// взаимодействие с кнопками направления

let outer_btn_up = document.querySelector("#outer-btn-up");
let inner_btn_up = document.querySelector("#inner-btn-up");
let outer_btn_left = document.querySelector("#outer-btn-left");
let inner_btn_left = document.querySelector("#inner-btn-left");
let outer_btn_right = document.querySelector("#outer-btn-right");
let inner_btn_right = document.querySelector("#inner-btn-right");
let outer_btn_down = document.querySelector("#outer-btn-down");
let inner_btn_down = document.querySelector("#inner-btn-down");

function leftButtonPressed() {
    outer_btn_left.style.fill = "rgba(139, 139, 139, .5)";
    inner_btn_left.style.fill = "rgb(64, 200, 0)";
}

function leftButtonUnpressed() {
    outer_btn_left.style.fill = "#8B8B8B";
    inner_btn_left.style.fill = "#52FF00";
}

function upButtonPressed() {
    outer_btn_up.style.fill = "rgba(139, 139, 139, .5)";
    inner_btn_up.style.fill = "rgb(64, 200, 0)";
}

function upButtonUnpressed() {
    outer_btn_up.style.fill = "#8B8B8B";
    inner_btn_up.style.fill = "#52FF00";
}

function rightButtonPressed() {
    outer_btn_right.style.fill = "rgba(139, 139, 139, .5)";
    inner_btn_right.style.fill = "rgb(64, 200, 0)";
}

function rightButtonUnpressed() {
    outer_btn_right.style.fill = "#8B8B8B";
    inner_btn_right.style.fill = "#52FF00";
}

function downButtonPressed() {
    outer_btn_down.style.fill = "rgba(139, 139, 139, .5)";
    inner_btn_down.style.fill = "rgb(64, 200, 0)";
}

function downButtonUnpressed() {
    outer_btn_down.style.fill = "#8B8B8B";
    inner_btn_down.style.fill = "#52FF00";
}

document.addEventListener("keydown", function(event) {
    code = event.code;
    switch(code) {
        case 'ArrowLeft': leftButtonPressed(); break;
        case 'ArrowUp': upButtonPressed(); break;
        case 'ArrowRight': rightButtonPressed(); break;
        case 'ArrowDown': downButtonPressed(); break;
    }
});

document.addEventListener("keyup", function(event) {
    code = event.code;
    switch(code) {
        case 'ArrowLeft': leftButtonUnpressed(); break;
        case 'ArrowUp': upButtonUnpressed(); break;
        case 'ArrowRight': rightButtonUnpressed(); break;
        case 'ArrowDown': downButtonUnpressed(); break;
    }
});
