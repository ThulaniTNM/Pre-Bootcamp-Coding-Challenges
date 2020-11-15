// Task 7
export function calculateFarenheit(temperature){
    return (temperature*(9/5)) + 32;
}

export function calculateCelcius(temperature){
    return (temperature - 32)*(5/9);
}

console.log(calculateFarenheit(43));
console.log(calculateCelcius(44));