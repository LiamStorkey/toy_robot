const readline = require('readline');
var Robot = require('./Robot');

var robot = new Robot();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Welcome to the Toy Robot simulator, start sending commands to the robot (PLACE, LEFT, RIGHT, MOVE, REPORT, EXIT)\n');
rl.prompt(true);

rl.on('line', function(line) {
  if (!line) return;

  let input = line.toUpperCase();
  let parms = input.split(' ')[1];
  let command = input.split(' ')[0];


  switch(command){
    case('EXIT'):
      rl.close();
      break;
    case('PLACE'):
      console.log('PLACE METHOD');
      break;
    case('LEFT'):
      console.log('LEFT METHOD');
      break;
    case('RIGHT'):
      console.log('RIGHT METHOD');
      break;
    case('MOVE'):
      console.log('MOVE METHOD');
      break;
    case('REPORT'):
      console.log('REPORT METHOD');
      break;
  }
})
.on('close', function() {
  console.log('Thanks for playing');
  process.exit(0);
});


// robot.Place(0,0,'NORTH');
// robot.Move();
// robot.ChangeFace('LEFT');
// robot.Move();
// robot.ChangeFace('LEFT');
// robot.Move();
// robot.ChangeFace('LEFT');
// robot.Move();
// robot.Report();