// https://youtu.be/9M4XKi25I2M
// 12:56 - Manipulating HTML with JavaScript

// Just an example
document.getElementById("button").onclick = function() {
    document.getElementById("confirm").innerHTML = "Ordere placed.";
    document.getElementById("button").style.display = "none";
}
