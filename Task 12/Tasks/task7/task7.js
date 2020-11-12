function calculateFarenheit(temperature){
    return (temperature*(9/5)) + 32;
}

function calculateCelcius(temperature){
    return (temperature - 32)*(5/9);
}


let celcius = document.getElementById('Celcius');

let btnToFareignheit= document.getElementById('btnF');
let resultf = document.getElementById('resultToFareignhet');


btnToFareignheit.addEventListener('click',function(){
    resultf.innerHTML = "";
    // Result of function
    let nv1 = Number.parseInt(celcius.value);

    //Result dislay on screen
    resultf.innerHTML = nv1 +"Degrees Celcius converted to fareignheit is "+calculateFarenheit(nv1)+"F";
});

let Farenheight = document.getElementById('Farenheight');

let btnToCelcius= document.getElementById('btnC');
let resultc = document.getElementById('resultToCelcius');

btnToCelcius.addEventListener('click',function(){
    resultc.innerHTML = "";
    // Result of function
    let nv1 = Number.parseInt(Farenheight.value);

    //Result dislay on screen
    resultc.innerHTML = nv1 +"Fareignheit  converted to celcius is "+calculateCelcius(nv1)+"C";
});
