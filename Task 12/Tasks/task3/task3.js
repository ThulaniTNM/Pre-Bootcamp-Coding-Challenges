let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let btnCheckNumbers = document.getElementById('cn');
let result = document.getElementById('result');



btnCheckNumbers.addEventListener('click',function(){
    result.innerHTML = "";
    // Result of function
    let nv1 = Number.parseInt(num1.value);
    let nv2 = Number.parseInt(num2.value);

    //Result dislay on screen
    result.innerHTML = nv1 +" = "+65+" "+(nv1===65?true:false)+"<br />";
    result.innerHTML += nv2 +" = "+65+" "+(nv2===65?true:false)+"<br />";
    result.innerHTML += nv1+"+"+nv2+" = "+65 +"? "+((nv1+nv2) === 65?true:false);
});