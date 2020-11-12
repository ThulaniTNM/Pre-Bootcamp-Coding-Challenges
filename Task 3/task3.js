function checkSixtyFive(num1,num2){
    if (num1 ===65 || num2 === 65 || (num1+num2) === 65){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkSixtyFive(10,55));