
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
    let value1Input = Number.parseInt(num1.value);
    let value2Input = Number.parseInt(num2.value);

    // Multiples of input value 1 and input value 2 below input value 3(Eg 3 and 5 below 10)
    let valueMultiples = multiplesBelowValue(value1Input,value2Input,BelowValue);
    
    
    // Sum of multpliples
    let valueMultiplesSum = accumulate(valueMultiples);

    result.innerHTML ="Multiples of "+num1.value +" and"+num2.value +" below"+BelowValue+" is :"+"<span class='value2'>"+valueMultiples+"</span> <br />";
    result.innerHTML += "Sum of both multiples is :"+ "<span class='value1'>"+valueMultiplesSum+"</span>";
});
