class launcher{
    constructor(body,ancher){
        var opsitions = {
            bodyA:body,
            pointB:ancher,
            stiffness:0.04,
            length:1
        }
        this.bodyA = body
        this.pointB = ancher
        this.launcher = Constraint.create(opsitions)
        World.add(world,this.launcher)
    }

    attach(body){
        this.launcher.bodyA = body
    }

    fly(){
        this.launcher.bodyA = null
    }

    display(){
        if(this.launcher.bodyA != null){
            var pointA = this.bodyA.position
            var pointB = this.pointB
            strokeWeight(2)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }

}

