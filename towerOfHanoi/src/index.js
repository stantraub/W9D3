const View = require("./hanoi-view.js");
const Game = require("./game.js");


$(() => {
  const rootEl = $('.hanoi');
  const game = new Game();
  let view = new View(game, rootEl);
  view.setupTowers();
});
