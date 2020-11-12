function findMax(num1,num2,num3){
    var firstMax = num1>num2?num1:num2; //compare first two numbers
    var finalMax = firstMax>num3?firstMax:num3; //comparer last number with max from first two numbers.
    return finalMax;

}


// Function to take in any number by using rest parameter,spread parameter to spread out the elements to single numbers
function findMaxBonus(...rest){
    return Math.max(...rest);
}
console.log(findMax(5,2,4));
console.log(findMaxBonus(4,7,3));