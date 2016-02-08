var animatePoints = function(){

var revealPoints = function(){
   var pnt = document.querySelectorAll(".point");
    for(var i = 0; i< pnt.length; i++){
     
         pnt[i].style.opacity = 1;
         pnt[i].style.transform = "scaleX(1) translateY(0)";
         pnt[i].style.msTransform = "scaleX(1) translateY(0)";
         pnt[i].style.WebkitTransform = "scaleX(1) translateY(0)";  }  } 
revealPoints();

}


//window.onload(
//setTimeout(revealPoints(),3000);

//);


 window.onload = function() {
    if (window.innerHeight > 950) {
                animatePoints();
                    }
     
     var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

     window.addEventListener("scroll", function(event) {
      
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(//pointsArray
                          );   
         }
     });
 }








