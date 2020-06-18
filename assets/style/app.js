var questions = [
    {
        title: "Example Question 1:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 3"
    },
    {
        title: "Example Question 2:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 1"
    }
];

var questionBoxEl = document.querySelector("#question-box");

var timerEl = document.querySelector("#timer");

var startText = document.createElement("h1");

var startBtn = document.createElement("button");

var questionText = document.createElement("p");

var highScores = document.querySelector("#highscores");

// create clobal variables and a variable to hold our index
var timer = 60;
var qindex = 0;

// create a function that loads a welcome page and a start button to begin the quiz
function welcomePage() {
    startText.textContent = "Welcome to the Quiz!";

    startBtn.textContent = "Start Quiz";

    questionBoxEl.appendChild(startBtn);

    questionBoxEl.appendChild(startText);
}

function startQuiz() {
    console.log("hey friend");

    showTimer();

    nextQuestion();
}
// function that handles the timer
function showTimer() {
    timer = 60;
    timerEl.textContent = "Time Left: " + timer;
    // create setInterval and store it to a variable
    var timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = "Time Left: " + timer;
        if (timer === 0) {
            clearInterval(timerInterval);
        }

    }, 1000)
}

// function that stores the current question 
function nextQuestion() {
    // variable to hold the current question
    var currentQuestion = questions[qindex];
    // clear the start page contents to show the question and answers
    questionBoxEl.textContent = "";
    // create question using the title of current question
    questionText.textContent = currentQuestion.title;
    // display question in the now empty questionBox
    questionBoxEl.appendChild(questionText);
    // create a div to display answer choice buttons
    var answersDiv = document.createElement("div");
    // create for loop to generate buttons based on the array of choices from the object
    for (let index = 0; index < currentQuestion.choices.length; index++) {

        var answerBtn = document.createElement("button");
        answerBtn.classList.add("choiceBtn");
        answerBtn.textContent = currentQuestion.choices[index];
        answersDiv.appendChild(answerBtn);

    }
    questionBoxEl.appendChild(answersDiv);

};

function checkAnswer(event) {
    // if event.target.matches (choiceBtn class)
    if (event.target.matches(".choiceBtn")) {
        // Logic to check for right answer
        qindex++;
        nextQuestion()
    }
}

welcomePage();

// event listener to start the quiz on button click
startBtn.addEventListener("click", startQuiz);
document.addEventListener("click", checkAnswer);
