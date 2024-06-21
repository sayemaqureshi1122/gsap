// gsap.to("#box",{
//     x:1000,
//     duration:3,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue"
// })

// gsap.from("#box", {
//     y:500,
//     duration:3,
//     delay:1,
//     rotate:180,
//     backgroundColor:"green",

// })

//  project

 const t1=gsap.timeline()
t1.from("#nav h3", {
    y:-50,
    opacity:0,
    duration:.8,
    stagger:.3  //stagger- it will bring nav element h3's each after .3sec
})

t1.from("#main h1" ,{
    x: -500,
    opacity:0,
    duration:.8,
   stagger:.3
})
t1.from("img" ,{
    x:100,
    duration:.8,
    rotate:45,
    opacity:0,
    stagger:.5
})

t1.from("#fotter h3",{
    x:-30,
    opacity:0,
    duration:.8,
   stagger:.3


})