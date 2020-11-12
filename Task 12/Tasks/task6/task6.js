function findMax(num1,num2,num3){
    var firstMax = num1>num2?num1:num2; //compare first two numbers
    var finalMax = firstMax>num3?firstMax:num3; //comparer last number with max from first two numbers.
    return finalMax;

}



// Function to take in any number by using rest parameter,spread parameter to spread out the elements to single numbers
function findMaxBonus(...rest){
    return Math.max(...rest);
}

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
    // Result of function
    let nv1 = Number.parseInt(num1.value);
    let nv2 = Number.parseInt(num2.value);
    let nv3 = Number.parseInt(num3.value);

    //Result dislay on screen
    result.innerHTML = "Maximum number between "+nv1+" ,"+nv2+" ,"+nv3+" is : "+findMax(nv1,nv2,nv3);
});

btnFindMaxCommaSeperated.addEventListener('click',function(){
    resultComma.innerHTML = "";
    // Result of function
    let nvArray = numArray.value.split(",");
    //Result dislay on screen
    resultComma.innerHTML = "Maximum number between "+nvArray+" is : "+findMaxBonus(...nvArray);
});