//DOM Elements
var quiz = document.querySelector("#quiz");
var quizIntro = document.querySelector("#quizintro");
var start = document.querySelector("#start");
var quizQuestions = [
    {
        title: "How are you?",
        choices: ["good", "bad", "ok", "sad"],
        answer: "good"
    },{
        title: "How was your week?",
        choices: ["good", "bad", "ok", "sad"],
        answer: "good"
    },{
        title: "Do you travel?",
        choices: ["yes", "no", "occasionally", "only for work"],
        answer: "yes"
    },{
        title: "Can you do coding?",
        choices: ["yes", "no", "occasionally", "only for work"],
        answer: "yes"
    }
]

var startBtn = document.getElementById("start-btn");
var questionHTML = document.getElementById("question-title");

startBtn.addEventListener("click", function(){
   displayQuestion();
})


function displayQuestion() {
   
    for(var i = 0; i < 4 ; i++) { 
        
        var li = document.createElement("li")
        li.textContent=quizQuestions[i].title
        questionHTML.appendChild(li)
    }
}