class Mangoes{
    constructor(x,y,width,height){
        var options = {
            isStatic:"true",
            'restitution':0,
            'friction':1.0
        }
        this.body = Bodies.circle(x, y, 0.2, options);
       this.radius=30
        this.image = loadImage("Plucking mangoes/mango.png")
        World.add(world, this.body);
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius,this.radius);
        pop();
      }
}