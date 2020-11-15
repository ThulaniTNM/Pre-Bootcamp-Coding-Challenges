let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let btnCheckNumbers = document.getElementById('cn');
let result = document.getElementById('result');

import { checkThree} from  "../../../Task 4/task4.js";

btnCheckNumbers.addEventListener('click',function(){
    result.innerHTML = "";
  
    let nv1 = Number.parseInt(num1.value);
    let nv2 = Number.parseInt(num2.value);

   
    let nv1Bool = nv1===3?true:false;
    let nv2Bool = nv2===3?true:false;
    let sumNv1Nv2 = (nv1+nv2).toString().includes(3)?true:false;

    result.innerHTML = nv1 +" = "+3+" "+nv1Bool+"<br />";
    result.innerHTML += nv2 +" = "+3+" "+nv2Bool+"<br />"; // probalby use function for these two lines since they repeat themselve.
    if (checkThree(nv1,nv2)){
        result.innerHTML += nv1+nv2+" Contains Value 3 ? "+(nv1Bool||nv2Bool&&sumNv1Nv2);
    }
    
});