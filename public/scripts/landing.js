
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








