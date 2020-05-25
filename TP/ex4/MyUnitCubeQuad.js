/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        
        this.quad1 = new MyQuad(this.scene,[0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0]);
        this.quad2 = new MyQuad(this.scene,[0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0]);
        this.quad3 = new MyQuad(this.scene,[0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0]);
        this.quad4 = new MyQuad(this.scene,[0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0]);
        this.quad5 = new MyQuad(this.scene,[0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0]);
        this.quad6 = new MyQuad(this.scene,[0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0]);
	}

    display()
    {

        //baixo
        this.scene.mineBottom.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);   
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);   
        this.quad1.display();
        this.scene.popMatrix();
        
        //topo
        this.scene.mineTop.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2,1,0,0);  
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);       
        this.quad2.display();
        this.scene.popMatrix();

        //lateral direita
        this.scene.mineSide.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);     
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);    
        this.quad1.display();
        this.scene.popMatrix();

        //lateral esquerda
        this.scene.mineSide.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);  
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);       
        this.quad1.display();
        this.scene.popMatrix();

        //lateral tras
        this.scene.mineSide.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI,0,1,0);    
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);     
        this.quad1.display();
        this.scene.popMatrix();

        //lateral frente
        this.scene.mineSide.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);   
        this.quad1.display();
        this.scene.popMatrix();

    }

}

