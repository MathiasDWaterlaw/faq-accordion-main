const questionTitle = document.querySelectorAll('.question-title');
const answers = document.querySelectorAll('.answer');

// const openAnswer = (element) => {
//     element.querySelector('.plus').classList.toggle('hidden');
//     element.querySelector('.minus').classList.toggle('hidden');

// }

questionTitle.forEach((element, index) => {
    element.addEventListener('click', () => {
        element.querySelector('.plus').classList.toggle('hidden');
        element.querySelector('.minus').classList.toggle('hidden');
        answers.forEach((answer) => {
            if (element.querySelector('p').id === answer.id) {
                answer.classList.toggle('hidden');
                answer.style.transition = '0.5s';
            }
        });
    });
});

