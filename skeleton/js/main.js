const View = require('./ttt-view.js');
const Game = require('../solution/game.js'); // require appropriate file

$( () => {
  const $el = $('.ttt');
  const game = new Game();
  const view = new View(game, $el);
  const container = document.querySelectorAll('body');

  const board = view.setupBoard();
  $el.append(board);

  const squares = $(".tomato").on("click", e => {
    if(game.isOver()){

    }
    else {
      const $sq = $(e.currentTarget);
      let pos = $sq.attr("pos");
      // alert($sq.attr("pos"));
      let x = parseInt(pos[0]);
      let y = parseInt(pos[2]);
      let valid = game.playMove([x,y]);
      if (valid ) {
        $sq.text(game.currentPlayer);
      }
      if(game.isOver()){
        $('body').text(game.winner() + ' is the winner!');
      }
    }

    // console.log(game.currentPlayer);
  });

  // Your code here
});

console.log("main working!!!");
