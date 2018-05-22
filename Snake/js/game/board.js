const Snake = require("./board.js");
class Board{
  constructor(){
    //holds a snake
    //will later hold on to the apples
    this.snake = new Snake();
  }
}

//export the board class
//will be used in the view class
