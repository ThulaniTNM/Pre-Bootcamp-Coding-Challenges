// Task 5
export function calculateArea(num1,num2,num3){

    var semiperimeter = (1/2)*(num1+num2+num3);
    var total = semiperimeter*((semiperimeter-num1)*(semiperimeter-num2)*(semiperimeter-num3));
    var area = Math.sqrt(total);
    return area;
}

console.log(calculateArea(4,6,1));
