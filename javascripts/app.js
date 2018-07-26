// Rover Object Goes Here
var rover = {
  direction : "N",
  xPos: 0,
  yPos: 0,
  travelLog: ["[0,0]"]
}
// ======================
// Mars Matrix in the case of making obstacles
var mars = [[0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
];

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!")
//  console.log("Initial state: "+rover.direction);
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;    
    case "S":
      rover.direction = "E";
      break;    
    case "E":
      rover.direction = "N";
      break;
  } ;
}

function turnRight(rover){
  console.log("turnRight was called!");
  //console.log("Initial state: "+rover.direction);
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;    
    case "S":
      rover.direction = "W";
      break;    
    case "E":
      rover.direction = "S";
      break;
  } ;
}

function moveForward(rover){
  console.log("moveForward was called")
  //console.log("initial Pos: "+ rover.xPos);
 // console.log("init ypos: " +rover.yPos);
  switch(rover.direction){
    case "N":
      if (rover.yPos < 10) {
      rover.yPos += 1; 
      };
     // console.log("Direction: "+ rover.direction +" Pos: "+ [rover.xPos,rover.yPos]);
      break;
    case "W":
      if (rover.xPos > 0) {
      rover.xPos -= 1;
      }
    //  console.log("Direction: "+ rover.direction +" Pos: "+ [rover.xPos,rover.yPos]);
      break;    
    case "S":
      if (rover.yPos > 0) {
      rover.yPos -= 1; 
      }
     // console.log("Direction: "+ rover.direction +" Pos: "+ [rover.xPos,rover.yPos]);
      break;   
    case "E":
      if (rover.xPos < 10) {
      rover.xPos += 1;
      }
    //  console.log("Direction: "+ rover.direction +" Pos: "+ [rover.xPos,rover.yPos]);
      break;
  } ;
}

//USER interface
function letsGo(){
//var travelLog = [[0,0]]
var command = prompt ("Input commands plz")
for (i in command) {
  switch (command[i]){
    case "f":
    moveForward(rover);
    rover.travelLog.push("["+[rover.xPos,rover.yPos]+"]");
    break;
    case "r":
    turnRight(rover);
    break;    
    case "l":
    turnLeft(rover);
    break;
  };
}
console.log(rover.travelLog)
prompt ("Mars Rover Travellog: "+ rover.travelLog )
}
//

//execute input
letsGo();



//console.log("End direction: "+rover.direction);
//console.log("End Position: "+ rover.xPos + ", " + rover.yPos);

