document.addEventListener('DOMContentLoaded', ()=> {
    console.log('Dom Loaded');

    // card options
    const cardArray = [
        {
            name: 'css',
            img: 'img/css.png'
        },
        {
            name: 'css',
            img: 'img/css.png'
        },
        {
            name: 'github',
            img: 'img/github.png'
        },
        {
            name: 'github',
            img: 'img/github.png'
        },
        {
            name: 'javascript',
            img: 'img/javascript.png'
        },
        {
            name: 'javascript',
            img: 'img/javascript.png'
        },
        {
            name: 'react',
            img: 'img/react.png'
        },
        {
            name: 'react',
            img: 'img/react.png'
        },
        {
            name: 'sass',
            img: 'img/sass.png'
        },
        {
            name: 'sass',
            img: 'img/sass.png'
        },
        {
            name: 'webpage',
            img: 'img/webpage.png'
        },
        {
            name: 'webpage',
            img: 'img/webpage.png'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());



    const grid = document.querySelector('.grid');
    const restultDisplay = document.querySelector('#result');
    const cardsChosen = [];
    const cardsChosenId = [];
    const cardsWon = [];

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'img/grey_300px.png');
            cards[optionTwoId].setAttribute('src', 'img/grey_300px.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/aryan-dhiman-iGLLtLINSkw-unsplash_300px.jpg');
            cards[optionTwoId].setAttribute('src', 'img/aryan-dhiman-iGLLtLINSkw-unsplash_300px.jpg');
            alert('Sorry, try again');
        }
        cardsChosen.length = 0;
        cardsChosenId.length = 0;

        restultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            restultDisplay.textContent = 'Congrats! You found them all!';
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        };
    }


    function createBoard() {
        for ( let i = 0; i < cardArray.length; i++ ) {
            var card = document.createElement('img');
            card.setAttribute('src', 'img/aryan-dhiman-iGLLtLINSkw-unsplash_300px.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    };

    createBoard();


})