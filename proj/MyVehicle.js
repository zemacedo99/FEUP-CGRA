/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject {
	constructor(scene,vehicleOrient,vehicleSpeed,vehiclePos) {
		super(scene);
		this.scene = scene;

		this.orientation = vehicleOrient;
		this.speed = vehicleSpeed;
		this.position = vehiclePos;

		this.vehicle = new MyAirship(this.scene);


		// this.nSupply = 5;
		// this.supply = new MySupply(this.scene);

		this.auto = false;
		this.previousTime = 0; //ms
        this.deltaTime = 0;    //seconds
	}
	
	update(t)
	{
		this.currentTime = t;
		if(this.previousTime == 0) this.previousTime = t;

		this.deltaTime = (this.currentTime - this.previousTime)/1000;
		this.previousTime = t;

        
		if(this.auto)
		{
			var deltaAngle = this.deltaTime * this.angularSpeed;
			this.pilotAngle += deltaAngle;
			
			this.perpendicularOrientation = this.orientation - Math.PI/2;
			this.directionVectorX = Math.sin(this.perpendicularOrientation);
			this.directionVectorY = 0;
			this.directionVectorZ = Math.cos(this.perpendicularOrientation);
			this.directionVector = [this.directionVectorX,this.directionVectorY,this.directionVectorZ]; 

			this.position[0]= this.center[0] + (this.directionVector[0] * this.radius);
			this.position[1]= this.center[1] + (this.directionVector[1] * this.radius);
			this.position[2]= this.center[2] + (this.directionVector[2] * this.radius);
			this.orientation = this.pilotAngle + Math.PI/2;

			//this.vehicle.moveMotor(this.speed, t);
			this.vehicle.moveHelm(0.1)
		}
		else
		{
			this.directionVectorX = Math.sin(this.orientation);
			this.directionVectorY = 0;
			this.directionVectorZ = Math.cos(this.orientation);
			this.directionVector = [this.directionVectorX,this.directionVectorY,this.directionVectorZ]; 
	
			this.position[0] = this.position[0] + this.directionVector[0] * this.speed;
			this.position[1] = this.position[1] + this.directionVector[1] * this.speed;
			this.position[2] = this.position[2] + this.directionVector[2] * this.speed;
	
			//this.vehicle.moveMotor(this.speed, t);
			//this.supply.update(this.deltaTime);
		}

	}
	
	display()
	{
		this.scene.pushMatrix();
        this.scene.translate(...this.position);
		this.scene.rotate(this.orientation,0,1,0);   
		this.scene.scale(this.scene.scaleFactor,this.scene.scaleFactor,this.scene.scaleFactor)
		this.vehicle.display();
		this.scene.popMatrix();

		//this.supply.display();
	}
	  
	turn(val)
    {
		this.orientation = this.orientation + val;
		this.vehicle.moveHelm(val);
	}
	
	accelerate(val,t)
	{
		this.speed = this.speed + val;
		this.vehicle.moveMotor(this.speed, t);

		if(this.speed <= 0)
		{
			this.speed = 0;
			this.vehicle.moveMotor(this.speed,t);
		}
		
	}

	reset()
	{
		this.position = [0,10,0];
		this.speed = 0;
		this.orientation = 0;

		this.auto = false;
		this.vehicle.moveHelm(0);

		//this.supply.reset();
		//this.nSupply = 5;

	}


	autoPilot()
	{
		if(this.auto) 
		this.auto = false;

		else 
		{
		this.auto = true;
		
		this.center = [0,0,0];
		this.radius = 5;
		this.animationTime = 5;
		this.angularSpeed = (2*Math.PI) / this.animationTime;
	
		this.pilotAngle = this.orientation - Math.PI/2;
		
		this.perpendicularOrientation = this.orientation - Math.PI/2;
		this.directionVectorX = Math.sin(this.perpendicularOrientation);
		this.directionVectorY = 0;
		this.directionVectorZ = Math.cos(this.perpendicularOrientation);
		this.directionVector = [this.directionVectorX,this.directionVectorY,this.directionVectorZ]; 

		this.center[0] = this.position[0] - this.directionVector[0] * this.radius;
		this.center[1] = this.position[1] - this.directionVector[1] * this.radius;
		this.center[2] = this.position[2] - this.directionVector[2] * this.radius;

		}
	}

	stopAuto()
	{
		this.auto = false;
		this.vehicle.moveHelm(0);
	}
	
	// dropSupply()
	// {
	// 	if(this.nSupply != 0)
	// 	{
	// 		this.supply.drop(this.position);
	// 		this.nSupply --;
	// 	}
	// }
}

