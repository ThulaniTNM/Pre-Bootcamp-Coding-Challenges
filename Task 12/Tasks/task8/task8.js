function convertToTime(number){
    var hour  = Math.trunc(number/60); // get hour
    var min = Math.trunc(number%60);
    var result = number+" converted to hours and minutes is "+hour +(hour===1?" hour":" hours") +", " +min+" minutes"; 
    return result;
}

let num1 = document.getElementById('num1');
let btnConvert= document.getElementById('btnConvert');
let result = document.getElementById('result');


btnConvert.addEventListener('click',function(){
    result.innerHTML = "";
    // Result of function
    let nv1 = Number.parseInt(num1.value);
 

    //Result dislay on screen
    result.innerHTML =convertToTime(nv1);
});
