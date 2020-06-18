var questions = [
    {
        title: "Example Question 1:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "answer from choices"
    },
    {
        title: "Example Question 2:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "answer from choices"
    }
];

var questionBoxEl = document.querySelector("#question-box");

var timerEl = document.querySelector("#timer");

var startText = document.createElement("h1");

var startBtn = document.createElement("button");

var questionText = document.createElement("p");

var highScores = document.querySelector("#highscores");

var answerDiv = document.querySelector("#answer-choices");

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
    var currentQuestion = questions[index];

    questionBoxEl.textContent = "";

    questionText.textContent = currentQuestion.title;

    questionBoxEl.appendChild(questionText);

    // for (let index = 0; index < currentQuestion.choices.length; index++) {


    //     var answerBtn = document.createElement("button");
    //     answerBtn.classList.add("choiceBtn");
    //     answerBtn.textContent = currentQuestion.choices[index];
    //     answersDiv.appendChild(answerBtn)

    // }
    // empty container so questions dont stack on top of each other when you appened next question

    // add current uestion title which is the actual question to appear in the container
    // create a div element to wrap the answer choices

    var answersDiv = document.createElement("div");

// for loop to loop through the questions and create div to display question and buttons to choose
  
    // );
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
startBtn.addEventListener("click", startQuiz);

// document.addEventListener("click", checkAnswer);