const questionTitle = document.querySelectorAll('.question-title');
const answers = document.querySelectorAll('.answer');

questionTitle.forEach((element) => {
    element.addEventListener('click', () => {
        element.querySelector('.plus').classList.toggle('hidden');
        element.querySelector('.minus').classList.toggle('hidden');
        answers.forEach((answer) => {
            if (element.querySelector('p').id === answer.id) {
                answer.classList.toggle('active');
            }
        });
    });
});

