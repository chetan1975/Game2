var bg,bgImg;
var thief , thiefImg;
var gr , grImg , gr2 , gr3
var granny,grannyImg
var housekeeper , housekeeperImg

var hole

var score = 0

function preload(){

  bgImg = loadImage("tower.png");
  //PC
  thiefImg = loadImage("spriteThief.jpg");

  grImg = loadImage ("Gr.jpg")

  grannyImg = loadImage("Granny.png")

  housekeeperImg = loadImage("housekeeper.jpg")
  

}

function setup() {
  
  createCanvas(600,600);
  
  bg = createSprite(300,300, 800,400);
  bg.addImage(bgImg);
  bg.scale = 1.1


  thief = createSprite(250,260,50,50);
  thief.addImage(thiefImg);
  thief.scale = 0.2

  // gr = createSprite(300,330,50,50)
  // gr.addImage (grImg)
  // gr.scale = 0.9

  // gr2 = createSprite(300,600,50,50)
  // gr2.addImage (grImg)
  // gr2.scale = 0.9
  
  // gr3 = createSprite(300,25,50,50)
  // gr3.addImage (grImg)
  // gr3.scale = 0.9

  granny = createSprite(350,260,50,50)
  granny.addImage(grannyImg);
  // gran

  housekeeper = createSprite(100,520,50,50);
  housekeeper.addImage(housekeeperImg)
  housekeeper.scale = 0.4

  // hole = createSprite (300,25,600,40)
  // hole.shapeColor = "black"
  //ground has to move up when the thief breaks it
  grGroup = new Group();
  
}

function draw() {
  
  background(255,255,255); 
   
  spawnGround();
 
  if(keyDown("UP_ARROW") && thief.y >= 159) {
    thief.velocityY = -12;
  }

  thief.velocityY = thief.velocityY + 0.8

  // change it to thief colliding on the current ground

  // if(thief.isTouching(grGroup) && score >= 400){
    if(thief.isTouching(grGroup)){

    // spawnHole( grGroup[0].y);
    grGroup.setVelocityYEach(1);  
    thief.collide(grGroup)

    // grGroup[0].destroy();
  }

  // when the thief goes on the next floor 
  // the floor which was above it should move up and a new floor s
  drawSprites();
  
}

function spawnGround(){
  if (frameCount % 500 ===0){
    gr = createSprite(300,10,50,50)
    gr.addImage (grImg)
    gr.scale = 0.9;

    // gr.velocityY = 1
    grGroup.add(gr);
    // gr.lifetime = 300;

    // gr2 = createSprite(300,600,50,50)
    // gr2.addImage (grImg)
    // gr2.scale = 0.9
    
    // gr3 = createSprite(300,0,50,50)
    // gr3.addImage (grImg)
    // gr3.scale = 0.9
    
  }
}

function spawnHole(yPos){
  hole = createSprite (300,yPos,600,40)
  hole.shapeColor = "black"
}


//CHANGES

//thief has to climb on then ground (random x position, ground image smaller)
//score when thief climb to the next ground
