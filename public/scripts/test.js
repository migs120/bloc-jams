//=======bloc========
//========version========

//var pointsArray = document.getElementsByClassName('point');
//
//var revealPoint = function(point){
//    point.style.opacity = 1;
//    point.style.transform = 'scaleX(1) translateY(0)';
//    point.style.msTransform ='scaleX(1) translateY(0)';
//    point.style.WebkitTransform = 'scaleX(1) translateY(0)'
//    };
//
//var animatePoints = function(pointsAry){
//  forEach(pointsAry, revealPoint);  
//};
//
//window.onload = function(){
//    if(window.innerHeight > 950){
//        animatePoints(pointsArray);
//    }
//    
//    
//    window.addEventListener('scroll', function(event){
//        
//        if(pointsArray[0].getBoundingClientRect().top <= 500){animatePoints(pointsArray)};
//        
//    });
//    
//}
//
//
//
//function forEach(ary, callbac){
//    for(var i = 0; i < ary.length; i++){
//        callbac(ary[i]);
//        
//    }
//    
//    
//}


//=========migs===========================
//========verion============================




var pnt = document.querySelectorAll(".point");
var animatePoints = function(a,forEach){
                                        var revealPoints = function(pnts){
                                                                            console.log(forEach);
                                                                            forEach();
                                                                        } 
                                        revealPoints(a);
                                       }

 window.onload = function() {
                            if (window.innerHeight > 950) {
                                                        animatePoints(pnt);
                                                          }

                             var sellingPoints = document.getElementsByClassName('selling-points')[0];
                             var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;


                             //code break down for understanding
                             console.log(
                                         window.innerHeight, //browser window size
                                         sellingPoints.getBoundingClientRect().top,//div point top location
                                         sellingPoints.getBoundingClientRect().bottom//div point bottom location
                                        );


                             window.addEventListener("scroll", function(event) {

                                                if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
                                                         animatePoints(pnt,forEach);   
                                                     }
                                                 });
                                            }






var forEach = function(){
   
    for(var x = 0; x < pnt.length; x++){
        console.log(pnt[x].innerHTML)
    }
    
        for(var i = 0; i< pnt.length; i++){
     
         pnt[i].style.opacity = 1;
         pnt[i].style.transform = "scaleX(1) translateY(0)";
         pnt[i].style.msTransform = "scaleX(1) translateY(0)";
         pnt[i].style.WebkitTransform = "scaleX(1) translateY(0)";  } 
    
    
}


































