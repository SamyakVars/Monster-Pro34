class Monster{
    constructor(x, y, r){

        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, r, options)

        this.r = r

        this.image = loadImage("images/Monster-01.png")
    }

    display(){

        var pos = this.body.position

        push()
        translate(pos.x, pos.y)
        imageMode(CENTER)
        image(this.image, 0, 0, this.r, this.r)
        pop()
    }
}