import { findVowels } from  "../../../Task 10/task10.js";

// colors will repeatt themselves incase of large words testing
let colors = [
    "#d2691e","#dc143c","#008080","#2e8b57",
    "#8b008b","#a0522d","#8b0000","#0000ff",
    "#d2691e","#dc143c","#008080","#2e8b57",
    "#8b008b","#a0522d","#8b0000","#0000ff"
];
       
// Access DOM
let word = document.getElementById('word');
let btnVowels= document.getElementById('btnVowels');
let result = document.getElementById('result');

btnVowels.addEventListener('click',function(){
    result.innerHTML = "";
    result.innerHTML ="Vowels found in "+word.value +" are :";
    
    // foreach vowel found,append it to result element, append children span with color and margin on the right.
     findVowels(word.value).forEach((vowel,index)=>{
        result.innerHTML +="<span style=margin-right:3px;background-color:"+colors[index]+">"+vowel +"&nbsp;</span>";
    });
    
 
});
