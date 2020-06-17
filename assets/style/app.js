var questions = [
    {
        title: "Example Question 1: ",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 3"
    },
    {
        title: "Example Question 1: ",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 3"
    }
];

var questionBoxEl = document.querySelector("#question-box");

var timerEl = document.querySelector("#timer");

var highScores = document.querySelector("#highscores")

var startText = document.createElement("h1");

var startBtn = document.createElement("button");

var questionText = document.createElement("p");

// create clobal variables and a variable to hold our index
var timer = 60;

// create a function that loads a welcome page and a start button to begin the quiz
function welcomePage() {
    startText.innerHTML = "Welcome to the Quiz!";
    startBtn.innerHTML = "Start Quiz";
 $(".header").append(startText, startBtn);
    
}

// function that handles the timer
function showTimer() {
    timerEl.textContent = "Time Left: " + timer;
    // create setInterval and store it to a variable
    var timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = timer;
        if (timer === 0) {
            clearInterval(timerInterval)
        }

    }, 1000)
}
function startQuiz() {
    showTimer();
    nextQuestion();
}
// function that stores the current question 
function nextQuestion() {
    var currentQuestion = questions[index];

    // empty container so questions dont stack on top of each other when you appened next question
    questionBoxEl.textContent = "";
    // add current uestion title which is the actual question to appear in the container
    questionText.textContent = currentQuestion.title;

    questionBoxEl.appendChild(questionText);
    // create a div element to wrap the answer choices
    var answersDiv = document.createElement("div");

// for loop to loop through the questions and create div to display question and buttons to choose
    for (let i = 0; i < currentQuestion.choices.length; i++) {

        var answerBtn = document.createElement("button");
        answerBtn.classList.add("choiceBtn");
        answerBtn.textContent = currentQuestion.choices[i];
        answersDiv.appendChild(answerBtn)

    }
    questionBoxEl.appendChild(answerDiv);
};

function checkAnswer(event) {
// if event.target.matches (choiceBtn class)
if (event.target.matches(".choiceBtn")) {
// Logic to check for right answer
index++;
nextQuestion()
}
}

welcomePage();
// function when start Button is clicked hides the welcome heading and start button
// then function that shows the first question and starts timer

// function that handles the timer
// event listener to start the quiz on button click
startBtn.addEventListener("click", startQuiz)

document.addEventListener("click", checkAnswer);