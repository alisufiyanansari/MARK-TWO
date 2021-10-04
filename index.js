var readlineSync = require("readline-sync")

var scores = 0

var highestScore = {
  name: "ALI SUFFIAN",
  score: 4,
}

var questionBank = [
  {
    question: "1. What is the full name of Dr. Abdul Kalam?",
    answer: " Avul Pakir Jainulabdeen Abdul Kalam ",
  },
  {
    question: "When was Dr. APJ. Abdul Kalam born?",
    answer: "15 October 1931",
  },
  {
    question: "Which Island is named after Dr. A.P.J. Abdul Kalam?",
    answer: "Wheeler Island",
  },
  {
    question:
      "Which of the following award is not given to Dr. A.P.J. Abdul Kalam?",
    answer: " Shanti Swaroop Bhatnagar",
  },
  {
    question: "Dr. A.P.J. Abdul Kalam was the ..... President of India?",
    answer: "11",
  },
]

function welcome() {
  var userName = readlineSync.question("What is your name? ")
  console.log("Welcome " + userName + " to do you know APJ ABDUL KALAM")
}

function askQuestion(question, answer) {
  var resAnswer = readlineSync.question(question)
  if (resAnswer.toLowerCase() === answer.toLowerCase()) {
    scores = scores + 1
    console.log("Correctly answered | Current Score: " + scores)
  } else {
    console.log("Naah! Wrong Answer | Current Score: " + scores)
  }
  console.log("--------------")
}

function play() {
  for (var i = 0; i < questionBank.length; i++) {
    var currentQuestion = questionBank[i]
    askQuestion(currentQuestion.question, currentQuestion.answer)
  }
}

function outro() {
  console.log("Your Final SCORE: ", scores)
  console.log(
    "Current Highest Score: " +
      highestScore.score +
      " made by " +
      highestScore.name
  )
  if (scores > highestScore.score) {
    console.log(
      "Congratulations!!! You have made new record by scoring " + scores
    )
    console.log("Contact me to update the this")
  }
}

welcome()
play()
outro()
