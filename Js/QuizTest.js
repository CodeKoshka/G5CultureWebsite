let timeleft = document.querySelector("#time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQueston = document.querySelector("#number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer =document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount = 0;
let scoreCount = 0;
let count = 3601;
let countdown;
//Todo Change The Questions Si Theodore Na Baha Kung Ano Mga Questions
const quizArray = [
    {
        id: "0",
        question: "Who is In Paris",
        options: [
            "Yes",
            "No",
            "Maybe ",
            "Si Aaron",
        ],
        correct: "Si Aaron",
    },
    {
        id: "1",
        question: "Who is In Paris",
        options: [
            "Yes",
            "No",
            "Maybe ",
            "Si Aaron",
        ],
        correct: "Si Aaron",
    },
    {
        id: "2",
        question: "Who is In Paris",
        options: [
            "Yes",
            "No",
            "Maybe ",
            "Si Aaron",
        ],
        correct: "Si Aaron",
    },
    {
        id: "3",
        question: "Who is In Paris",
        options: [
            "Yes",
            "No",
            "Maybe ",
            "Si Aaron",
        ],
        correct: "Si Aaron",
    },
    {
        id: "4",
        question: "Who is In Paris",
        options: [
            "Yes",
            "No",
            "Maybe ",
            "Si Aaron",
        ],
        correct: "Si Aaron",
    },
    {
        id: "5",
        question: "Who is In Paris",
        options: [
            "Yes",
            "No",
            "Maybe ",
            "Si Aaron",
        ],
        correct: "Si Aaron",
    },
    {
        id: "6",
        question: "Who is In Paris",
        options: [
            "Yes",
            "No",
            "Maybe ",
            "Si Aaron",
        ],
        correct: "Si Aaron",
    },
    {
        id: "7",
        question: "Who is In Paris",
        options: [
            "Yes",
            "No",
            "Maybe ",
            "Si Aaron",
        ],
        correct: "Si Aaron",
    },
    {
        id: "8",
        question: "Who is In Paris",
        options: [
            "Yes",
            "No",
            "Maybe ",
            "Si Aaron",
        ],
        correct: "Si Aaron",
    },
    {
        id: "9",
        question: "Who is In Paris",
        options: [
            "Yes",
            "No",
            "Maybe ",
            "Si Aaron",
        ],
        correct: "Si Aaron",
    },
];

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
  });
  
  nextBtn.addEventListener("click", (displayNext = () => {
    questionCount += 1;
  
    if (questionCount == quizArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      userScore.innerHTML = "Your Score is " +
        scoreCount + " out of " + questionCount;
    } else {
      countOfQueston.innerHTML = questionCount + 1 +
        " of " + quizArray.length + " Question";
  
      quizDisplay(questionCount);
      count = 3601;
      clearInterval(countdown);
      timerDisplay();
    }
  }));

const timerDisplay = () =>{
    countdown = setInterval(() => {
    count--;
    timeleft.innerHTML = `${count}`;
    if(count == 0){
        clearInterval(countdown);
        displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) =>{
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreater() {
    quizArray.sort(() => Math.random() - 0.5);

    countOfQueston.innerHTML = 1 + " of " + quizArray.length + " Question";

    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");


        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">
        ${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">
        ${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">
        ${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">
        ${i.options[3]}</button>    
        `;

        quizContainer.appendChild(div);
    }
}

function checker(userOption){
    let userSolution = userOption.innerText;
    let question = 
    document.getElementsByClassName("container-mid")
    [questionCount];
    let options = question.querySelectorAll(".option-div");

    if(userSolution === quizArray[questionCount].
    correct){
        userOption.classList.add("correct");
        scoreCount++;
    }
    else{
        userOption.classList.add("incorrect");

        options.forEach((element) =>{
            if (element.innerText === quizArray [questionCount].correct){

                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count = 3601;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () => { 
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
