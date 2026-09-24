/*Imports --------------------- */ 


gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

/* Variables -------------------------------  */

/* Fonctions-----------------------------------*/ 

/* Animation premier section --------------------- */ 


 /* Animation deuxieme section --------------------- */ 
 
 /* Photos section 2 - Draggable --------------------- */
Draggable.create(".photosSection2 img",);
gsap.from("#section2" ,{
    x:"400px" ,
    duration: 2,
 })
 /* Animation section 3 --------------------- */ 
 gsap.from("#section3 > div" ,{
    scrollTriger:{
        trigger:"top 80%" ,
        scrub:1
    },
    y:100
 });

 
 
 