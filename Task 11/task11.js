function compareElements(data1,data2){
    var result = [];
    for(var dt1 of data1){ 
        for(var dt2 of data2){
             // for each and every element of array 1,check if it the same character as elements in array 2.
            if (dt2.toLowerCase() ===dt1.toLowerCase()){
                result.push(dt1); // if so save that character
            }
        }
        
    }
    return result;
}

// display all characters that are the same
console.log(result);