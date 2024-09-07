function submitQuiz() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    console.log('Name:', name); // Check if name is correctly retrieved

    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    // Define the correct answers
    const answers = {
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
        // Add answers for additional questions here...
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    // Check each question's answer
    for (let [key, value] of Object.entries(answers)) {
        const selectedOption = form.querySelector(`input[name=${key}]:checked`);
        console.log('Selected option for', key, ':', selectedOption); // Check if selected options are retrieved
        if (selectedOption && selectedOption.value === value) {
            score++;
        }
    }

    // Display the score and the name
    resultDiv.innerHTML = `<p>${name}, your score is ${score} out of ${Object.keys(answers).length}.</p>`;
}


