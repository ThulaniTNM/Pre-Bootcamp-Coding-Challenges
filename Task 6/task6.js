
// Task 6
export function findMax(num1,num2,num3){
    var firstMax = num1>num2?num1:num2; //compare first two numbers
    var finalMax = firstMax>num3?firstMax:num3; //comparer last number with max from first two numbers.
    return finalMax;
  
  }


// Task 6 Bonus
  //Redefine to use arguments object for arguments requiring integers.


export function findMaxBonus(multipleElements){
    // split string data to array
    // compare all elements to find maximum value.
    // return maximum
    let values = multipleElements.split(",");
    let max = Number.parseInt(values[0]);
  
    values.forEach(element => {
        if (Number.parseInt(element)>max){
            max = Number.parseInt(element);
        }
    });
  
    return max;
  }
console.log(findMax(5,2,4));
  
  //input has to be string to cater for UI Task 12
  console.log(findMaxBonus("4,7,3")); 