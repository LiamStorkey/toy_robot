// Set avaliable face values
const Faces = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
// Mapping for face directions
const dirMap = {
  NORTH: {
    left: 'WEST',
    right: 'EAST'
  },
  EAST: {
    left: 'NORTH',
    right: 'SOUTH'
  },
  SOUTH: {
    left: 'EAST',
    right: 'WEST'
  },
  WEST: {
    left: 'SOUTH',
    right: 'NORTH'
  }
}

// Constructor
function Robot() {
  this.x = undefined;
  this.y = undefined;
  this.face = undefined;
  this.x_length = undefined;
  this.y_length = undefined;
}

// Sets current X value
Robot.prototype.SetX = (x) => {
  x >= 0 && x <= this.x_length ? this.x = x : console.log(`x position ${x} is not a position on the ${this.x_length}x${this.y_length} table`)
}

// Sets current Y value
Robot.prototype.SetY = (y) => {
  y >= 0 && y <= this.y_length ? this.y = y : console.log(`y position ${y} is not a position on the ${this.x_length}x${this.y_length} table`)
}

// Sets current Face value
Robot.prototype.SetFace = (face) => {
  Faces.includes(face.toUpperCase()) ? this.face = face.toUpperCase() : console.log('Invalid Face value, try again');
}

// Shows the current placement and face of robot
Robot.prototype.Report = () => {
  console.log(`${this.x}, ${this.y}, ${this.face}`);
  return `${this.x}, ${this.y}, ${this.face}`;
};

// Places the robot in this position facing this direction
Robot.prototype.Place = (x,y,face) => {
  this.x_length = 4;
  this.y_length = 4;
  Robot.prototype.SetX(x)
  Robot.prototype.SetY(y);
  Robot.prototype.SetFace(face);
};

// Moves the Robot 1 place forward in face direction
Robot.prototype.Move = () => {
  let possible = false;

  switch(this.face){
    case('NORTH'):
      // Move robot y + 1
      this.y + 1 >= 0 && this.y + 1 <= this.y_length ? this.y++ : console.log('Invalid move')
      break;

      case('EAST'):
      // Move robot x + 1
      this.x + 1 >= 0 && this.x + 1 <= this.x_length ? this.x++ : console.log('Invalid move')
      break;

      case('SOUTH'):
      // Move robot y - 1
      this.y - 1 >= 0 && this.y - 1 <= this.x_length ? this.y-- : console.log('Invalid move')
      break;

      case('WEST'):
      // Move robot x - 1
      this.x - 1 >= 0 && this.y - 1 <= this.x_length ? this.x-- : console.log('Invalid move')

      break;
  }
}

// Change the facing direction of the robot
Robot.prototype.ChangeFace = (dir) => {
  switch(dir){
    case('LEFT'):
      this.face = dirMap[this.face].left;
      break;

    case('RIGHT'):
      this.face = dirMap[this.face].right;
      break;
  }
}

// Export
module.exports = Robot;