function checkThree(num1,num2){
    var sum = (num1+num2).toString();
    if (num1 ===3 || num2 === 3 && sum.includes("3")){
      return true;
    }
  else{
    return false;
  }
}
console.log(checkThree(19, 4));
console.log(checkThree(20, 3));