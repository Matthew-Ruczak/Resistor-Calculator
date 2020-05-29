//Element reference variables
let element_band_1;
let element_band_2;
let element_band_3;
let element_band_4;
let element_band_multiplier;
let element_band_tolerance;
let element_band_tempCoefficient;
let element_text_ohms;
let element_text_tolerance;
let element_text_tempCoefficent;

window.onload = ()=> {
    //Getting reference to all of the bands select elements
    element_band_1 = document.getElementById('band_1');
    element_band_2 = document.getElementById('band_2');
    element_band_3 = document.getElementById('band_3');
    element_band_4 = document.getElementById('band_4');
    element_band_multiplier = document.getElementById('band_multiplier');
    element_band_tolerance = document.getElementById('band_tolerance');
    element_band_tempCoefficient = document.getElementById('band_tempCoefficient');

    //Setting up event handlers for the band select elements so that when they change, the information about the resistor is updated
    element_band_1.addEventListener("change", updateDisplay);
    element_band_2.addEventListener("change", updateDisplay);
    element_band_3.addEventListener("change", updateDisplay);
    element_band_multiplier.addEventListener("change", updateDisplay);
    element_band_tolerance.addEventListener("change", updateDisplay);
    element_band_tempCoefficient.addEventListener("change", updateDisplay);

    //Getting reference to the areas were the information about the resistors will be updated
    element_text_ohms = document.getElementById('text_ohms');
    element_text_tolerance = document.getElementById('text_tolerance');
    element_text_tempCoefficent = document.getElementById('text_tempCoefficent');

    //Setting up default information about the resistor
    updateDisplay();
}

function getNumOfOhms(){
    //Concating the numbers together
    let ohmsStr = element_band_1.value + element_band_2.value + element_band_3.value;
    //Applying the multiplier
    ohmsStr = parseInt(ohmsStr) * parseFloat(element_band_multiplier.value);
    return ohmsStr;
}

function getTolerance(){
    return element_band_tolerance.value;
}

function getTempCoefficient(){
    const {value} = element_band_tempCoefficient;
    if (value === "N/A")
        return ".";
    return ", and a temperature coefficient of " + value + "ppm.";
}

function updateDisplay(){
    let numOfOhms = getNumOfOhms();
    let tolerance = getTolerance();
    element_text_ohms.innerHTML = numOfOhms;
    //Displaying the tolerance percentage and the actual ± value
    element_text_tolerance.innerHTML = tolerance + '% (±' + numOfOhms * (tolerance / 100) + ' Ohms)';
    element_text_tempCoefficent.innerHTML = getTempCoefficient();
}