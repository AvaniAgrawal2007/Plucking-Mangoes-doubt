class Tree{
    constructor(){
        var options = {
          isStatic:"true",
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(600, 500, 400,400, options);
        this.width=400
        this.height=400
        this.image = loadImage("Plucking mangoes/tree.png")
        World.add(world, this.body);
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
}