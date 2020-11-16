// Converting any number to hour(s) and minutes(s)
export function convertToTime(number){
    var hour  = Math.trunc(number/60);
    var min = Math.trunc(number%60);
    var result = number+" converted to hours and minutes is "+hour +(hour===1?" hour":" hours") +", " +min+(min===1?"minute":" minutes"); 
    return result;
}
console.log(convertToTime(133));