class Ground{
    constructor(){
       this.body = Bodies.rectangle(500, 650, 2000, 20, {isStatic: true});
       World.add(world, this.body);
    }
}