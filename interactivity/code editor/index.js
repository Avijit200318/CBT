const runBtn = document.getElementById('runBtn');
const codeInput = document.getElementById('codeInput');
const outputDisplay = document.getElementById('showOutput');

const scrollDiv = document.querySelector('.scrollbar-custom');
const expectedAnswers = ["[18,22,16,25,12]", "20", "1"];
const passText = document.getElementById("resultText");
const resultCloseBtn = document.getElementById("resCloseBtn");

runBtn.addEventListener('click', () => {
    const code = codeInput.value;
    outputDisplay.textContent = "";

    // Array to temporarily store the actual user outputs for verification
    const userOutputs = [];

    // Save the original console.log
    const oldLog = console.log;

    // Redirect console.log to our output display
    console.log = function(...args) {
        args.forEach(arg => {
            const message = typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg;
            outputDisplay.textContent += message + "\n";


            // For strict comparison (minify objects/arrays so spaces don't break validation)
            const exactMessage = typeof arg === 'object' ? JSON.stringify(arg) : String(arg);
            userOutputs.push(exactMessage);
        });
        oldLog.apply(console, args); // Keep showing in browser dev tools too
    };

    try {
        // Run the user's code
        // new Function is slightly safer and faster than eval()
        const runCode = new Function(code);
        runCode();

        const isCorrect = userOutputs.length === expectedAnswers.length && 
                          userOutputs.every((val, index) => val === expectedAnswers[index]);
        

        // scroll code
        scrollDiv.scrollTo({
        top: scrollDiv.scrollHeight,
        behavior: 'smooth'
        });


        if(isCorrect){
            confetti({
                particleCount: 400,
                spread: 200,
                origin: { y: 0.6 }
            });

            passText.classList.remove("hide");
        }
    } catch (error) {
        // Display errors in red
        outputDisplay.style.color = "#ff5555";
        outputDisplay.textContent = "Error: " + error.message;
    } finally {
        console.log = oldLog;
    }
});



// gsap animation
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


// result text close button

resultCloseBtn.addEventListener('click', () => {
    passText.classList.add("hide");
})