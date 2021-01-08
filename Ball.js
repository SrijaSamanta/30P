class Ball{
    constructor(x,y,r){
        var opp={
            restitution:0,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.circle(x, y, r/2, opp);
        this.r = r;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        fill(176, 219, 83);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r,this.r);
    }
}