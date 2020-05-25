/**
 * MyAirship
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyAirship extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;

        this.gondola = new MyCylinder(this.scene,15);
        this.body = new MySphere(this.scene, 16, 8);
        this.helmVertical = new MyHelm(this.scene);
        this.helmHorizontal = new MyHelm(this.scene);

        this.motorLeft = new MyMotor(this.scene);
        this.motorRight = new MyMotor(this.scene);

        this.initMaterials();
    }

    initMaterials()
    {
        //White
        this.materialWhite = new CGFappearance(this.scene);
        this.materialWhite.setAmbient(1 , 1, 1, 1.0);

        //Orange
        this.materialorange = new CGFappearance(this.scene);
        this.materialorange.loadTexture('images/orange.png');

        //body
        this.bodyMaterial = new CGFappearance(this.scene);
        this.bodyMaterial.loadTexture('images/body.png');
    }

    display()
    {
        
        //BODY
        this.bodyMaterial.apply();
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,1);
        this.body.display();
        this.scene.popMatrix(); 
        

        //GONDOLA
        this.materialorange.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,-0.6,0);
        this.scene.scale(0.2,0.2,0.5);
        this.gondola.display();
        this.scene.popMatrix(); 

        //HORIZONTAL HELM
        this.materialWhite.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.2,0,-0.5);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.helmHorizontal.display();
        this.scene.popMatrix();  
        
        //VERTICAL HELM
        this.materialorange.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,0.2,-0.5);
        this.helmVertical.display();
        this.scene.popMatrix();
        
        
        

        //MOTOR
        this.materialWhite.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.2,-0.52,-0.35);
        this.motorLeft.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.2,-0.52,-0.35);
        this.motorRight.display();
        this.scene.popMatrix();
    }

    moveHelm(val)
    {
        if(val < 0) 
        {
            this.helmVertical.turningLeft();
        }
        else if(val > 0) 
        {
            this.helmVertical.turningRight();
        }
        else
        {
            this.helmVertical.turningOff();
        }

    }

    moveMotor(speed,t)
    {
       
        this.motorLeft.turnOn(speed,t);
        this.motorRight.turnOn(speed,t);

    }

}

