const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11;

var hero, rope

var bg;

var boxes = [];

var monster;

function preload() {
    bg = loadImage("images/GamingBackground.png")

}

function setup(){
    createCanvas(1200, 700);

    engine = Engine.create();

    world = engine.world 

    ground = new Ground(250, 500, 700, 50)

    box1 = new Box(350, 100, 50, 50)
    box2 = new Box(350, 100, 50, 50)
    box3 = new Box(350, 100, 50, 50)
    box4 = new Box(350, 100, 50, 50)
    box5 = new Box(350, 100, 50, 50)
    box6 = new Box(350, 100, 50, 50)


    box7 = new Box(450, 100, 50, 50)
    box8 = new Box(450, 100, 50, 50)
    box9 = new Box(450, 100, 50, 50)
    box10 = new Box(450, 100, 50, 50)

    boxes.push(box1, box2, box3, box4, box5, box6, box7, box8, box9, box10)

    hero = new Hero(200, 200, 80, 80)

    rope = new Rope(hero.body, {x: 200,y: 50})

    monster = new Monster(650, -75, 150)
    
}


function draw(){
    background(bg);
    Engine.update(engine);

    ground.display()

    box1.display()
    box2.display()
    box3.display()
    box4.display()

    box5.display()
    box6.display()
    box7.display()

    box8.display()
    box9.display()
    box10.display()

    hero.display()
    
    rope.display()

    monster.display()

    for(var i = 0; i < 10; i++){
        if(boxes[i].body.position.y > 550 && monster.body.position.y < 300){
                monster.body.position.y += 5;
        }

    }

    

}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})
}