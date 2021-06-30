var ship, ship_running, edges;
var seaImage;

function preload(){
  seaImage = loadImage("sea.png");  
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(900,850);
   //create sea
     sea = createSprite(75, 400, 400, 20);
     sea.addImage("sea",seaImage);

  
     // creating ship
  ship = createSprite(80,400,20,50);
  ship.addAnimation("running", ship_running);

    // sea.scale = 0.5;
    //adding scale and position to ship
    ship.scale = 0.7;
    ship.x = 300;
    ship.y = 450;
}

function draw() {
  background("blue");
 
 sea.velocityX = -6;

  //logging the x position of the ship
  console.log(sea.x)
  
  //resetting the sea
  if (sea.x < 0){
   sea.x = sea.width/2;
  }

  //ship.velocityY = ship.velocityY + 0.5;
  
  //stop ship from falling down
 // ship.collide(sea);
    drawSprites();

}

  