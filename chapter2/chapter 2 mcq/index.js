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
.from(".question", {
	y: 300,
	opacity: 0,
	duration: 1,
	stagger: 0.2
})



// check button logic

let answersIdx = [1, 3, 1, 0, 1]

const checkAnswer = (idx) => {
    const questionBlocks = document.querySelectorAll('.question');
    const currentQuestion = questionBlocks[idx];

    const selectedRadio = currentQuestion.querySelector('input[type="radio"]:checked');
	console.log("selcted raidio: ", selectedRadio)

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
	console.log("user answer: ", userAnswer)
    const correctAnswer = answersIdx[idx];
	console.log("correct answer: ", correctAnswer)

    if (userAnswer === correctAnswer) {
        selectedLabel.classList.add('correct');
    } else {
        selectedLabel.classList.add('incorrect');
    }
}