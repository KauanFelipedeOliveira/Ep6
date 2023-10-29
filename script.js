function showHint(questionNumber) {
    const hint = document.getElementById(`hint${questionNumber}`);
    hint.style.display = 'block';
}

function checkAnswers() {
    const answer11 = parseFloat(document.getElementById('answer11').value);
    const answer12 = parseFloat(document.getElementById('answer12').value);
    const answer13 = parseFloat(document.getElementById('answer13').value);
    const results = document.getElementById('results');

    const correctAnswer = "3";
    function exibirResposta() {
        var resposta = document.getElementById("answer11").value;
        
        if(resposta.trim() !== "") {
            if(resposta === correctAnswer) {
                console.log("Resposta correta!");
            }
            else {
                console.log("Resposta incorreta");
            }
        }
    }

    results.innerHTML = "";

    if (!isNaN(answer11) && answer11 === correctAnswers.question1) {
        results.innerHTML += "Resposta 1: Correta!<br>";
    } else {
        results.innerHTML += "Resposta 1: Incorreta. A resposta correta é 3.<br>";
    }

    if (!isNaN(answer12) && answer12 === correctAnswers.question2) {
        results.innerHTML += "Resposta 2: Correta!<br>";
    } else {
        results.innerHTML += "Resposta 2: Incorreta. A resposta correta é -5.<br>";
    }

    if (!isNaN(answer13) && answer13 === correctAnswers.question3) {
        results.innerHTML += "Resposta 3: Correta!<br>";
    } else {
        results.innerHTML += "Resposta 3: Incorreta. A resposta correta é -2.<br>";
    }
}