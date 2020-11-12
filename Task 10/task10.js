var vowels = ['a','e','i','o','u','A','E','I','O','U'];
       
function findVowels(data){
    for(var element of data){ // iterate through the string input
        for(var vowelElement of vowels){ 
            if (element ===vowelElement) // iterate through array input comparing a string input element with vowels
            {
                console.log(element);
            }
        }
    }
}

console.log(findVowels("ThulanI"));