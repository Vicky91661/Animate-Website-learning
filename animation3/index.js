var timeLine = gsap.timeline();
gsap.set(".a",{
    opacity:0,
    y:10
})

gsap.set(".right img",{
    opacity:0,
    y:10,
    scale:1.6
}
)

timeLine.from(".left",{
    width:0,
    duration:1,
    ease: Expo.easeInOut
}).from(".right",{
    width:0,
    duration:1,
    ease: Expo.easeInOut
}).to(".a",{
    opacity:1,
    y:0,
    ease: Expo.easeInOut,
    duration:1,
    stagger:0.2,
    delay:-1
}).to(".right img",{
    opacity:1,
    y:0,
    scale:1,
    duration:1,
    delay:-1.5,
    ease: Expo.easeInOut,
})


