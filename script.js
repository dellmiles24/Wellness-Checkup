// fetch(" https://api.goprogram.ai/inspiration)
// .then( (response) => {
// 5
// return response. json();
// })
// .then((data) => {
// console.log(data. quote);
// });
// // testCall();
// banner.innerHTML = data. quote;
// React
// Reply





let questionIndex = 0;
let questions = [
  {
    message: "Do you get 6 to 8 hours of sleep a day?",
    answers: [
      { text: "Yes", value: "Yes" },
      { text: "No", value: "No" }
    ]
  },
  {
    message: "Do you eat 3 healthy meals a day and drink plenty of water?",
    answers: [
        { text: "Yes", value: "Yes" },
        { text: "No", value: "No" }
    ]
  },
  {
    message: "Do you exercise regularly?",
    answers: [
        { text: "Yes", value: "Yes" },
        { text: "No", value: "No" }
    ]
  },
  {
    message: "Do you have someone you can talk to when you're feeling sad?",
    answers: [
        { text: "Yes", value: "Yes" },
        { text: "No", value: "No" }
    ]
  },
  {
    message: "Do you turn to drugs and alcohol when you feel upset?",
    answers: [
        { text: "Yes", value: "Yes" },
        { text: "No", value: "No" }
    ]
  },
  {
    message: "Overall how are you feeling?",
    answers: [
        { text: "Stressed", value: "Stressed" },
        { text: "Tired", value: "Tired" },
        { text: "Lonely", value: "Lonely" },
        { text: "Fustrated", value: "Fustrated" },
        { text: "Anxious", value: "Anxious" },
        { text: "Optimistic", value: "Optimistic" }
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
// function displayQuotes(){



// display inspiration API
// let banner= document.getElementById('header')
// fetch ('https://api.goprogram.ai/inspiration',{banner})
//     .then(response=> response.json())
//     .then(data => console.log(data));
    
let banner= document.getElementById('header')
fetch ('https://api.goprogram.ai/inspiration',{banner})
    .then(response=> response.json())
    .then(data =>{console.log(data.quote)
      let quote = data.quote
      let dailyQuote =`
      ${quote}
      `
    let quoteEl = document.querySelector(".quote-element")
    quoteEl.append(dailyQuote)
    }
     ); 



    

// const clientId= 'f896823bdaa7451c9d12d03dd086300d';
// const clientSecretId= 'f465fbdee6b84f748528f3abf85eb010';
// const redirectUri=
