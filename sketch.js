var track, trackimg
var boy, runningboy


function preload(){
  //pre-load images
  trackimg = loadImage("path.png")
   runningboy = loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.PNG", "jake5.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200,40,40)
  track.addImage(trackimg)
  track.velocityY = 4
  track.scale = 1.2
  //create boy
  boy = createSprite(200,200,20,20)
  boy.addAnimation("running", runningboy)
  //walls
  leftwall = createSprite(10,200,50,400)
  rightwall = createSprite(390,200,50,400)
  leftwall.visible = false
  rightwall.visible = false
  
}

function draw() {
  background(0);

boy.x = mouseX
//code for infinite background 
  if(track.y>400) {
    track.y = height/2
  } 
  
  boy.collide(leftwall)
  boy.collide(rightwall)
drawSprites()
}
