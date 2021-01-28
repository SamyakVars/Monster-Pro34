class Hero{
    constructor(x, y, r, r2){
        var options = {
            density: 1,
            frictionAir: 0.005

        }

        this.body = Bodies.circle(x, y, r, options)
        World.add(world, this.body)

        this.r = r
        this.image = loadImage("images/Superhero-01.png")
    }

    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, 0, 200, 66)
        pop()
    }
}
