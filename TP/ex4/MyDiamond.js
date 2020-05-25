/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			0, -1, 0,	//1
			0, 1, 0,	//2
			1, 0, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2
		];

		this.normals = [];
        for (var i = 0; i < 4; i++) {
            this.normals.push(0, 0, 1);
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
			0, 0.5,      //baixo esquerdo
			0.25, 0.75,  //baixo direito
			0.25, 0.25,  //topo esquerdo
			0.5, 0.5     //topo direito
		]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

