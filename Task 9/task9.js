export function multiplesBelowValue(number,belowValue){
    //Find all multiples of a value below a given number ,push them into an array
    var multiples = []; 
    
    for(var i = number;i<belowValue;){
        multiples.push(i);
        i += number; // multiples of 3 is ,3,6,9 . Pattern is number added by itself.
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
let firstValueMultiples = multiplesBelowValue(3, 1000);
let secondValueMultiples = multiplesBelowValue(5, 1000);

// Individual sum of multiples of 3 and 5
let firstValueMultiplesSum = accumulate(firstValueMultiples);
let secondValueMultiplesSum = accumulate(secondValueMultiples);

// Sum of both multiples of 3 and 5
let sumOfBothMultiples = firstValueMultiplesSum+ secondValueMultiplesSum;

console.log(sumOfBothMultiples);