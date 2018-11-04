var Robot = require('./Robot');

var robot = new Robot();

robot.Place(0,0,'SOUTH');
robot.Move();
robot.ChangeFace('LEFT');
robot.Move();
robot.Report();