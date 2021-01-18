var starImg, fairyImg, bgImg;
var fairy //, fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	//fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(random(30,650),30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
    
	starBody = Bodies.circle(650 , 30 , 5,{restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
	//fairyVoice.play();
}


function draw() {
  background(bgImg);
  Engine.update(engine);
if(keyDown("right")){
	fairy.position.x=fairy.position.x+5;
	
}
if(keyDown("left")){
	fairy.position.x=fairy.position.x-5;
}
if(keyDown("down")){
	Body.setStatic(starBody,false);
	star.velocityY=6;
}
if(starBody.position.y>600){
	Body.setStatic(starBody,true);
}

  drawSprites();

}

function keyPressed() {
	//write code here
}
