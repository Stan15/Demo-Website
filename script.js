function changeDisplay() {
    var displayText = document.getElementById("displayInput").value;
    document.getElementById("displayText").innerHTML = displayText;

    var colorInput = document.getElementById("colorInput").value;
    var colors = colorInput.split(",");
    for (let i=0; i<colors.length; i++) {
        setTimeout(function(){ changeColor(colors[i]); },i*300);
    }
}

function changeColor(c) {
    document.getElementById("displayText").style.color = c;
}