const tl = gsap.timeline();

tl.from("header", {
    y: -200,
    delay: 0.5,
    duration: 1,
    opacity: 0
}, 'a')
.from(".head", {
    opacity: 0,
    duration: 0.5
})
.from("#textInfo1", {
    y: 150,
    duration: 0.5,
    opacity: 0
})
.from("#textInfo1 .left", {
    x: -200,
    opacity: 0,
    duration: 0.75
}, 'c')
.from("#textInfo1 .right", {
    x: 200,
    opacity: 0,
    duration: 0.75
}, 'c')
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

// toggle button
const devloperBtn = document.querySelector("#dev")
const userBtn = document.querySelector("#user")

const devTable = document.querySelector("#textInfo1")
const userTable = document.querySelector("#textInfo2")

devloperBtn.addEventListener('click', () => {
    userBtn.classList.remove("active");
    devloperBtn.classList.add("active")

    userTable.classList.add("hide")
    devTable.classList.remove("hide")
})

userBtn.addEventListener('click', () => {
    devloperBtn.classList.remove("active");
    userBtn.classList.add("active")

    devTable.classList.add("hide")
    userTable.classList.remove("hide")
})