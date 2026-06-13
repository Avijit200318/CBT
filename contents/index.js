const tl = gsap.timeline();

tl.from("header", {
    y: -200,
    delay: 0.5,
    duration: 1,
    opacity: 0
}, 'a')
.from("main img", {
    duration: 0.5,
    scale: 1.2,
    opacity: 0
})
.from("#textInfo p", {
    y: 150,
    duration: 0.5,
    opacity: 0
})
.from("#textInfo ul a li", {
    y: 150,
    duration: 1,
    opacity: 0,
    stagger: 0.2
})
.from("footer", {
    delay: 0.5,
    y: 150,
    duration: 1,
    opacity: 0
}, 'a')