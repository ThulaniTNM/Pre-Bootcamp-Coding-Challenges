import { convertToTime } from  "../../../Task 8/task8.js";

let num1 = document.getElementById('num1');
let btnConvert= document.getElementById('btnConvert');
let result = document.getElementById('result');


btnConvert.addEventListener('click',function(){
    result.innerHTML = "";
    let nv1 = Number.parseInt(num1.value);
    result.innerHTML =convertToTime(nv1);
});
