const tl = gsap.timeline();
const result = document.querySelector("#result");

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
.from(".question", {
	y: 300,
	opacity: 0,
	duration: 1,
	stagger: 0.2
})
.from(".submit", {
	opacity: 0,
	duration: 0.5,
	onComplete: () => {
		result.classList.remove("hide")
  }
})

// check button logic

let answersIdx = [1, 2, 1, 1, 3]
let points = [0, 0, 0, 0, 0];

const passLogo = document.getElementById("pass");
const failLogo = document.getElementById("fail");
const scorePercent = document.getElementById("score-percent");
const scorePoint = document.getElementById("score-point");
const bottomBtns = document.getElementById("bottom");

const checkAnswer = (idx) => {
    const questionBlocks = document.querySelectorAll('.question');
    const currentQuestion = questionBlocks[idx];

    const selectedRadio = currentQuestion.querySelector('input[type="radio"]:checked');

    if (!selectedRadio) {
        alert("Please select an option before checking your answer!");
        return;
    }

    const allLabels = currentQuestion.querySelectorAll('.options label');
	console.log("all labels: ", allLabels)
    allLabels.forEach(label => {
        label.classList.remove('correct', 'incorrect');
    });

    const selectedLabel = selectedRadio.nextElementSibling;

	const allRadios = Array.from(currentQuestion.querySelectorAll('input[type="radio"]'));
    const userAnswer = allRadios.indexOf(selectedRadio);
	// console.log("user answer: ", userAnswer)
    const correctAnswer = answersIdx[idx];
	// console.log("correct answer: ", correctAnswer)

    if (userAnswer === correctAnswer) {
        selectedLabel.classList.add('correct');
		points[idx] = 1;
    } else {
        selectedLabel.classList.add('incorrect');
		points[idx] = 0;
    }
}


// show restult
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener('click', () => {
	result.classList.add("show");

	let temp = 0;
	points.forEach((ele) => temp += ele);

	scorePercent.textContent = `${temp * 20}%`
	scorePoint.textContent = `${temp}`

	if(temp >= 4){
		passLogo.classList.remove("hide");
		failLogo.classList.add("hide");
		bottomBtns.classList.add("hide");
		passText.classList.remove("hide");

		confetti({
                particleCount: 250,
                spread: 120,
                origin: { y: 0.6 }
        });
	}else{
		passLogo.classList.add("hide");
		failLogo.classList.remove("hide");
		bottomBtns.classList.remove("hide");
		passText.classList.add("hide");
	}
})


// close button
const closeBtn = document.getElementById("close");

closeBtn.addEventListener('click', () => {
	result.classList.toggle("show");
})