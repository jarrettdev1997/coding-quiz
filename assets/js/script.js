// Global Variables
var buttonEl = document.querySelector("#start-quiz");
var questionEl = document.querySelector("#question-cards");
var quizQuestionsObj = [];

// Create fxns that handles quiz interaction
var startQuizHandler = function() {
    if ("click", buttonEl) {
        var quizContent = document.getElementById("quiz-landing-page");
        //quizContent.remove();

    };
    
function startQuiz() {
        var buttonEl = document.getElementById("question-cards");
        if (buttonEl.style.display === "none") {
            buttonEl.style.display = "block";
        }
        else {
            buttonEl.style.display = "none";
        }
    }
 
startQuiz();
}


var quizQuestionsObj = ["questionOne", "questionTwo", "questionThree", "questionFour", "questionFive"];

var questionOne = {
    title: "Arrays in javaScript can be used to store ______ .",
        choices: [
            "Numbers and Strings",
            "Other arrays",
            "Booleans",
            "All of the above"
        ],
        answer: "All of the above"
};

var questionTwo = {
    
}










// Event Listeners
buttonEl.addEventListener("click", startQuizHandler);