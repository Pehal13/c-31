class Plinko {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.r= 10;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipse(RADIUS)
      
      fill("red");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  F