/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene, color) {
		super(scene);
		this.color = color;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-2,  0, 0,	//0
			 2,  0, 0,	//1
			 0,  2, 0,	//2

			-2,  0, 0,	//3
			 2,  0, 0,	//4
			 0,  2, 0	//5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			5, 4, 3
		];

		this.normals = [];
        for (var i = 0; i < 3; i++) {
			this.normals.push(0, 0, 1);
		}
		
		for(var i = 0; i < 3; i++)
		{
			this.normals.push(0, 0,-1);
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
	
		if(this.color == 'blue')
		{
			this.texCoords = [
				0, 0,    
				1, 0, 
				0.5, 0.5
				]
		}
		else
		{
			this.texCoords = [
				1, 0,    
				1, 1, 
				0.5, 0.5
				]
		}

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
