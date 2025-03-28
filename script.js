// General quiz questions
document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Diamond", "Ruby", "Emerald", "Sapphire"],
            answer: "Diamond"
        },
        {
            question: "Which planet in our solar system has the most moons?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            answer: "Saturn"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "HyperText Machine Learning", "HighText Markdown Language", "HyperTool Multi Language"],
            answer: "HyperText Markup Language"
        },
        {
            question: "Which CSS property controls the text size?",
            options: ["font-size", "text-style", "text-size", "font-style"],
            answer: "font-size"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "Which organ in the human body is responsible for pumping blood?",
            options: ["Liver", "Brain", "Heart", "Lungs"],
            answer: "Heart"
        },
        {
            question: "What gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Carbon Dioxide"
        },
        {
            question: "What is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            answer: "2"
        },
        {
            question: "Who is considered the father of computers?",
            options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
            answer: "Charles Babbage"
        },
        {
            question: "What is the capital of Japan?",
            options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
            answer: "Tokyo"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Jupiter", "Saturn", "Earth", "Mars"],
            answer: "Jupiter"
        }
    ];

    // DOM references
    const questions01 = document.getElementById('question');
    const options01 = document.getElementById('options');
    const nextButton = document.getElementById('next-btn');  // <-- Ensure this ID matches your HTML
    const score01 = document.getElementById('score');

    let currentQuestionIndex = 0;
    let score = 0;

    // Load Question Function
    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questions01.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        options01.innerHTML = '';

        currentQuestion.options.forEach((option) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('btn');
            button.onclick = () => checkAnswer(option);
            options01.appendChild(button);
        });

        nextButton.style.display = 'none';
    }

    // Check Answer Function
    function checkAnswer(selectedOption) {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            score++;
        }

        const buttons = options01.querySelectorAll('.btn');
        buttons.forEach(btn => {
            if (btn.textContent === currentQuestion.answer) {
                btn.style.backgroundColor = '#4CAF50';
            } else if (btn.textContent === selectedOption) {
                btn.style.backgroundColor = '#FF6347';
            }
            btn.disabled = true;
        });

        nextButton.style.display = 'block';
    }

    // Next Question Function
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            questions01.textContent = "Quiz Completed!";
            options01.innerHTML = `Your score: ${score} / ${questions.length}`;
            nextButton.style.display = 'none';
        }
    }

    // Initial Load
    loadQuestion();
    nextButton.onclick = nextQuestion;
});
