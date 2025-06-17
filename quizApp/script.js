const quizData = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",
    correct: "c"
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b"
  },
  {
    question: "Which HTML tag is used to define a paragraph?",
    a: "<p>",
    b: "<h1>",
    c: "<div>",
    d: "<span>",
    correct: "a"
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b"
  }
];

let questionIndex = 0;
let total = quizData.length; 
let correct = 0, wrong = 0;
let quesBox = document.getElementById("quesBox");
let options = document.querySelectorAll(".option");
let progress = document.querySelector(".progress");

const loadQuestion = () => {
  reset();

  const data = quizData[questionIndex];
  quesBox.innerText = `${questionIndex + 1}) ${data.question}`;
  options[0].nextElementSibling.innerText = `A) ${data.a}`;
  options[1].nextElementSibling.innerText = `B) ${data.b}`;
  options[2].nextElementSibling.innerText = `C) ${data.c}`;
  options[3].nextElementSibling.innerText = `D) ${data.d}`;

  progress.innerText = `Question ${questionIndex + 1} of ${total}`;
};

const getAns = () => {
  let answer = null;
  options.forEach(input => {
    if (input.checked) {
      answer = input.value;
    //   console.log(answer);
    }
  });
  return answer;
};


const reset = () => {
  options.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.querySelector(".question-box").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${correct} / ${total}</p>
    <p>Correct: ${correct}</p>
    <p>Wrong: ${wrong}</p>
  `;
};

document.getElementById("submit").addEventListener("click", () => {
  const ans = getAns();
  if (ans === null) {
    alert("Please select an answer before submitting.");
    return;
  }

  if (ans === quizData[questionIndex].correct) {
    correct++;
  } else {
    wrong++;
  }

  questionIndex++;
  if (questionIndex < total) {
    loadQuestion();
  } else {
    endQuiz();
  }
});

loadQuestion();
