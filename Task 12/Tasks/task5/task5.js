function calculateArea(num1,num2,num3){

    var semiperimeter = (1/2)*(num1+num2+num3);
    var total = semiperimeter*((semiperimeter-num1)*(semiperimeter-num2)*(semiperimeter-num3));
    var area = Math.sqrt(total);
    return area;


}
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let btnCalculateArea = document.getElementById('ca');
let result = document.getElementById('result');



btnCalculateArea.addEventListener('click',function(){
    result.innerHTML = "";
    // Result of function
    let nv1 = Number.parseInt(num1.value);
    let nv2 = Number.parseInt(num2.value);
    let nv3 = Number.parseInt(num3.value);

    //Result dislay on screen
    result.innerHTML = "Area of triangle = "+ calculateArea(nv1,nv2,nv3);
});