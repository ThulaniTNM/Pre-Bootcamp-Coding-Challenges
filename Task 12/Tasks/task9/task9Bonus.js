
import { multiplesBelowValue, accumulate } from  "../../../Task 9/task9.js";

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let btnMultiple= document.getElementById('btnMultiple');
let result = document.getElementById('result');

btnMultiple.addEventListener('click',function(){
    result.innerHTML = "";

    // Multiple limiting/below value , input value 3.
    let BelowValue = Number.parseInt(num3.value);

    // Multiples of input value 1 and input value 2 below input value 3(Eg 3 and 5 below 10)
    let firstValueMultiples = multiplesBelowValue(Number.parseInt(num1.value),BelowValue);
    let secondValueMultiples =multiplesBelowValue( Number.parseInt(num2.value),BelowValue);
    
    // Sum of multpliples of two numbers
    let firstValueMultiplesSum = accumulate(firstValueMultiples);
    let secondValueMultiplesSum = accumulate(secondValueMultiples);
    let sumOfBothMultiples = firstValueMultiplesSum+ secondValueMultiplesSum;

    result.innerHTML ="Multiples of "+num1.value +" below"+BelowValue+" is :"+"<span class='value1'>"+firstValueMultiples+"</span> <br />";
    result.innerHTML +="Multiples of "+num2.value +" below"+BelowValue+" is :"+"<span class='value2'>"+secondValueMultiples+"</span> <br />";
    result.innerHTML += "Sum of both multiples is :"+ "<span class='value1'>"+sumOfBothMultiples+"</span>";
});
