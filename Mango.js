class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      this.x = x;
      this.y = y;
      this.image = loadImage("sprites/mango.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,this.x,this.y,this.r,this.r);
    }
  };
