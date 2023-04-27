var quizBank = [{
    prompt: "What will I ask",
    choices: [{
        value: "Answer choice 1",
        correct: true
    }, {
        value: "Answer choice 2",
        correct: false
    }, {
        value: "Answer choice 3",
        correct: false
    }, {
        value: "Answer choice 4",
        correct: false
    }]
},
{
    prompt: "What wi4523452345k",
    choices: [{
        value: "Answer choice 12343",
        correct: true
    }, {
        value: "Answer choice 3432",
        correct: false
    }, {
        value: "Answer choice 343",
        correct: false
    }, {
        value: "Answer choice 344334",
        correct: false
    }]
}]
var currentIndex;
// 1. We need a start button that responds to a click 
// 2. After I click it, two things happen, timer starts, and we show a question
// 3. show question, and we need a way to make the answers clickable, and when they click them we want to do what, checkAnswer()
// 4. When we check the answer,
//  - need to figure out what button was pressed to check if it's right or wrong
//  - if they choose wrong, time go down
//  - if they choose right,  add more points
//  - check if we can move to the next question
//  - if we can move to the next question, repeat step 3 
//  - if we can't move to the next question, gameOver()

//  5. Under the function game over the following will happen
// -Remove the question from the screen
// -Show the user the form so they can submit the intials
// -WHen they submit the form, save the initials and the score to localStorage
// -Render the score in the HighScores Page

//FUnction to show the question
function showQuestion() {
    console.log("Should show question")
    //create an element in my html where I can put my question
    var currentQuestion = quizBank[currentIndex]
    console.log(currentQuestion)
    var prompt = currentQuestion.prompt

    var choices = currentQuestion.choices
    //create an element in my html where I can put my answer choices
    //for loop for my choices array and create a button, tell the button what I want the text content to be,
    //add a lister to the button, so that when it is pressed, it will checkAnswer

}

//Function to check the answer
function checkAnswer(event){
    console.log(event)
    console.log(event.target)
    // check the innerHTML, innerTExt, if it has a class, attribute, or anything you want to do to make sure that it is the ocrrect answer
    // what question I'm att, to know if I can move to the next question
    currentIndex +=1
    showQuestion()
}

// Function to start the timer is necessary
// 
function startTimer() {
    //take care of the timer logic
    console.log("starting the timer")
}


function startQuiz() {
    console.log("starting the quiz")
    currentIndex = 0
    startTimer()
    showQuestion()
}

var startButton = document.getElementById("start")
console.log(startButton)
startButton.addEventListener("click", startQuiz)