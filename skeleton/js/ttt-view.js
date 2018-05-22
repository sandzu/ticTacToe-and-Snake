class View {
  constructor(game, $el) {}

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {}
}
View.prototype.setupBoard = function(){
  const grid = $("<ul>").addClass('grid');
  for (let i = 0; i < 9; i++) {
    let gridEl = $("<li>").addClass('tomato').attr("pos", [Math.floor(i/3), i%3]);
    grid.append(gridEl);
  }
  // $("ul").addClass('grid');
  return grid;
};




//
// View.prototype.bindEvents
//
// Game.prototype.playMove
//
module.exports = View;


console.log("view working!!!");
