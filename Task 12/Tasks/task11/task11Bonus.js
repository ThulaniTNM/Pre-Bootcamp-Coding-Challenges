import { compareElements } from  "../../../Task 11/task11.js";

let colors = [
    "#d2691e","#dc143c","#008080",
    "#2e8b57","#8b008b","#a0522d",
    "#8b0000","#0000ff","#d2691e",
    "#dc143c","#008080","#2e8b57",
    "#8b008b","#a0522d","#8b0000","#0000ff"
];

// Access DOM
let word1 = document.getElementById('word1');
let word2 = document.getElementById('word2');
let btnMatch= document.getElementById('btnMatch');
let result = document.getElementById('result');

btnMatch.addEventListener('click',function(){
    result.innerHTML = "";
    result.innerHTML ="Matching characters found in "+word1.value +" and "+word2.value+"<p class=text-muted>(Character non-repeating)</p> are :";
    
    // foreach matching character append character to result element,add background color and margin to the character.
    compareElements(word1.value,word2.value).forEach((character,index)=>{
        result.innerHTML +="<span style=margin-right:3px;background-color:"+colors[index]+">"+character+"&nbsp;</span>";
    });
    
});