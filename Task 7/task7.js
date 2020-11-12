function calculateFarenheit(temperature){
    return (temperature*(9/5)) + 32;
}

function calculateCelcius(temperature){
    return (temperature - 32)*(5/9);
}

console.log(calculateFarenheit(43));
console.log(calculateCelcius(44));