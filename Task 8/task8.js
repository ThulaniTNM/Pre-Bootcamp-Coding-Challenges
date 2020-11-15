export function convertToTime(number){
    var hour  = Math.trunc(number/60); // get hour
    var min = Math.trunc(number%60);
    var result = number+" converted to hours and minutes is "+hour +(hour===1?" hour":" hours") +", " +min+" minutes"; 
    return result;
}
console.log(convertToTime(133));