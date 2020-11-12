function multiplesBelowValue(number,belowValue){
    var multiples = []; 
    
    for(var i = number;i<belowValue;){
        multiples.push(i); // push in all the multiples
        i += number; // increament i by the number itself,so multiples of 3 will keep on increamenting i by 3,so i will be 3 6 9..
    }
    return multiples;
}

var accumulate = (sum,next)=>{return sum += next;}; // find some of any arrays

var firstValue = multiplesBelowValue(3,1000); // return array of multiples of 3 below 1000

var secondValue = multiplesBelowValue(5,1000); // return array of multiples of 5 below 1000

var sumMultipleThreeAndFive = firstValue.reduce(accumulate) + secondValue.reduce(accumulate);  // add sum of multiples of 3 and multiples of 5
console.log(sumMultipleThreeAndFive);