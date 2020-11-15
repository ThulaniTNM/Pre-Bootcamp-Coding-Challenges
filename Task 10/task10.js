// Task 10
export function findVowels(data){
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let matchVowels = [];
    
    // iterate through data argument comparing each element with the entire elements of the vowels.
    for(var element of data){ 
        for(var vowelElement of vowels){ 
            if (element ===vowelElement) 
            {
                matchVowels.push(element);
            }
        }
    }

    return matchVowels;
  }
  
console.log(findVowels("ThulanI"));