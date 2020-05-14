const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball,string,point;
var bg;
function preload() {
bg=loadImage("Milky-Way.jpg");
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
   
    point=new Point(650,50,10)
    ball=new Clock(650,500,100,100);
    string=new Chain(ball.body,point.body)
}
function draw(){
    Engine.update(engine);
    background(bg);
    ball.display();
    point.display();
    string.display();
    stroke(0);
    textSize(35)
    fill("white")
    text("Drag The Mouse To Move The Clock And Then Release ",200,580);
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(ball.body, {x: 600 , y: 300});
        ball.body.speed=0;
    }
}