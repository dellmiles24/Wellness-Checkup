// let questions= [
//     {
//         message: "Do you get 6 to 8 hours of sleep a day?",
//         choices: ["Yes", "No"],
//         answer: "Sleep has been proven to reduce stress and improve your mood. Think more clearly and do better in school and at work. Get along better with people. Make good decisions and avoid injuries"
//     },
//     {
//         message: "Do you eat 3 healthy meals a day and drink plenty of water?",
//         choices: ["Yes", "No"],
//         answer: "A balanced diet and plenty of water can improve your energy and focus throughout the day. Also, limit caffeinated beverages such as soft drinks or coffee."
//     },
//     {
//         message: "Do you exercise regularly?",
//         choices: ["Yes", "No"],
//         answer: "Just 30 minutes of walking every day can help boost your mood and improve your health. Small amounts of exercise add up, so don’t be discouraged if you can’t do 30 minutes at one time."
//     },
//     {
//         message: "Do you have someone you can talk to when you're feeling sad?",
//         choices: ["Yes", "No"],
//         answer: "Its important to talk to a friendly face. If you have concerns, stresses or worries, sharing these with someone who cares is one of the most effective ways to calm your nervous system and relieve stress."
//     },
//     {
//         message: "Do you turn to drugs and alcohol when you feel upset?",
//         choices: ["Yes", "No"],
//         answer: "Keep alcohol use to a minimum and avoid other drugs. Sometimes people use alcohol and other drugs to self-medicate but in reality, alcohol and other drugs only aggravate problems."
//     },
//     {
//         message: "Overall how are you feeling?",
//         choices: ["Stressed", "Tired", "Lonely", "Fustrated", "Anxious", "Optimistic"],
//     },
// ];



let questionIndex = 0;
let questions = [
  {
    message: "Have you had your breakfast?",
    answers: [
      { text: "Yes", value: "Yes" },
      { text: "No", value: "No" }
    ]
  },
  {
    message: "Did you make your bed?",
    answers: [
        { text: "Yes", value: "Yes" },
        { text: "No", value: "No" }
    ]
  },
  {
    message: "Did you check your schedule for the day?",
    answers: [
        { text: "Yes", value: "Yes" },
        { text: "No", value: "No" }
    ]
  }
];

function renderQuestion() {
  let question = questions[questionIndex];
  let answersHTML = question.answers
    .map(answer => {
      return `<button value="${answer.value}">${answer.text}</button>`;
    })
    .join("");
  document.querySelector("#questionMsg").innerHTML = question.message;
  document.querySelector("#answers").innerHTML = answersHTML;
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".start-btn").addEventListener("click", function() {
    renderQuestion();
  });
  document.querySelector("#answers").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      questionIndex++;
      if (questionIndex < questions.length) {
        renderQuestion();
      } else {
        document.querySelector("#questionMsg").innerHTML = "Thank you for taking the Wellness Check-Up!";
        document.querySelector("#answers").innerHTML = "";
      }
    }
  });
});
