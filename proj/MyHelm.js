/**
 * MyHelm
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHelm extends CGFobject {
	constructor(scene) {
        super(scene);


        this.triangle1 = new MyTriangle(this.scene);
        this.triangle2 = new MyTriangle(this.scene);
        this.quad = new MyQuad(this.scene);


        this.turningleft = false;
        this.turningright = false;
    }

    display()
    {

        //TOP Triangle
        this.scene.pushMatrix();
        this.scene.scale(0.30,0.30,0.30);
        this.triangle1.display();
        this.scene.popMatrix(); 

        //TOP Quad
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.30);
        this.scene.scale(0.30,0.30,0.30);
        this.scene.rotate(Math.PI/2,0,1,0);
        if(this.turningleft) this.scene.rotate(Math.PI/4,0,1,0);
        if(this.turningright) this.scene.rotate(-Math.PI/4,0,1,0);
        this.scene.translate(0.5,0.5,0);
        this.quad.display();
        this.scene.popMatrix(); 
        
        //BOTTOM Triangle
        this.scene.pushMatrix();
        this.scene.translate(0,-0.40,0);
        this.scene.scale(0.30,0.30,0.30);
        this.scene.rotate(Math.PI,0,0,1);
        this.triangle2.display();
        this.scene.popMatrix(); 

        //BOTTOM Quad
        this.scene.pushMatrix();
        this.scene.translate(0,-0.70,-0.30);
        this.scene.scale(0.30,0.30,0.30);
        this.scene.rotate(Math.PI/2,0,1,0);
        if(this.turningleft) this.scene.rotate(Math.PI/4,0,1,0);
        if(this.turningright) this.scene.rotate(-Math.PI/4,0,1,0);
        this.scene.translate(0.5,0.5,0);
        this.quad.display();
        this.scene.popMatrix(); 

        //this.turningOff();
    }

    turningRight()
    {
        this.turningright = true;
    }

    turningLeft()
    {
        this.turningleft = true;
    }

    turningOff()
    {
        this.turningleft = false;
        this.turningright = false;
    }
}