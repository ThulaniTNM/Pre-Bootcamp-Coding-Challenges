import { calculateCelcius,calculateFarenheit } from  "../../../Task 7/task7.js";

let celcius = document.getElementById('Celcius');
let btnToFareignheit= document.getElementById('btnF');
let resultf = document.getElementById('resultToFareignhet');

btnToFareignheit.addEventListener('click',function(){
    resultf.innerHTML = "";
    let nv1 = Number.parseInt(celcius.value);
    resultf.innerHTML = nv1 +"Degrees Celcius converted to fareignheit is "+calculateFarenheit(nv1)+"F";
});

let Farenheight = document.getElementById('Farenheight');
let btnToCelcius= document.getElementById('btnC');
let resultc = document.getElementById('resultToCelcius');

btnToCelcius.addEventListener('click',function(){
    resultc.innerHTML = "";
    let nv1 = Number.parseInt(Farenheight.value);
    resultc.innerHTML = nv1 +"Fareignheit  converted to celcius is "+calculateCelcius(nv1)+"C";
});
