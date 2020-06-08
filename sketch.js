const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var supply;
var helicopter;
var bucket;

function setup(){
    var canvas = createCanvas(400,400);
   helicopter=createSprite(350,200,50,20);
   
  
 

   supply=createSprite(350,200,10,10);


   
}

function draw(){
    background(0);
   

   if(keyDown("DOWN_ARROW"))
{
   supply.velocityY=-2;
}

}