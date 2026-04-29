const tl = gsap.timeline();

tl.from("header", {
    y: -200,
    delay: 0.5,
    duration: 0.75,
    opacity: 0
})
.from("main img", {
    duration: 0.5,
    scale: 1.2,
    opacity: 0
})
.from("#textInfo", {
    y: 150,
    duration: 0.5,
    opacity: 0
})
.from("footer", {
    y: 150,
    duration: 0.5,
    opacity: 0
})