function multiplesBelowValue(number,belowValue){
    let multiples = []; 
    
    for(var i = number;i<belowValue;){
        multiples.push(i); // push in all the multiples
        i += number; // increament i by the number itself,so multiples of 3 will keep on increamenting i by 3,so i will be 3 6 9..
    }
    return multiples;
}

let accumulate = (sum,next)=>{return sum += next;}; // find some of any arrays

let firstValue = multiplesBelowValue(3,1000); // return array of multiples of 3 below 1000

let secondValue = multiplesBelowValue(5,1000); // return array of multiples of 5 below 1000




let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let btnMultiple= document.getElementById('btnMultiple');
let result = document.getElementById('result');


let numArray = document.getElementById('numArray');
let btnFindMaxCommaSeperated= document.getElementById('fmArray');
let resultComma = document.getElementById('resultComma');



btnMultiple.addEventListener('click',function(){
    result.innerHTML = "";
    // Result of function
    let nv3 = Number.parseInt(num3.value);
    let nv1Array = multiplesBelowValue(Number.parseInt(num1.value),nv3);
    let nv2Array =multiplesBelowValue( Number.parseInt(num2.value),nv3);
    
    let sumMultipleAnyTwoNumbers = nv1Array.reduce(accumulate) + nv2Array.reduce(accumulate);

    //Result dislay on screen

    result.innerHTML ="Multiples of "+num1.value +" below"+nv3+" is :"+"<span class='value1'>"+nv1Array+"</span> <br />";
    result.innerHTML +="Multiples of "+num2.value +" below"+nv3+" is :"+"<span class='value2'>"+nv2Array+"</span> <br />";
});
