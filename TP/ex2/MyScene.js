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

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.diamond = new MyDiamond(this);
        this.triangle = new MyTriangle(this);
        this.parallelogram = new MyParallelogram(this);
        this.trianglesmall = new MyTriangleSmall(this);
        this.trianglebig = new MyTriangleBig(this);

        
        //Instancias ex2.1 e 2.2
        // this.diamond2 = new MyDiamond(this);
        // this.trianglebig2 = new MyTriangleBig(this);
        // this.parallelogram2 = new MyParallelogram(this);
        // this.triangle2 = new MyTriangle(this);
        // this.trianglebig3 = new MyTriangleBig(this);
        // this.trianglesmall2 = new MyTriangleSmall(this);
        // this.trianglesmall3 = new MyTriangleSmall(this);
        //Intancia ex2.3
        this.tangram = new MyTangram(this);
        //Instancia ex3
        this.unitcube = new MyUnitCube(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayDiamond = false;
        this.displayTriangle = false;
        this.displayParallelogram = false;
        this.displayTriangleSmall = false;
        this.displayTriangleBig = false;
        this.displayTangram = false;
        this.scaleFactor = 1;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
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


        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        
        // var diamondtra = [1.0, 0.0, 0.0, 0.0,
        //                   0.0, 1.0, 0.0, 0.0,
        //                   0.0, 0.0, 1.0, 0.0,
        //                   1.0, 1.0, 0.0, 1.0];
        
        // var trianglebigtra = [1.0, 0.0, 0.0, 0.0,
        //                       0.0, 1.0, 0.0, 0.0,
        //                       0.0, 0.0, 1.0, 0.0,
        //                      -1.0, 0.0, 0.0, 1.0];

        // var parallelogramsca = [1.0, 0.0, 0.0, 0.0,
        //                         0.0,-1.0, 0.0, 0.0,
        //                         0.0, 0.0, 1.0, 0.0,
        //                         0.0, 0.0, 0.0, 1.0];

        // // var parallelogramrot = [Math.cos(Math.PI/2), -Math.sin(Math.PI/2), 0.0, 0.0,
        // //                         Math.sin(Math.PI/2), Math.cos(Math.PI/2), 0.0, 0.0,
        // //                         0.0, 0.0, 1.0, 0.0,
        // //                         0.0, 0.0, 0.0, 1.0];
        
        // var parallelogramrot = [Math.cos(Math.PI/2), Math.sin(Math.PI/2), 0.0, 0.0,
        //                        -Math.sin(Math.PI/2), Math.cos(Math.PI/2), 0.0, 0.0,
        //                                         0.0,                 0.0, 1.0, 0.0,
        //                                         0.0,                 0.0, 0.0, 1.0];
 
                                                

        // var parallelogramtra = [1.0, 0.0, 0.0, 0.0,
        //                         0.0, 1.0, 0.0, 0.0,
        //                         0.0, 0.0, 1.0, 0.0,
        //                         1.0, 0.0, 0.0, 1.0];
        
        
        // var triangle2tra =     [1.0, 0.0, 0.0, 0.0,
        //                         0.0, 1.0, 0.0, 0.0,
        //                         0.0, 0.0, 1.0, 0.0,
        //                         2.0, 3.0, 0.0, 1.0];

        // var trianglebig3rot =  [Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0.0, 0.0,
        //                         -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0.0, 0.0,
        //                         0.0,                 0.0, 1.0, 0.0,
        //                         0.0,                 0.0, 0.0, 1.0];
        

        // var trianglebig3ytra =  [1.0, 0.0, 0.0, 0.0,
        //                          0.0, 1.0, 0.0, 0.0,
        //                          0.0, 0.0, 1.0, 0.0,
        //                          0.0, -2.0, 0.0, 1.0];


        // var trianglebig3xtra =  [1.0, 0.0, 0.0, 0.0,
        //                          0.0, 1.0, 0.0, 0.0,
        //                          0.0, 0.0, 1.0, 0.0,
        //                         -2.5, 0.0, 0.0, 1.0];
    

        // var trianglesmall2rot =  [Math.cos(Math.PI/2), Math.sin(Math.PI/2), 0.0, 0.0,
        //                          -Math.sin(Math.PI/2), Math.cos(Math.PI/2), 0.0, 0.0,
        //                                           0.0,                 0.0, 1.0, 0.0,
        //                                           0.0,                 0.0, 0.0, 1.0];



        // var trianglesmall2xtra =  [1.0, 0.0, 0.0, 0.0,
        //                          0.0, 1.0, 0.0, 0.0,
        //                          0.0, 0.0, 1.0, 0.0,
        //                         -2.0, 0.0, 0.0, 1.0];


        // var trianglesmall2ytra =  [1.0, 0.0, 0.0, 0.0,
        //                            0.0, 1.0, 0.0, 0.0,
        //                            0.0, 0.0, 1.0, 0.0,
        //                            0.0, -(Math.sqrt(8)+0.5), 0.0, 1.0];



        // var trianglesmall3rot =  [Math.cos(3*Math.PI/4), Math.sin(3*Math.PI/4), 0.0, 0.0,
        //                          -Math.sin(3*Math.PI/4), Math.cos(3*Math.PI/4), 0.0, 0.0,
        //                                           0.0,                 0.0, 1.0, 0.0,
        //                                           0.0,                 0.0, 0.0, 1.0];
   
   
   
        // var trianglesmall3xtra =    [1.0, 0.0, 0.0, 0.0,
        //                              0.0, 1.0, 0.0, 0.0,
        //                              0.0, 0.0, 1.0, 0.0,
        //                              1, 0.0, 0.0, 1.0];


        // var trianglesmall3xtra2 =    [1.0, 0.0, 0.0, 0.0,
        //                             0.0, 1.0, 0.0, 0.0,
        //                             0.0, 0.0, 1.0, 0.0,
        //                             +(-2.5+Math.sqrt(2)), 0.0, 0.0, 1.0];

        // var trianglesmall3ytra =  [1.0, 0.0, 0.0, 0.0,
        //                             0.0, 1.0, 0.0, 0.0,
        //                             0.0, 0.0, 1.0, 0.0,
        //                             0.0, -(Math.sqrt(8)+1+Math.sqrt(2)), 0.0, 1.0];

        this.multMatrix(sca);

        // ---- BEGIN Primitive drawing section
        
        if(this.displayDiamond)
            this.diamond.display();
        
        if(this.displayTriangle)    
            this.triangle.display();

        if(this.displayParallelogram)
            this.parallelogram.display();

        if(this.displayTriangleSmall)
            this.trianglesmall.display();
        
        if(this.displayTriangleBig)
            this.trianglebig.display();

        
        if(this.displayTangram)
            this.tangram.display();


            

            
            
        this.pushMatrix();
        //mover o tangram com a moldura para origem
        this.translate(3.5,-4.5,0);
        this.tangram.display();
        
        //criar a moldura
        this.pushMatrix();
        this.translate(0,-0.5,-1);
        this.scale(7,10,1);
        this.unitcube.display();
        this.popMatrix();

        this.popMatrix();

        

           
        // this.pushMatrix();
        // this.multMatrix(diamondtra);
        // this.diamond2.display();
        // this.popMatrix();

        
        // this.pushMatrix();
        // this.multMatrix(trianglebigtra);
        // this.trianglebig2.display();
        // this.popMatrix();


        // this.pushMatrix();
        // this.multMatrix(parallelogramrot);
        // this.multMatrix(parallelogramsca);
        // this.multMatrix(parallelogramtra);
        // this.parallelogram2.display();
        // this.popMatrix();
        

        // this.pushMatrix();
        // this.multMatrix(triangle2tra);
        // this.triangle2.display();
        // this.popMatrix();

        // this.pushMatrix();
        // this.multMatrix(trianglebig3xtra);
        // this.multMatrix(trianglebig3rot);
        // this.multMatrix(trianglebig3ytra);
        // this.trianglebig3.display();
        // this.popMatrix();

        // this.pushMatrix();
        // this.multMatrix(trianglesmall2xtra);
        // this.multMatrix(trianglesmall2ytra);
        // this.multMatrix(trianglesmall2rot);
        // this.trianglesmall2.display();
        // this.popMatrix();

        // this.pushMatrix();
        // this.multMatrix(trianglesmall3ytra);
        // this.multMatrix(trianglesmall3xtra2);
        // this.multMatrix(trianglesmall3rot);
        // this.multMatrix(trianglesmall3xtra);
        // this.trianglesmall3.display();
        // this.popMatrix();



        // ---- END Primitive drawing section
    }
}