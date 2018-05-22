
class Snake{
  constructor(){
    this.direction = 'S'; //starts going south
    this.segments = [[10,10]];
    this.digesting = 0;
  }
}
Snake.prototype.DIRECTION_TO_ARRAY = new Object();

Snake.prototype.DIRECTION_TO_ARRAY['W'] = [-1,  0];
Snake.prototype.DIRECTION_TO_ARRAY['E'] = [ 1,  0];
Snake.prototype.DIRECTION_TO_ARRAY['S'] = [ 0, -1];
Snake.prototype.DIRECTION_TO_ARRAY['N'] = [ 0,  1];


Snake.prototype.collision = function(moveCoord){
  //check if the next move (new head) is
  this.segments.forEach((el)=>{
    if (this.Coords.equals(el,moveCoord)) return true;
  });

  //the same position as any segments or wall
  if (moveCoord[0] > 19 || moveCoord[0] < 0) return true;
  if (moveCoord[1] > 19 || moveCoord[1] < 0) return true;

  //if colliding with apple increment digestion counter
  //todo

  return false;
};

Snake.prototype.Coords = {
  equals(arr1, arr2){
    return((arr1[0]===arr2[0])&&(arr1[1]===arr2[1]));
  },

  plus(arr1, arr2){
    return( [ (arr1[0] + arr2[0]) , (arr1[1] + arr2[1]) ] );
  },

  isOpposite(direction1, direction2){
    let opposites = new Object();
    opposites["W"] = 'E';
    opposites["E"] = 'W';
    opposites["N"] = 'S';
    opposites["S"] = "N";

    return opposites[direction1] === direction2;
  }

};



Snake.prototype.move = function () {
  //pop and shift

  let nextmove = this.Coords.plus( this.segments[0], this.DIRECTION_TO_ARRAY[this.direction] );
  //collisions
  if(this.collision(nextmove))endGame();
  this.segments.unshift(nextmove);

  if(this.digesting){
    digesting --;
  }else{
    this.segments.pop();
  }
  //moves snake in current direction
};

Snake.prototype.endGame = function(){

};

Snake.prototype.turn = function (direction) {
  // updates the direction
};
