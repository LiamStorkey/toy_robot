const assert = require('assert');
var Robot = require('./lib/Robot');

var robot = new Robot();


it('Expected output 0, 0, North', () => {
  robot.Place(0,0,'NORTH');
  assert.equal(robot.Report(), '0, 0, NORTH')
});

it('Expected output 0, 0, WEST', () => {
  robot.Place(0,0,'NORTH');
  robot.ChangeFace('LEFT');
  assert.equal(robot.Report(), '0, 0, WEST')
});

it('Expected output 3, 3, NORTH', () => {
  robot.Place(1,2,'EAST');
  robot.Move();
  robot.Move();
  robot.ChangeFace('LEFT');
  robot.Move();
  assert.equal(robot.Report(), '3, 3, NORTH')
});

it('Expected output 0, 0, WEST', () => {
  robot.Place(4,4,'NORTH');
  robot.Move();
  robot.ChangeFace('RIGHT');
  robot.ChangeFace('RIGHT');
  robot.Move();
  robot.Move();
  robot.Move();
  robot.Move();
  robot.ChangeFace('RIGHT');
  robot.Move();
  robot.Move();
  robot.Move();
  robot.Move();
  assert.equal(robot.Report(), '0, 0, WEST')
});

it('Expected output 1, 2, NORTH', () => {
  robot.Place(4,4,'NOTH');
  robot.Place(1,1,'NORTH');
  robot.Move();
  assert.equal(robot.Report(), '1, 2, NORTH')
});
