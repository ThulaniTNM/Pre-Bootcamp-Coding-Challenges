// Task 11
export function compareElements(data1,data2){
    var result = [];
  
    // commpare each element in argument data1 with every element in argument data2
    // push matching element to array
    //Return array with duplicates removed.
    for(var dt1 of data1){ 
        for(var dt2 of data2){
            if (dt2.toLowerCase() ===dt1.toLowerCase()){
                result.push(dt1);
            }
        }
        
    }
    return [...new Set( result)]; 
  }
  
console.log(compareElements("honey", "moon"));