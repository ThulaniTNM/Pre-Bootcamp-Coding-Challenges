
import { calculateArea } from "../../../Task 5/task5.js";

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let btnCalculateArea = document.getElementById('ca');
let result = document.getElementById('result');

btnCalculateArea.addEventListener('click',function(){
    result.innerHTML = "";
    
    let nv1 = Number.parseInt(num1.value);
    let nv2 = Number.parseInt(num2.value);
    let nv3 = Number.parseInt(num3.value);

    result.innerHTML = "Area of triangle = "+ calculateArea(nv1,nv2,nv3);
});