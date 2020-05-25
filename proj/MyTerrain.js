/**
* MyTerrain
* @method constructor
* @param scene - Reference to MyScene object
*/
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);

        this.plane = new MyPlane(this.scene, 20);

        this.plane.initBuffers();
        this.initShaders();
    }
    
    initShaders()
    {
        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");

        this.terrainTexture = new CGFtexture(this.scene,'images/terrain.jpg');
        this.terrainMap = new CGFtexture(this.scene,'images/heightmap.jpg'); 

        this.shader.setUniformsValues({uSampler1: 1});
        this.shader.setUniformsValues({uSampler2: 2});
    }

    display()
    {
        
        this.scene.setActiveShader(this.shader);
        this.terrainTexture.bind(1);
        this.terrainMap.bind(2);

        this.scene.pushMatrix();
        this.scene.heightMapMaterial.apply();
        this.scene.rotate(-Math.PI/2.0,1,0,0);
        this.scene.scale(50,50,8); //  cena com dimensões de 50x50 unidades, e com altura de 8 unidades
        this.plane.display();
        this.scene.popMatrix();
    }
}