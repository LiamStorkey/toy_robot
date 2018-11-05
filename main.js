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

  // convert to uppercase and use only the first index as the command
  let input = line.toUpperCase();
  let command = input.split(' ')[0];

  // switch case to take in command and run the coresponding method
  switch(command){
    case('PLACE'):
      // Get the position and face direction
      let params = undefined;

      // Ensure that there are params following the PLACE command
      if (input.split(' ').length > 1) {
        params = input.split(' ')[1].split(',');
      }
      else {
        console.log('Invalid PLACE command incomplete');
        break;
      }

      // if all needed params are there
      if(!params[0] || !params[1] || !params[2]) {
        console.log('Need to give x,y coordinates and face direction to robot');
        break;
      }

      // if no params there prompt user else placement is avaliable
      !params ? console.log('Need to give x,y coordinates and face direction to robot') : placed = true;

      // if placement avaliable, place the robot on table
      placed ? robot.Place(params[0],params[1],params[2]) : console.log('Need to give x,y coordinates and face direction to robot');
      break;

    case('LEFT'):
      // check if robot on table befoer accepting command
      placed ? robot.ChangeFace('LEFT') : console.log('Must PLACE robot on table first')
      break;

    case('RIGHT'):
      // check if robot on table befoer accepting command
      placed ? robot.ChangeFace('RIGHT') : console.log('Must PLACE robot on table first')
      break;

    case('MOVE'):
      // check if robot on table befoer accepting command
      placed ? robot.Move() : console.log('Must PLACE robot on table first')
      break;

    case('REPORT'):
      // check if robot on table befoer accepting command
      placed ? robot.Report() : console.log('Must PLACE robot on table first')
      break;

    default:
      // If anything other then the commands described above entered
      console.log('Please enter a valid command');
      break;

    case('EXIT'):
      // Exit commandline app
      rl.close();
      break;
  }
})
.on('close', function() {
  console.log('Thanks for playing');
  process.exit(0);
});