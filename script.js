let questions= [
    {
        message: "Do you get 6 to 8 hours of sleep a day?",
        choices: ["Yes", "No"],
        answer: "Sleep has been proven to reduce stress and improve your mood. Think more clearly and do better in school and at work. Get along better with people. Make good decisions and avoid injuries"
    },
    {
        message: "Do you eat 3 healthy meals a day and drink plenty of water?",
        choices: ["Yes", "No"],
        answer: "A balanced diet and plenty of water can improve your energy and focus throughout the day. Also, limit caffeinated beverages such as soft drinks or coffee."
    },
    {
        message: "Do you exercise regularly?",
        choices: ["Yes", "No"],
        answer: "Just 30 minutes of walking every day can help boost your mood and improve your health. Small amounts of exercise add up, so don’t be discouraged if you can’t do 30 minutes at one time."
    },
    {
        message: "Do you have someone you can talk to when you're feeling sad?",
        choices: ["Yes", "No"],
        answer: "Its important to talk to a friendly face. If you have concerns, stresses or worries, sharing these with someone who cares is one of the most effective ways to calm your nervous system and relieve stress."
    },
    {
        message: "Do you turn to drugs and alcohol when you feel upset?",
        choices: ["Yes", "No"],
        answer: "Keep alcohol use to a minimum and avoid other drugs. Sometimes people use alcohol and other drugs to self-medicate but in reality, alcohol and other drugs only aggravate problems."
    },
    {
        message: "Overall how are you feeling?",
        choices: ["Stressed", "Tired", "Lonely", "Fustrated", "Anxious", "Optimistic"],
    },
];


var startBtn = document.querySelector("#start");

function startQuiz() {
    
    var startScreenEl = document.getElementById("welcome");
    startScreenEl.setAttribute("class", "hide");
  
    
    
}

startBtn.onclick = startQuiz();
