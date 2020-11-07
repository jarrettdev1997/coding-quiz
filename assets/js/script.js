// Global Variables
var buttonEl = document.querySelector("#start-quiz");
// ATC? var quizQuestionsObj = [];

// Create fxns that handle quiz interaction
var startQuizHandler = function() {
    if ("click", buttonEl) {
        console.log("begin start quiz");
    }
}

// ATC? var quizQuestionsObj = ["questionOne", "questionTwo", "questionThree", "questionFour", "questionFive"];
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










// Event Listeners
buttonEl.addEventListener("click", startQuizHandler);