/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        this.time = 0;

        //MyVehicle variables
        this.vehicleSpeed = 0;
        this.vehicleOrient = 0;    // Front towards positive Z axis
        this.vehiclePos = [0,10,0]; // [x,y,z]


        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 16, 8);
        this.cylinder = new MyCylinder(this,6);
        this.cubeMap = new MyUnitCubeQuad(this);
        this.vehicle = new MyVehicle(this,this.vehicleOrient,this.vehicleSpeed,this.vehiclePos);
        this.supplies = [];
        this.nSupply = 5;
        this.countSupply = 0;
        for(var i = 0; i < this.nSupply; i++){
            this.supplies.push(new MySupply(this));
        }
        this.terrain = new MyTerrain(this); 

        this.initMaterials();
 
        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayCylinder = false;
        this.displaySphere = false;
        this.displayCubeMap = false;
        this.displayVehicle = true;
        this.displayTerrain = true;
        this.objectComplexity = 0.5;
        this.scaleFactor = 1;
        this.speedFactor = 0.1;
        this.selectedTexture = -1;

        this.textures = [this.backTexture ,this.frontTexture ,this.leftTexture ,this.rightTexture ,this.topTexture ,this.bottomTexture ,
                         this.back2Texture,this.front2Texture,this.left2Texture,this.right2Texture,this.top2Texture,this.bottom2Texture];

        this.textureIds = { 'Summer': 0, 'Winter': 1 };
    }

    initMaterials()
    {


        //------ Textures
        this.cubeMapTexture = new CGFtexture(this, 'images/cubemap.png');
        this.earthTexture = new CGFtexture(this, 'images/earth.jpg');
 
        //back;
        this.backTexture = new CGFtexture(this, 'images/split_cubemap/back.png');
        this.back2Texture = new CGFtexture(this, 'images/split_cubemap/back2.png');

        //front
        this.frontTexture = new CGFtexture(this, 'images/split_cubemap/front.png');
        this.front2Texture = new CGFtexture(this, 'images/split_cubemap/front2.png');
 
        //left
        this.leftTexture = new CGFtexture(this, 'images/split_cubemap/left.png');
        this.left2Texture = new CGFtexture(this, 'images/split_cubemap/left2.png');
 
        //right
        this.rightTexture = new CGFtexture(this, 'images/split_cubemap/right.png');
        this.right2Texture = new CGFtexture(this, 'images/split_cubemap/right2.png');
 
        //top
        this.topTexture = new CGFtexture(this, 'images/split_cubemap/top.png');
        this.top2Texture = new CGFtexture(this, 'images/split_cubemap/top2.png');
 
        //bottom
        this.bottomTexture = new CGFtexture(this, 'images/split_cubemap/bottom.png');
        this.bottom2Texture = new CGFtexture(this, 'images/split_cubemap/bottom2.png');

        //box
        this.boxTexture = new CGFtexture(this, 'images/box.jpg');

        //
        this.heightMapTexture = new CGFtexture(this, 'images/heightmap.jpg')
        //-------

        
        this.heightMapMaterial = new CGFappearance(this);
        this.heightMapMaterial.loadTexture('images/heightmap.jpg');

        this.backMaterial = new CGFappearance(this);
        this.frontMaterial = new CGFappearance(this);
        this.leftMaterial = new CGFappearance(this);
        this.rightMaterial = new CGFappearance(this);
        this.topMaterial = new CGFappearance(this);
        this.bottomMaterial = new CGFappearance(this);

        //Cube Map Material
        this.cubeMapMaterial = new CGFappearance(this);
        this.cubeMapMaterial.loadTexture('images/cubemap.png');

        //Earth Material
        this.earthMaterial = new CGFappearance(this);
        this.earthMaterial.loadTexture('images/earth.jpg');

        //back
        this.back = new CGFappearance(this);
        this.back.loadTexture('images/split_cubemap/back.png');

        //bottom
        this.bottom = new CGFappearance(this);
        this.bottom.loadTexture('images/split_cubemap/bottom.png');

        //front
        this.front = new CGFappearance(this);
        this.front.loadTexture('images/split_cubemap/front.png');

        //left
        this.left = new CGFappearance(this);
        this.left.loadTexture('images/split_cubemap/left.png');

        //right
        this.right = new CGFappearance(this);
        this.right.loadTexture('images/split_cubemap/right.png');

        //top
        this.top = new CGFappearance(this);
        this.top.loadTexture('images/split_cubemap/top.png');

        //back2
        this.back2 = new CGFappearance(this);
        this.back2.loadTexture('images/split_cubemap/back2.png');

        //bottom2
        this.bottom2 = new CGFappearance(this);
        this.bottom2.loadTexture('images/split_cubemap/bottom2.png');

        //front2
        this.front2 = new CGFappearance(this);
        this.front2.loadTexture('images/split_cubemap/front2.png');

        //left2
        this.left2 = new CGFappearance(this);
        this.left2.loadTexture('images/split_cubemap/left2.png');

        //right2
        this.right2 = new CGFappearance(this);
        this.right2.loadTexture('images/split_cubemap/right2.png');

        //top2
        this.top2 = new CGFappearance(this);
        this.top2.loadTexture('images/split_cubemap/top2.png');

        //box
        this.boxMaterial = new CGFappearance(this);
        this.boxMaterial.setTexture(this.boxTexture);
    }

    initLights() 
    {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() 
    {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() 
    {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    // called periodically (as per setUpdatePeriod(50-50000ms) in init())
    update(t)
    {
        this.checkKeys();
        this.vehicle.update(t);
        for(var i = 0; i<this.nSupply; i++){
            this.supplies[i].update(this.vehicle.deltaTime);
        }   
        
        this.time = t * 2 * Math.PI / 1000;
    }


    checkKeys() 
    {
        
        var text="Keys pressed: ";
        var keysPressed=false;
        var val = 0.1;
        // Check for key codes e.g. in https://keycode.info/
        this.vehicle.turn(0);
        this.vehicle.accelerate(0,this.time);

        if (this.gui.isKeyPressed("KeyP")) 
            {
            keysPressed=true;
            text+=" P ";
            this.vehicle.autoPilot();
            }

        if(!this.vehicle.auto)
        {
            if (this.gui.isKeyPressed("KeyW")) 
            {
            keysPressed=true;
            text+=" W ";
            this.vehicle.accelerate(val*this.speedFactor,this.time);
            }

            if (this.gui.isKeyPressed("KeyS")) 
            {
            keysPressed=true;
            text+=" S ";
            this.vehicle.accelerate(-val*this.speedFactor,this.time);
            }

            if (this.gui.isKeyPressed("KeyA")) 
            {
            keysPressed=true;
            text+=" A ";
            this.vehicle.turn(val);
            }

            if (this.gui.isKeyPressed("KeyD")) 
            {
            keysPressed=true;
            text+=" D ";
            this.vehicle.turn(-val);
            }

            
            if (this.gui.isKeyPressed("KeyL")) 
            {
            keysPressed=true;
            text+=" L ";
            //this.vehicle.dropSupply();
                if (this.countSupply != this.nSupply)
                {
                    this.supplies[this.countSupply].drop(this.vehicle.position);
                    this.countSupply++;
                }
               
            }
        }

        if (this.gui.isKeyPressed("KeyR")) 
        {
        keysPressed=true;
        text+=" R ";
        this.reset();
        }
        
        if (keysPressed)
        {
        console.log(text);
        }
    }

    reset()
    {
        this.vehicle.reset();
        this.countSupply = 0;
        for(var i = 0; i<this.nSupply; i++){
            this.supplies[i].reset();
        }   
    }
    updateObjectComplexity()
    {
        this.cylinder.updateBuffers(this.objectComplexity);
    }

    //Function that resets selected texture in cubeMapMaterial
    updateAppliedTexture() 
    {
        if(this.selectedTexture == 0)
        {
            this.backMaterial.setTexture(this.textures[0]);
            this.frontMaterial.setTexture(this.textures[1]);
            this.leftMaterial.setTexture(this.textures[2]);
            this.rightMaterial.setTexture(this.textures[3]);
            this.topMaterial.setTexture(this.textures[4]);
            this.bottomMaterial.setTexture(this.textures[5]);
        }
        if(this.selectedTexture == 1)
        {
            this.backMaterial.setTexture(this.textures[6]);
            this.frontMaterial.setTexture(this.textures[7]);
            this.leftMaterial.setTexture(this.textures[8]);
            this.rightMaterial.setTexture(this.textures[9]);
            this.topMaterial.setTexture(this.textures[10]);
            this.bottomMaterial.setTexture(this.textures[11]);
        }
    }

    display() 
    {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();


        

        // ---- BEGIN Primitive drawing section

        this.pushMatrix();

        if (this.displayCylinder)
        //this.cylinder.enableNormalViz();
        {
            this.earthMaterial.apply();
            this.cylinder.display();
        }
        
        //This sphere does not have defined texture coordinates
        if (this.displaySphere)
        {
            this.earthMaterial.apply();
            this.incompleteSphere.display();
        }

        for(var i = 0; i < this.nSupply; i++){
            this.supplies[i].display();
        }


        if(this.displayVehicle)
        {
            this.vehicle.display();
        }

        if(this.displayCubeMap)
        {
            this.cubeMap.display();
        }

        if(this.displayTerrain)
        {
            
            this.terrain.display();
        }
        
        this.popMatrix();
        // ---- END Primitive drawing section

        this.setActiveShader(this.defaultShader);
    }



}