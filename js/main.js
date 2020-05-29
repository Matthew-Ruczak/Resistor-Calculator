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
    element_band_1 = document.getElementById('band_1');
    element_band_2 = document.getElementById('band_2');
    element_band_3 = document.getElementById('band_3');
    element_band_4 = document.getElementById('band_4');
    element_band_multiplier = document.getElementById('band_multiplier');
    element_band_tolerance = document.getElementById('band_tolerance');
    element_band_tempCoefficient = document.getElementById('band_tempCoefficient');
    element_text_ohms = document.getElementById('text_ohms');
    element_text_tolerance = document.getElementById('text_tolerance');
    element_text_tempCoefficent = document.getElementById('text_tempCoefficent');
}

function getNumOfOhms(){
    let ohmsStr = element_band_1.value + element_band_2.value + element_band_3.value;
    ohmsStr = parseInt(ohmsStr) * parseFloat(element_band_multiplier.value);
    return ohmsStr;
}

function getTolerance(){
    return element_band_tolerance.value;
}

function getTempCoefficient(){
    return element_band_tempCoefficient.value;
}

function updateDisplay(){
    let numOfOhms = getNumOfOhms();
    let tolerance = getTolerance();
    element_text_ohms.innerHTML = numOfOhms;
    element_text_tolerance.innerHTML = tolerance + '% (±' + numOfOhms * (tolerance / 100) + ' Ohms)';
    element_text_tempCoefficent.innerHTML = getTempCoefficient();
}