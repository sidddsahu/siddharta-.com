

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



gsap.from("#container1",{
  scrollTrigger:{
    trigger:"#container1",
    scroller:"body",
  },
  scale:1.2,
  opacity:0,
  duration:1

})



gsap.from(".container-five .one-box",{
  scrollTrigger:{
    trigger:".one-box",
    scroller:"#main",
  },
  y:400,
  scale:1.2,
  opacity:0,
  // duration:.5

})


gsap.from(".container-five .bottom-box-one",{
  scrollTrigger:{
    trigger:".bottom-box-one",
    scroller:"#main",
    
   
  },
  x:800,
  scale:1.2,
  opacity:0,
})




// gsap.from("#container0",{
//   scrollTrigger:{
//     trigger:"#container0",
//     scroller:"#main",
    
//   },
//   scale:0,
//   opacity:0, 
// })




// gsap.from("#container2 .container2-top",{
//   scrollTrigger:{
//     trigger:"#container2 .container2-top",
//     scroller:"#main",  
//   },
//   x:-800,
//   scale:0,
//   opacity:0,

// })




// gsap.from("#container2 .container",{
//   scrollTrigger:{
//     trigger:"#container2 .container",
//     scroller:"#main", 
//   },
//   x:800,
//   scale:0,
//   opacity:0,
// })

// gsap.from(".container3-child h1",{
//   scrollTrigger:{
//     trigger:".container3-child h1",
//     scroller:"#main",
//     // markers:true,
//   },
//   scale:0,
//   opacity:0,
// })


// gsap.from(".container3-child p",{
//   scrollTrigger:{
//     trigger:".container3-child p",
//     scroller:"#main",
//   },
//    scale:0,
//   opacity:0,
  
 

// })



// gsap.from(".container3-child button",{
//   scrollTrigger:{
//     trigger:".container3-child button",
//     scroller:"#main",
//     // markers:true,
//     // scrub:1,
//     // start:"top 60%",
   
//   },
//   // y:-800,
//   scale:0,
//   opacity:0,
// })





// gsap.from("#container3 .container3-left",{
//   scrollTrigger:{
//     trigger:"#container3 .container3-left",
//     scroller:"#main",
//   },
//   x:-800,
//   scale:0,
//   opacity:0,
// })




// gsap.from("#container3 .container3-right",{
//   scrollTrigger:{
//     trigger:"#container3 .container3-right",
//     scroller:"#main",
//   },
//   x:800,
//   scale:0,
//   opacity:0,
  
// })




// gsap.from("#container4",{
//   scrollTrigger:{
//     trigger:"#container4",
//     scroller:"#main",
//   },
//   x:800,
//   scale:0,
//   opacity:0,
 
// })

// gsap.from("#container5",{
//   scrollTrigger:{
//     trigger:"#container5",
//     scroller:"#main",
//   },
//   x:-800,
//   scale:0,
//   opacity:0,
// })

// gsap.from("#container6",{
//   scrollTrigger:{
//     trigger:"#container6",
//     scroller:"#main",
//   },
//   // y:800,
//   scale:0,
//   opacity:0,

// })





var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
