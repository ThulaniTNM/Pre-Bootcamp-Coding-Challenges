let vowels = ['a','e','i','o','u','A','E','I','O','U'];

// colors will repeatt themselves incase of large words testing
let colors = [ "#d2691e","#dc143c","#008080","#2e8b57","#8b008b","#a0522d","#8b0000","#0000ff","#d2691e","#dc143c","#008080","#2e8b57","#8b008b","#a0522d","#8b0000","#0000ff"];
       
function findVowels(data){
    let foundVowels = [];
    for(var element of data){ // iterate through the string input
        for(var vowelElement of vowels){ 
            if (element ===vowelElement) // iterate through array input comparing a string input element with vowels
            {
                foundVowels.push(element);
            }
        }
    }
    return foundVowels;
}

let word = document.getElementById('word');

let btnVowels= document.getElementById('btnVowels');
let result = document.getElementById('result');


btnVowels.addEventListener('click',function(){
    result.innerHTML = "";


    //Result dislay on screen
    result.innerHTML ="Vowels found in "+word.value +" are :";
     findVowels(word.value).forEach((vowel,index)=>{
        result.innerHTML +="<span style=margin-right:3px;background-color:"+colors[index]+">"+vowel +"&nbsp;</span>";
    });
    
 
});
