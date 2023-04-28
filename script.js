
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


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'How many leg does Dog have?',
    answers: [
      { text: '4', correct: true },
      { text: '1', correct: false },
      { text: '2', correct: false },
      { text: '8', correct: false }
    ]
  },
  {
    question: 'What is your favorite food?',
    answers: [
      { text: 'Fried Chicken', correct: true },
      { text: 'Rice', correct: true },
      { text: 'Pizza', correct: true },
      { text: 'Pho', correct: true }
    ]
  },
  {
    question: 'What is your favorite brand of car?',
    answers: [
      { text: 'BMW', correct: false },
      { text: 'TOyota', correct: true },
      { text: 'Nissan', correct: false },
      { text: 'ford', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '16', correct: false },
      { text: '9', correct: false },
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]