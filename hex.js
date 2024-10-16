const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let result = document.getElementById("change");

function changeColor(color) {
    document.body.style.background = color;
}

function myFunc() {
    changeColor('F1f5f8');
    result.innerHTML = "Background Color changed";
}  