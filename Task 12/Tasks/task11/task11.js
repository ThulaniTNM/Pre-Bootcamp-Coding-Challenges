let colors = [ "#d2691e","#dc143c","#008080","#2e8b57","#8b008b","#a0522d","#8b0000","#0000ff","#d2691e","#dc143c","#008080","#2e8b57","#8b008b","#a0522d","#8b0000","#0000ff"];
 

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
    return [...(new Set(result))]; // convert to set ,convert back to array.
}

let word1 = document.getElementById('word1');
let word2 = document.getElementById('word2');
let btnMatch= document.getElementById('btnMatch');
let result = document.getElementById('result');


btnMatch.addEventListener('click',function(){
    result.innerHTML = "";

    //Result dislay on screen
    result.innerHTML ="Matching characters found in "+word1.value +" and "+word2.value+"<p class=text-muted>(Character non-repeating)</p> are :";
    compareElements(word1.value,word2.value).forEach((character,index)=>{
        result.innerHTML +="<span style=margin-right:3px;background-color:"+colors[index]+">"+character+"&nbsp;</span>";
    });
    
});