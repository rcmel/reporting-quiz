document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Correct answers
    const correctAnswers = {
        q1: 'a',
        q2: 'b',
        q3: 'b',
        q4: 'b',
        q5: 'c',
        q6: 'a',
        q7: 'a',
        q8: 'b',
        q9: 'b',
        q10: 'b',
        q11: 'a',
        q12: 'a',
        q13: 'a',
        q14: 'b',
        q15: 'b'
    };

    let score = 0;
    let reportContent = '';

    // Iterate through each question
    for (let question in correctAnswers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    }

    // Generate report
    reportContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}.`;

    document.getElementById('reportContent').innerText = reportContent;
    document.getElementById('report').style.display = 'block';
});
