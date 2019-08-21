const View = require('./ttt-view');
const Game = require('./game');
let newGame = new Game();

  $(() => {
    let $el = $('.ttt');
    let newView = new View(newGame, $el);
    newView.setupBoard();
    newView.bindEvents();
  });
