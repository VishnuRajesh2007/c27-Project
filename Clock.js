class Clock{
    constructor(x, y,w,h) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,w,h);
        this.image = loadImage("clock.png");
        this.w=w;
        this.h=h;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill("blue");
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.w, this.h);
        pop();
      }
}