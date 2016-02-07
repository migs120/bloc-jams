var revealPoint = function(){
   var pnt = document.querySelectorAll(".point");
    for(var i = 0; i< pnt.length; i++){
       //function() {
         pnt[i].style.opacity = 1;
         pnt[i].style.transform = "scaleX(1) translateY(0)";
         pnt[i].style.msTransform = "scaleX(1) translateY(0)";
         pnt[i].style.WebkitTransform = "scaleX(1) translateY(0)";
    // }   
    }
    
    
}

setTimeout(revealPoint(),90000000);













