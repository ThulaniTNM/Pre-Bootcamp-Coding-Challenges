// Task 11
// Find matching elements in two data structures.
export function compareElements(data1,data2){
    var result = [];
    
    for(let i=0;i<data1.length;i++){
        for(let k=0;k<data2.length;k++){
            if (data1[i].toLowerCase() ===data2[k].toLowerCase()){
                result.push(data1[i]);
            }
        }
    }
    return [...new Set( result)]; 
  }
  
console.log(compareElements("honey", "moon"));