/**
 * MySupply
 * @constructor
 * @param scene - Reference to MyScene object
 */

const SupplyStates = 
{
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};

class MySupply extends CGFobject {
	constructor(scene) {
        super(scene);
        this.quad1 = new MyQuad(this.scene);
        this.quad2 = new MyQuad(this.scene);
        this.quad3 = new MyQuad(this.scene);
        this.quad4 = new MyQuad(this.scene);
        this.quad5 = new MyQuad(this.scene);
        this.quad6 = new MyQuad(this.scene);
        
        this.state = SupplyStates.INACTIVE;

        this.position = [0,0,0];
        this.speed = 0;
        this.fallTime = 3;
        this.deltaDistance = 0;
	}

    display()
    {

        if (this.state == SupplyStates.FALLING)
        {
            this.displayFalling();
        }
        
        if(this.state == SupplyStates.LANDED)
        {
            this.displayOnLanded();
            //this.state == SupplyStates.INACTIVE; // se for para lançar apenas um supply de cada vez
        }

    }
    
    update(t)
    {
        
        this.deltaTime = t;
        
        //Recalculate position according to elapsed time
        if (this.state == SupplyStates.FALLING)  
        {
            this.deltaDistance = this.deltaTime * this.speed;
            if(this.position[1] - this.deltaDistance > 0)
            {
                this.position[1] = this.position[1] - this.deltaDistance;
            }
            else
            {
                this.position[1] = 0.01;
                this.state = SupplyStates.LANDED;
            }
            
        }

    }

    drop(dropPosition) 
    {
        this.position = dropPosition.concat();
        this.state = SupplyStates.FALLING;
        this.speed = this.position[1] / this.fallTime;  //this.distance?
    }

    land() // Y = 0
    {
        this.state = SupplyStates.LANDED;
        this.speed = 0;
    }

    displayFalling()
    {
        //baixo
        this.scene.boxMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(...this.position);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);   
        this.quad1.display();
        this.scene.popMatrix();
        
        //topo
        this.scene.boxMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(...this.position);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2,1,0,0);  
        this.quad2.display();
        this.scene.popMatrix();

        //lateral direita
        this.scene.boxMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(...this.position);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);  
        this.quad1.display();
        this.scene.popMatrix();

        //lateral esquerda
        this.scene.boxMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(...this.position);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);     
        this.quad1.display();
        this.scene.popMatrix();

        //lateral tras
        this.scene.boxMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(...this.position);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI,0,1,0);     
        this.quad1.display();
        this.scene.popMatrix();

        //lateral frente
        this.scene.boxMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(...this.position);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0,0,0.5);  
        this.quad1.display();
        this.scene.popMatrix();
    }

    displayOnLanded()
    {
        //baixo
        this.scene.boxMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(...this.position);
        this.scene.scale(0.5,0.5,0.5); 
        this.scene.rotate(-Math.PI/2,1,0,0);   
        this.quad1.display();
        this.scene.popMatrix();

        //lateral direita
        this.scene.boxMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(...this.position);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0,0,-1);
        this.scene.rotate(Math.PI,1,0,0);  
        this.scene.rotate(Math.PI/2,1,0,0);   
        this.quad1.display();
        this.scene.popMatrix();

        //lateral esquerda
        this.scene.boxMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(...this.position);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0,0,1);
        this.scene.rotate(Math.PI,1,0,0);  
        this.scene.rotate(Math.PI/2,1,0,0);   
        this.quad1.display();
        this.scene.popMatrix();

        //lateral tras
        this.scene.boxMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(...this.position);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(-1,0,0);
        this.scene.rotate(Math.PI,1,0,0);  
        this.scene.rotate(Math.PI/2,1,0,0);   
        this.quad1.display();
        this.scene.popMatrix();

        //lateral frente
        this.scene.boxMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(...this.position);
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(1,0,0);
        this.scene.rotate(Math.PI,1,0,0);  
        this.scene.rotate(Math.PI/2,1,0,0);   
        this.quad1.display();
        this.scene.popMatrix(); 
    }

    reset()
    { 
        this.state = SupplyStates.INACTIVE; 
        this.speed = 0;
        this.position = [0,0,0];
    }
}

