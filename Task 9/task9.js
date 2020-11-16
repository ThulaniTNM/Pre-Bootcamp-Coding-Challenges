
//Find all multiples of a value below a given number ,push them into an array
export function multiplesBelowValue(number1,number2,belowValue){
    var multiples = []; 
    
    for(var i = 0;i<belowValue;i++){
        if (i%number1 === 0 || i % number2 ===0){
            multiples.push(i);
        }
    }
    return multiples;
}

export function accumulate(arrayMultiples){
    // find sum of all elements and return it
    let sum = 0;

    for(const el of arrayMultiples){
        sum +=el;
    }
    return sum;
}



// Multiples of 3 and 5
let valueMultiples = multiplesBelowValue(3,5,1000);


// Individual sum of multiples of 3 and 5
let sumOfBothMultiples = accumulate(valueMultiples);


console.log(sumOfBothMultiples);