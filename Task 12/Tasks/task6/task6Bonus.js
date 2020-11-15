
import { findMax,findMaxBonus } from  "../../../Task 6/task6.js";

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let btnFindMax= document.getElementById('fm');
let result = document.getElementById('result');


let numArray = document.getElementById('numArray');
let btnFindMaxCommaSeperated= document.getElementById('fmArray');
let resultComma = document.getElementById('resultComma');



btnFindMax.addEventListener('click',function(){
    result.innerHTML = "";
   
    let nv1 = Number.parseInt(num1.value);
    let nv2 = Number.parseInt(num2.value);
    let nv3 = Number.parseInt(num3.value);

    // Max of 3 values
    result.innerHTML = "Maximum number between "+nv1+" ,"+nv2+" ,"+nv3+" is : "+findMax(nv1,nv2,nv3);
});

btnFindMaxCommaSeperated.addEventListener('click',function(){
    resultComma.innerHTML = "";
    let nvArray = numArray.value.split(",");
    //Maximum of comma seperated values
    resultComma.innerHTML = "Maximum number between "+nvArray+" is : "+findMaxBonus(numArray.value);
});