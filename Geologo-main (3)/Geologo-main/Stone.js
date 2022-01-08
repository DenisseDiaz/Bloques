class Stone{
	constructor(x,y)
	{
	// assign options to the rubber ball
	   var options = {
	    'density':0.8,
      'friction': 0.9,
      'restitution':12

	}
		
	this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
		World.add(world, this.body);

	}
	display(){
	
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
		
			//draw the ellipse here to display the rubber ball
            

    
	}

}