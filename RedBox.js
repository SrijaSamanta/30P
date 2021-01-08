class RedBox extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
    }
    display(){
      
      if(this.body.speed<2){

        push();
        fill(244,105,70);
        super.display();
        pop();

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