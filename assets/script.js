let timerEl = document.querySelector('.timer');
let start = document.querySelector('#start');

let $homeEl = $('#home');
let $leaderboardEl = $('#leaderboard');
let $lerderboardbodyEl = $('#leaderboard-body');
let $questionEl = $('#question');
let $buttonEl = $('.list-group'); 

let question = 0;
let randomized = []
let score = 0;
let currentQuestion = []
let win = false;

let questionBank = [
  {
    question: 'What does the === check for?',
    answer: 'Strict Equality',
    multipleChoice: [
      'Loose Equality',
      'Strict Equality',
      'Total Equality',
      'Random Equality'
    ]
  }
]
//got waaaaaaay ahead of myself here. references other code.

// fisher-yates model spencer showed me! dope.
// will not pick the same choice in an array more than once.

// function shuffleArray(a) {
//   for (let i = a.length -1; i > 0; i--) {
//     let j = Math.floor(math.random() * (i + 1));
//     let temp = array[i];
//     array [i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }

// function newQuestion() {
//   currentQuestion = randomized[questionNum];
//   let choice = shuffleArray(currentQuestion.multipleChoice);
//   $butt
// }

// _____________START GAME_______________________________
start.addEventListener(click, startGame);
