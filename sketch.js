var canvas,block1,block2,block3,block4,ball,edges;
var music;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

block1=createSprite(0,580,360,30);
block1.shapeColor="green";
block2=createSprite(295,580,360,30);
block2.shapeColor="pink";
block3=createSprite(515,580,360,30);
block3.shapeColor="yellow";
block4=createSprite(740,580,360,30);
block4.shapeColor="blue";

ball=createSprite(random(200,750),100,40,40);
ball.shapecolor="white";
ball.velocityX=4;
ball.velocityY=9;

}

function draw() {
    background(rgb(169,169,169));
edges=createEdgeSprites();
ball.bounceOff(edges);
if(block1.isTouching(ball)&&ball.bounceOff(block1)){
    ball.shapeColor="green";
    music.play();
    
}
if(block2.isTouching(ball)){
    ball.shapecolor="pink";
    ball.velocityX=0;
ball.velocityY=0;
music.stop();
}
if(block3.isTouching(ball)&&ball.bounceOff(block3)){
    ball.shapeColor="yellow";
    music.play();
    
}
if(block4.isTouching(ball)&&ball.bounceOff(block4)){
    ball.shapeColor="blue";
    music.play();
    
}
drawSprites();
}
