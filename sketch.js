const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball,ball1,ball2
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution:2
    }
    var ball1_options ={
        restitution:2
    }
    var ball2_options ={
        restitution:2
    }

ball = Bodies.rectangle(200,200,20,20,ball_options)
ball1 = Bodies.rectangle(250,200,20,20,ball1_options)
ball2 = Bodies.circle(300,200,60,ball2_options)
    World.add(world,ball)
    World.add(world,ball1)
    World.add(world,ball2)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS)
    ellipse(ball2.position.x,ball2.position.y,60,60)
    rectMode(CENTER);

    rect(ball1.position.x,ball1.position.y,20,20)
    rect(ball.position.x,ball.position.y,20,20)
    rect(ground.position.x,ground.position.y,400,20);
}