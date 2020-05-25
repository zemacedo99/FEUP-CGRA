/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			 0,  0, 0,	//0
			 2,  0, 0,	//1
             1,  1, 0,	//2
			 3,  1, 0,  //3
			 
			 0,  0, 0,	//0
			 2,  0, 0,	//1
             1,  1, 0,	//2
             3,  1, 0   //3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            2, 1, 3,
            3, 1, 2,
            2, 1, 0
		];

		this.normals = [];
        for (var i = 0; i < 4; i++) {
			this.normals.push(0, 0, 1);
		}
		for (var i = 0; i < 4; i++) {
			this.normals.push(0, 0, -1);
        }

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles


		/*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

		this.texCoords = [
			0.5, 1,        //baixo esquerdo
			1, 1,          //baixo direito
			0.25, 0.75,    //topo esquerdo
			0.75, 0.75     //topo direito
		]

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

