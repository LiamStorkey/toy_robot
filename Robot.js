// Set avaliable face values
const Faces = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

// Constructor
function Robot() {
  this.x = undefined;
  this.y = undefined;
  this.face = undefined;
}

// Sets current X value
Robot.prototype.SetX = (x) => {
  this.x = x;
}

// Sets current Y value
Robot.prototype.SetY = (y) => {
  this.y = y;
}

// Sets current Face value
Robot.prototype.SetFace = (face) => {
  Faces.includes(face.toUpperCase()) ? this.face = face.toUpperCase() : console.log('Invalid Face value, try again');
}

// Shows the current placement and face of robot
Robot.prototype.Report = () => {
  console.log(`${this.x}, ${this.y}, ${this.face}`);
};

// Places the robot in this position facing this direction
Robot.prototype.Place = (x,y,face) => {
  Robot.prototype.SetX(x);
  Robot.prototype.SetY(y);
  Robot.prototype.SetFace(face);
};

// Export
module.exports = Robot;