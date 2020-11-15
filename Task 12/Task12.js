$(function(){

    let $links = $('a[href *= "#"]');
    let btnInfo = 'btn-info';
    let linkActive = "linkActive";

    $links.on('click',function(){

        // remove css background from any element to make sure that only one element that is clicked will have a different background
        $links.removeClass(linkActive);
         
        // iterate ,make sure that any links that doesnt have btn-info has it ,because a linked that was once pressed removes btn-info
        $links.each(function(){
            if (!this.classList.contains(btnInfo)){
                this.classList.add(btnInfo);
            }
        });

        // Remove btn-info class, replace with linkActive
        $(this).removeClass(btnInfo);
        $(this).addClass('linkActive');
        
        // Use popup instead of navigating to new page with links href attribute
        // page name to go to is same as links text,convert link text to lower case,remove whitespace from link text to match filename with no whitesace
        let urlName = this.innerHTML.replace(" ","").toLowerCase();
        
      
        // Have to load window on click,no need to reference it ,it can close itself.
     
        window.open("./Tasks/"+urlName+"/"+urlName+".html","Test",
        "resizable = true,locaiton = true,width=700,height=500,top=100,left=500");
    });

    
    
 
});