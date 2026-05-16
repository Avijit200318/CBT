const tl = gsap.timeline();

tl.from("header", {
    y: -200,
    delay: 0.5,
    duration: 1,
    opacity: 0
}, 'a')
.from("#textInfo ul, li", {
    y: 150,
    duration: 1,
    opacity: 0,
    stagger: 0.2
})
.from("#moreInfo", {
    y: 100,
    opacity: 0,
    duration: 0.5
})
.from("#moreInfo div a:nth-child(1)", {
    x: -200,
    opacity: 0,
    duration: 0.5,
}, 'b')
.from("#moreInfo div a:nth-child(2)", {
    opacity: 0,
    scale: 1.2,
    duration: 0.5
}, 'b')
.from("#moreInfo div a:nth-child(3)", {
    x: 200,
    opacity: 0,
    duration: 0.5,
}, 'b')
.from("footer", {
    delay: 0.5,
    y: 150,
    duration: 1,
    opacity: 0
}, 'a')