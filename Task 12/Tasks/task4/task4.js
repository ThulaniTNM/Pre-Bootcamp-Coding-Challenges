let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let btnCheckNumbers = document.getElementById('cn');
let result = document.getElementById('result');



btnCheckNumbers.addEventListener('click',function(){
    result.innerHTML = "";
    // Result of function
    let nv1 = Number.parseInt(num1.value);
    let nv2 = Number.parseInt(num2.value);

    // Equivalent statements as those in function
    let nv1Bool = nv1===3?true:false;
    let nv2Bool = nv2===3?true:false;
    let sumNv1Nv2 = (nv1+nv2).toString().includes(3)?true:false;

    //Result dislay on screen
    result.innerHTML = nv1 +" = "+3+" "+nv1Bool+"<br />";
    result.innerHTML += nv2 +" = "+3+" "+nv2Bool+"<br />"; // probalby use function for these two lines since they repeat themselve.
    result.innerHTML += nv1+nv2+" Contains Value 3 ? "+(nv1Bool||nv2Bool&&sumNv1Nv2); // equivalent if statement
});