# Toy Robot Simulator

Written in Node.js but has no required node_modules. This is a simulation of a toy robot being able to move around a 5x5 tabletop. The robot controlled via the command line using the appropriate commands. In addition to the robot being controlled by the user, it will also not allow commands that will cause it to be placed or fall of the table.

## How to run
To run the command line application, run the follwoing command.
```
node main.js
```

### Allowed commands
```
// x = x and y are the coordinates on the table. Face is the direction the robot is facing.
PLACE x,y,face

// Moves the robot one position forward in the direction it is facing.
MOVE

// Rotates the facing direction of the robot to the right.
RIGHT

// Rotates the facing direction of the robot to the left.
LEFT

// Outputs the coordinates of the robot and the direction it is facing.
REPORT

// Ends the program.
END
```

### Constraints
The robot must be placed within the 5 x 5 sized tabletop.
Allowed face direction values are: NORTH, EAST, SOUTH, WEST.
The robot must be placed on the tabletop before any other commands will be accepted.


---
## How to run tests
I have included a test.js file to be used by mocha automated testing. To run these test run the following commands
```
npm install -g mocha
mocha
```