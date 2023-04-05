function calculate() {
    // Get values from form
    var roofWidth = document.getElementById("width").value;
    var roofLength = document.getElementById("length").value;


    if (vertical(roofWidth, roofLength) <= horizontal(roofWidth, roofLength)) {
        document.getElementById("result").value = vertical(roofWidth, roofLength);
    } else {
        document.getElementById("result").value = horizontal(roofWidth, roofLength);
    }
    // Display result

}

function vertical(roofWidth, roofLength) {
    var maxPanelsWidth = Math.floor(roofWidth / 175.);
    var maxPanelsLength = Math.floor(roofLength / 109.6);
    var maxPanels = maxPanelsWidth * maxPanelsLength;
    return maxPanels;
}
function horizontal(roofWidth, roofLength) {
    var maxPanelsWidth = Math.floor(roofLength / 175.);
    var maxPanelsLength = Math.floor(roofWidth / 109.6);
    var maxPanels = maxPanelsWidth * maxPanelsLength;
    return maxPanels;
}