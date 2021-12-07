document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom Loaded');

    const square = Array.from(document.getElementsByClassName('square'));
    const mole = document.getElementsByClassName('mole');
    const timeLeft = document.getElementById('time-left');
    let score = document.getElementById('score');

    console.log(square);

    let result = 0;

    function randomSquare() {
        square.forEach(className => {
            className.classList.remove('mole');
        });

        let randomPosition = square[Math.floor(Math.random() * 9)];
        randomPosition.classList.add('mole');

        hitPosition = randomPosition.id;


    }

    square.forEach(id => {
        id.addEventListener('mouseup', () => {
            if (id.id === hitPosition) {
                result += 1;
                score.textContent = result;
            }
        })
    });


    function moveMole() {
        let timerId = null;
        timerId = setInterval(randomSquare, 1000);
    }

    moveMole();




});