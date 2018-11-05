const readline = require('readline');
var Robot = require('./Robot');

var robot = new Robot();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Welcome to the Toy Robot simulator, start sending commands to the robot (PLACE, LEFT, RIGHT, MOVE, REPORT, EXIT)\n');
rl.prompt(true);

let placed = false;
rl.on('line', function(line) {
  if (!line) return;


  let input = line.toUpperCase();
  // let params = input.split(' ')[1].split(',');
  let command = input.split(' ')[0];


  switch(command){
    case('PLACE'):
      let params = input.split(' ')[1].split(',');
      if(!params[0] || !params[1] || !params[2]) {
        console.log('Need to give x,y coordinates and face direction to robot');
        break;
      }
      !params ? console.log('Need to give x,y coordinates and face direction to robot') : placed = true;
      placed ? robot.Place(params[0],params[1],params[2]) : console.log('Need to give x,y coordinates and face direction to robot');
      break;
    case('LEFT'):
      placed ? robot.ChangeFace('LEFT') : console.log('Must PLACE robot on table first')
      break;
    case('RIGHT'):
      placed ? robot.ChangeFace('RIGHT') : console.log('Must PLACE robot on table first')
      break;
    case('MOVE'):
      placed ? robot.Move() : console.log('Must PLACE robot on table first')
      break;
    case('REPORT'):
      placed ? robot.Report() : console.log('Must PLACE robot on table first')
      break;
    default:
      console.log('Please enter a valid command');
      break;
    case('EXIT'):
      rl.close();
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