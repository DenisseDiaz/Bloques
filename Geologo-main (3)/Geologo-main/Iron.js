class Iron{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	   var options = {
	    restitution:0.8,
		friction:3,
		density:30

	}
	this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 120;
    this.height = 40;
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(5);
			stroke("black");
			fill("yellow");
			  
			rectMode(CENTER)
			rect(0, 0, this.width, this.height);
			pop();
				

			//draw the ellipse here to display the rubber ball

			
  
	}

}