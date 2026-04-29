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
.from("#moreInfo", {
    y: 100,
    opacity: 0,
    duration: 0.5
})
.from("#moreInfo div button:nth-child(1)", {
    x: -200,
    opacity: 0,
    duration: 0.5,
}, 'a')
.from("#moreInfo div button:nth-child(2)", {
    opacity: 0,
    scale: 1.2,
    duration: 0.5
}, 'a')
.from("#moreInfo div button:nth-child(3)", {
    x: 200,
    opacity: 0,
    duration: 0.5,
}, 'a')
.from("footer", {
    y: 150,
    duration: 0.5,
    opacity: 0
})