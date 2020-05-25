/**
 * MyMotor
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyMotor extends CGFobject {
	constructor(scene) {
        super(scene);


        this.bigSphere = new MySphere(this.scene, 16, 8);
        this.flatSphere1 = new MySphere(this.scene, 16, 8);
        this.flatSphere2 = new MySphere(this.scene, 16, 8);

        this.work = true;
        this.speed = 0;
        this.time = 0;
    }

    display()
    {
        //BOX
        this.scene.pushMatrix();
        this.scene.scale(0.05,0.05,0.15);
        this.bigSphere.display();
        this.scene.popMatrix(); 


        //RIGHT propeller
        this.scene.pushMatrix();
        if(this.work) 
        this.scene.rotate(Math.PI/16 * this.speed + this.time ,0,0,1);
        this.scene.translate(-0.05,0,-0.15);
        this.scene.scale(0.05,0.03,0);
        this.flatSphere1.display();
        this.scene.popMatrix(); 

        //LEFT propeller
        this.scene.pushMatrix();
        if(this.work) 
        this.scene.rotate(Math.PI/16 * this.speed + this.time,0,0,1);
        this.scene.translate(0.05,0,-0.15);
        this.scene.scale(0.05,0.03,0);
        this.flatSphere2.display();
        this.scene.popMatrix(); 
    }

    turnOn(speed,t)
    {
        this.speed = speed + 0.2;
        this.time = t;
    }

    turnOff()
    {
        this.speed = 0;
    }

    reset()
    {
        this.work = false;
    }
}