class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }

        this.constraint = Constraint.create(options)
        World.add(world, this.constraint)

    }

    fly(){
        this.constraint.bodyA = null
    }

    attach(body){
        this.constraint.bodyA = body
    }

    display(){
        if(this.constraint.bodyA){
            var pointA = this.constraint.bodyA.position
            var pointB = this.constraint.pointB
            
            push()
            strokeWeight(0)
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop()
        }
    }
} 