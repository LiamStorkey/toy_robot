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

  // switch case to take in command and run the coresponding method
  switch(command){
    case('PLACE'):
      // Get the position and face direction
      let params = input.split(' ')[1].split(',');

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

    case('TEST'):
      // check if robot on table befoer accepting command
      RunTests();
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

function RunTests(){
  //--------TESTS--------//
  //----------A----------//
  robot.Place(0,0,'NORTH');
  robot.Move();
  robot.Report();
  // Expected output:
  // 0,1,NORTH

  //----------B----------//
  robot.Place(0,0,'NORTH');
  robot.ChangeFace('LEFT');
  robot.Report();
  // Expected output:
  // 0,0,WEST

  //----------C----------//
  robot.Place(1,2,'EAST');
  robot.Move();
  robot.Move();
  robot.ChangeFace('LEFT');
  robot.Move();
  robot.Report();
  // Expected output
  // 3,3,NORTH

  //----------D----------//
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
  robot.Report();
  // Expected output
  // 0,0,WEST

  //----------E----------//
  robot.Place(4,4,'NOTH');
  robot.Place(1,1,'NORTH');
  robot.Move();
  robot.Report();
  // Expected output
  // 1,2,WEST
}
