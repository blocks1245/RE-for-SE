function calculateAmount() {
    // Get values from form
    var roofWidth = document.getElementById("width").value;
    var roofLength = document.getElementById("length").value;


    if (vertical(roofWidth, roofLength) <= horizontal(roofWidth, roofLength)) {
        document.getElementById("resultAmount").value = vertical(roofWidth, roofLength);
    } else {
        document.getElementById("resultAmount").value = horizontal(roofWidth, roofLength);
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

function calculateWattage() {
    var panelType = document.getElementById("panel-type").value;
    var panelAmount = document.getElementById("pannel-amount").value;
    var coverage = document.getElementById("coverage-persentage").value;
    var NaturalEff = 0.85;

    
    if (panelType == "sunBurn") {
        document.getElementById("resultWattage").value = (405*panelAmount*NaturalEff*((100-coverage)/100))/1000 +" Kw";
    } 
}