
const tl = gsap.timeline();

tl.from("header", {
	y: -200,
	delay: 0.5,
	duration: 1,
	opacity: 0
}, 'a')
.from("main .left", {
	x: -500,
	duration: 0.75,
	opacity: 0
}, 'b')
.from("main .right", {
	x: 300,
	duration: 0.75,
	opacity: 0
}, 'b')
.from("footer", {
	delay: 0.5,
	y: 150,
	duration: 1,
	opacity: 0
}, 'a')