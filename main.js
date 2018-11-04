var Robot = require('./Robot');
var Table = require('./Table');

var robot = new Robot();

robot.Place(0,0,'NORTH');
robot.Move();
robot.ChangeFace('LEFT');
robot.Move();
robot.ChangeFace('LEFT');
robot.Move();
robot.ChangeFace('LEFT');
robot.Move();
robot.Report();