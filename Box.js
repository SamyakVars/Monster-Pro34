class Box{
    constructor(x, y, w, h){
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 0.04
        }

        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(world, this.body)

        this.w = w
        this.h = h
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("black")
        fill(255, 0, 0)
        rect(0, 0, this.w, this.h)
        pop()


    }

    
}