class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.wallThickness=10;

      this.image = loadImage("sprites/tree.png")

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.leftWallBody = Bodies.rectangle(0,this.y-this.height/2, this.wallThickness, this.height, {isStatic: false});
      this.rightWallBody = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.wallThickness, this.height, {isStatic: false});

      World.add(world, this.body);
      World.add(world, this.leftWallBody);
      World.add(world, this.rightWallBody);

    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      image(this.image,this.x,this.y,this.width,this.height);
      pop();
    }
  };
