const tl = gsap.timeline();

tl.from("header", {
    delay: 0.5,
    duration: 1,
    y: -100,
    opacity: 0,
})
.from("#heading", {
    top: "100px",
    duration: 0.7,
    opacity: 0,
})
.from("main h3", {
    duration: 0.7,
    stagger: 0.2,
    x: 220,
    opacity: 0
})
.from("main h4", {
    duration: 0.7,
    stagger: 0.2,
    x: -250,
    opacity: 0
})
.from("#start", {
    duration: 0.5,
    opacity: 0,
    scale: 0.7
})