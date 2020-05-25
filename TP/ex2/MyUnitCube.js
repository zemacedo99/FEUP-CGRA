/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {

        this.vertices = [
             0.5,-0.5, 0.5, //0
             0.5,-0.5,-0.5, //1
            -0.5,-0.5,-0.5, //2
            -0.5,-0.5, 0.5, //3
             0.5, 0.5, 0.5, //4
             0.5, 0.5,-0.5, //5
            -0.5, 0.5,-0.5, //6
            -0.5, 0.5, 0.5  //7

        ];

    
            

		//Counter-clockwise reference of vertices
		this.indices = [];
        

        //Laterais
        for (let i = 0; i<4;i++)
        {
            //1ª metade do quadrado
            this.indices.push(i);
            this.indices.push((i+1)%4);
            this.indices.push(i+4);

            //2ª metade do quadrado
            this.indices.push((i+1)%4);
            this.indices.push(((i+1)%4) + 4);
            this.indices.push(i+4);
        }

        //cima
        this.indices.push(0);
        this.indices.push(2);
        this.indices.push(1);
        this.indices.push(0);
        this.indices.push(3);
        this.indices.push(2);

        //baixo
        this.indices.push(4);
        this.indices.push(5);
        this.indices.push(6);
        this.indices.push(4);
        this.indices.push(6);
        this.indices.push(7);
    

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

