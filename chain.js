class chain {
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 30,
            stiffness : 0.04
        }
        
        this.body = Constraint.create(options);
        World.add(world, this.body);

    }

    display(){
        var pointA = this.body.bodyA.position
        var pointB = this.body.bodyB.position

        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y );
    }
}