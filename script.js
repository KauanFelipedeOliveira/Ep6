function showHint(questionNumber) {
    const hint = document.getElementById(`hint${questionNumber}`);
    hint.style.display = 'block';
}

function checkAnswers() {
    const answer11 = parseFloat(document.getElementById('answer11').value);
    const answer12 = parseFloat(document.getElementById('answer12').value);
    const answer13 = parseFloat(document.getElementById('answer13').value);
    const results = document.getElementById('results');

    const correctAnswers = {
        question1: 500, // Resposta correta para a pergunta 1
        question2: 50,  // Resposta correta para a pergunta 2
        question3: 800   // Resposta correta para a pergunta 3
    };

    results.innerHTML = "";

    if (!isNaN(answer11) && answer11 === correctAnswers.question1) {
        results.innerHTML += "Resposta 1: Correta!<br>";
    } else {
        results.innerHTML += "Resposta 1: Incorreta. A resposta correta é 500.<br>";
    }

    if (!isNaN(answer12) && answer12 === correctAnswers.question2) {
        results.innerHTML += "Resposta 2: Correta!<br>";
    } else {
        results.innerHTML += "Resposta 2: Incorreta. A resposta correta é 50.<br>";
    }

    if (!isNaN(answer13) && answer13 === correctAnswers.question3) {
        results.innerHTML += "Resposta 3: Correta!<br>";
    } else {
        results.innerHTML += "Resposta 3: Incorreta. A resposta correta é 800.<br>";
    }
}