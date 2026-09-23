


/* =========================================
   1. YOUR EMAIL
=========================================

   CHANGE THIS EMAIL TO YOUR EMAIL.

   Example:

   const ownerEmail =
       "senthamil@gmail.com";

========================================= */

const ownerEmail =
    "senthamilselvan134@gmail.com";



/* =========================================
   2. YOUR WHATSAPP NUMBER
=========================================

   Put country code WITHOUT +

   India example:

   919876543210

========================================= */

const ownerWhatsApp =
    "919025499447";



/* =========================================
   3. QUESTIONS
=========================================

   You can add/change questions here.

========================================= */

const questions = [

    {
        question:
            "What was your first impression of me? ❤️",

        answers: [
            "He seems nice 😊",
            "He's funny 😂",
            "I don't know you is my relation 😅",
            "Something special ❤️"
            
           
        ]
        
    },


    {
        question:
            "What's your favourite memory with me? 🥹",

        answers: [
            "Our first meeting ❤️",
            "Our conversations 💬",
            "Our funny moments 😂",
            "Every moment 🫶"
        ]
    },


    {
        question:
            "What do you like most about me? 💕",

        answers: [
            "My personality 😊",
            "My smile 😍",
            "My caring nature ❤️",
            "Everything 🫶"
        ]
    },


    {
        question:
            "If we could spend a whole day together, what would you choose? 🌸",

        answers: [
            "Long ride 🏍️",
            "Movie 🎬",
            "something most memorable",
            "Just talking ❤️"
        ]
    },


    {
        question:
            "If i come what do you want? 💌",

        type: "text"
    },

    {
        question:
            "Anything you want to tell me? 💌",

        type: "text"
    }

];



/* =========================================
   4. STORE ANSWERS
========================================= */

let currentQuestion = 0;

let userAnswers = [];



/* =========================================
   5. SHOW QUESTION
========================================= */

function showQuestion() {

    const questionNumber =
        document.getElementById(
            "questionNumber"
        );

    const questionText =
        document.getElementById(
            "questionText"
        );

    const answerArea =
        document.getElementById(
            "answerArea"
        );


    const q =
        questions[currentQuestion];


    questionNumber.innerText =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        questions.length;


    questionText.innerText =
        q.question;


    answerArea.innerHTML = "";


    /* TEXT QUESTION */

    if (q.type === "text") {

        const textarea =
            document.createElement("textarea");

        textarea.className =
            "text-answer";

        textarea.id =
            "textAnswer";

        textarea.placeholder =
            "Write your answer here... ❤️";


        const button =
            document.createElement("button");

        button.className =
            "next-btn";

        button.innerText =
            "Continue ❤️";


        button.onclick =
            function () {

                const answer =
                    textarea.value.trim();


                if (answer === "") {

                    alert(
                        "Please write something ❤️"
                    );

                    return;
                }


                userAnswers.push({
                    question: q.question,
                    answer: answer
                });


                nextQuestion();

            };


        answerArea.appendChild(textarea);

        answerArea.appendChild(button);

        return;
    }


    /* MULTIPLE CHOICE QUESTION */

    q.answers.forEach(function(answer) {

        const button =
            document.createElement("button");


        button.className =
            "answer-btn";


        button.innerText =
            answer;


        button.onclick =
            function () {

                userAnswers.push({
                    question: q.question,
                    answer: answer
                });


                nextQuestion();

            };


        answerArea.appendChild(button);

    });

}



/* =========================================
   6. NEXT QUESTION
========================================= */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        showFinal();

    } else {

        showQuestion();

    }

}



/* =========================================
   7. FINAL SECTION
========================================= */

function showFinal() {

    document
        .getElementById("questions")
        .style.display = "none";


    document
        .getElementById("finalSection")
        .classList.add("show");


    window.scrollTo({
        top:
            document.getElementById(
                "finalSection"
            ).offsetTop,

        behavior: "smooth"
    });


    createHeartBurst();

}



/* =========================================
   8. EMAIL FUNCTION
========================================= */

function sendEmail() {

    if (
        ownerEmail ===
        "YOUR_EMAIL@gmail.com"
    ) {

        alert(
            "First change YOUR_EMAIL@gmail.com in the JavaScript section."
        );

        return;
    }


    let message =
        "❤️ Love Page Answers ❤️\n\n";


    userAnswers.forEach(
        function(item, index) {

            message +=
                "Question " +
                (index + 1) +
                ":\n";

            message +=
                item.question +
                "\n";

            message +=
                "Answer: " +
                item.answer +
                "\n\n";

        }
    );


    const subject =
        "❤️ Answers From Your Love Page";


    const mailto =
        "mailto:" +
        ownerEmail +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(message);


    window.location.href =
        mailto;

}



/* =========================================
   9. WHATSAPP FUNCTION
========================================= */

function sendWhatsApp() {

    let message =
        "❤️ Love Page Answers ❤️\n\n";


    userAnswers.forEach(
        function(item, index) {

            message +=
                "*" +
                (index + 1) +
                ". " +
                item.question +
                "*\n";

            message +=
                item.answer +
                "\n\n";

        }
    );


    const whatsappURL =
        "https://wa.me/" +
        ownerWhatsApp +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

}



/* =========================================
   10. MUSIC
========================================= */

const song =
    document.getElementById(
        "loveSong"
    );


function toggleMusic() {

    const button =
        document.querySelector(
            ".music-btn"
        );


    if (song.paused) {

        song.play();

        button.innerText =
            "⏸ Pause Music";

    } else {

        song.pause();

        button.innerText =
            "▶ Play Music";

    }

}



/* =========================================
   11. HERO BUTTON
========================================= */

function scrollToLove() {

    document
        .getElementById("love")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================================
   12. FLOATING HEARTS
========================================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "heart";


    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💞"
    ];


    heart.innerText =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 + Math.random() * 25) +
        "px";


    heart.style.animationDuration =
        (4 + Math.random() * 4) +
        "s";


    document.body.appendChild(
        heart
    );


    setTimeout(
        function() {

            heart.remove();

        },
        8000
    );

}



/* =========================================
   13. HEART BURST
========================================= */

function createHeartBurst() {

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(
            function() {
                createHeart();
            },
            i * 100
        );

    }

}



/* =========================================
   14. START HEART ANIMATION
========================================= */

setInterval(
    createHeart,
    900
);



/* =========================================
   15. START FIRST QUESTION
========================================= */

showQuestion();


