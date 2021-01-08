class YellowBox extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
    }
    display(){
      
      if(this.body.speed < 2){

        fill(242,217,3);
        super.display();
    
        }
        else{
          
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity-100;
        tint(255, this.Visiblity);
        //rect(this.body.position.x, this.body.position.y, 20, 30);
        pop();
    
        }
    }
  };