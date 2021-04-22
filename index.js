let score = 0;
let q_count = 0;
window.onload = function () {
    show(0);
}
let q = [
    {
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "script",
        options: [
            "script",
            "javascript",
            "scripting",
            "js"
        ]
    },
    {
        id: 2,
        question: "Where is the correct place to insert a JavaScript?",
        answer: `Both the &lt;head&gt; section and the &lt;body&gt; section are correct`,
        options: [

            "The &lt;head&gt; section",
            "The &lt;body&gt; section",
            "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
            "None"
        ]
    },
    {
        id: 3,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 4,
        question: "The external JavaScript file must contain the &lt;script&gt; tag.",
        answer: "False",
        options: [

            "True",
            "False",
            "Both",
            "None"

        ]
    },
    {
        id: 5,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 6,
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: [

            "function myFunction()",
            "function:myFunction()",
            "function = myFunction()",
            "None"
        ]
    },
    {
        id: 7,
        question: "How do you call a function named &quot;myFunction&quot;?",
        answer: "myFunction()",
        options: [

            "call function myFunction()",
            "call myFunction()",
            "myFunction()",
            "None"

        ]
    },
    {
        id: 8,
        question: "How to write an IF statement in JavaScript?",
        answer: "if (i == 5)",
        options: [
            "if i = 5 then",
            "if i == 5 then",
            "if (i == 5)",
            " if i = 5",
        ]
    },
    {
        id: 9,
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    },
    {
        id: 10,
        question: "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",
        answer: "if(i != 5) ",
        options: [

            "if (i <> 5)",
            "if i <> 5",
            "if (i != 5)",
            "if i =! 5 then",

        ]
    }
];

function submitForm(event) {
    event.preventDefault();
    let user = document.forms["start_form"]["user"].value;


    sessionStorage.setItem("user", user);
    location.href = "quiz.html";
    console.log(user);
}

function next() {

    let user_ans = document.querySelector("li.option.active").innerHTML;
    if (user_ans == q[q_count].answer) {
        score += 1;
        sessionStorage.setItem("score", score);
    }
    if (q_count == q.length - 1) {
        sessionStorage.setItem("time", `${min} : ${sec}`);
        clearInterval(u_time);
        location.href = "final.html";
    }

    q_count++;
    show(q_count);


}

function show(count) {
    let question = document.getElementById("q");
    //question.innerHTML = "<h2>" + q[count].question + "</h2>";
    question.innerHTML = `<h2>${q[count].question}</h2>
    <ul class="diff_option">
                    <li class="option">${q[count].options[0]}</li>
                    <li class="option">${q[count].options[1]}</li>
                    <li class="option">${q[count].options[2]}</li>
                    <li class="option">${q[count].options[3]}</li>
                </ul>`;
    toggleClick();
}

function toggleClick() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}