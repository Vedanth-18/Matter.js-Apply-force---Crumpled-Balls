class Trash{
    constructor(x, y, radius){
     var options={
         isStatic: false,
         restitution: 0.7,
         friction: 0.5,
         density: 1.8
         
     }
     this.body = Bodies.circle(x, y, radius, options);
     radius = this.body.radius;
     World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var radius = this.body.radius;
       ellipseMode(RADIUS);
       ellipse(pos.x, pos.y, 20);
    }
}