/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        //Instancias ex2
        this.diamond2 = new MyDiamond(this.scene);
        this.trianglebig2 = new MyTriangleBig(this.scene);
        this.parallelogram2 = new MyParallelogram(this.scene);
        this.triangle2 = new MyTriangle(this.scene);
        this.trianglebig3 = new MyTriangleBig(this.scene);
        this.trianglesmall2 = new MyTriangleSmall(this.scene);
        this.trianglesmall3 = new MyTriangleSmall(this.scene);
	}


    display()
    {
        var diamondtra =    [1.0, 0.0, 0.0, 0.0,
                             0.0, 1.0, 0.0, 0.0,
                             0.0, 0.0, 1.0, 0.0,
                             1.0, 1.0, 0.0, 1.0];

        var trianglebigtra = [1.0, 0.0, 0.0, 0.0,
                              0.0, 1.0, 0.0, 0.0,
                              0.0, 0.0, 1.0, 0.0,
                             -1.0, 0.0, 0.0, 1.0];

        var parallelogramsca = [1.0, 0.0, 0.0, 0.0,
                                0.0,-1.0, 0.0, 0.0,
                                0.0, 0.0, 1.0, 0.0,
                                0.0, 0.0, 0.0, 1.0];

        // var parallelogramrot = [Math.cos(Math.PI/2), -Math.sin(Math.PI/2), 0.0, 0.0,
        //                         Math.sin(Math.PI/2), Math.cos(Math.PI/2), 0.0, 0.0,
        //                         0.0, 0.0, 1.0, 0.0,
        //                         0.0, 0.0, 0.0, 1.0];

        var parallelogramrot =  [Math.cos(Math.PI/2), Math.sin(Math.PI/2), 0.0, 0.0,
                                -Math.sin(Math.PI/2), Math.cos(Math.PI/2), 0.0, 0.0,
                                                 0.0,                 0.0, 1.0, 0.0,
                                                 0.0,                 0.0, 0.0, 1.0];

                                        

        var parallelogramtra = [1.0, 0.0, 0.0, 0.0,
                                0.0, 1.0, 0.0, 0.0,
                                0.0, 0.0, 1.0, 0.0,
                                1.0, 0.0, 0.0, 1.0];


        var triangle2tra =     [1.0, 0.0, 0.0, 0.0,
                                0.0, 1.0, 0.0, 0.0,
                                0.0, 0.0, 1.0, 0.0,
                                2.0, 3.0, 0.0, 1.0];

        var trianglebig3rot =   [Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0.0, 0.0,
                                -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0.0, 0.0,
                                                 0.0,                 0.0, 1.0, 0.0,
                                                 0.0,                 0.0, 0.0, 1.0];


        var trianglebig3ytra =     [1.0, 0.0, 0.0, 0.0,
                                    0.0, 1.0, 0.0, 0.0,
                                    0.0, 0.0, 1.0, 0.0,
                                    0.0, -2.0, 0.0, 1.0];


        var trianglebig3xtra =  [1.0, 0.0, 0.0, 0.0,
                                 0.0, 1.0, 0.0, 0.0,
                                 0.0, 0.0, 1.0, 0.0,
                                -2.5, 0.0, 0.0, 1.0];


        var trianglesmall2rot = [Math.cos(Math.PI/2), Math.sin(Math.PI/2), 0.0, 0.0,
                                -Math.sin(Math.PI/2), Math.cos(Math.PI/2), 0.0, 0.0,
                                                 0.0,                 0.0, 1.0, 0.0,
                                                 0.0,                 0.0, 0.0, 1.0];



        var trianglesmall2xtra =    [1.0, 0.0, 0.0, 0.0,
                                     0.0, 1.0, 0.0, 0.0,
                                     0.0, 0.0, 1.0, 0.0,
                                    -2.0, 0.0, 0.0, 1.0];


        var trianglesmall2ytra =   [1.0, 0.0, 0.0, 0.0,
                                    0.0, 1.0, 0.0, 0.0,
                                    0.0, 0.0, 1.0, 0.0,
                                    0.0, -(Math.sqrt(8)+0.5), 0.0, 1.0];



        var trianglesmall3rot =  [Math.cos(3*Math.PI/4), Math.sin(3*Math.PI/4), 0.0, 0.0,
                                 -Math.sin(3*Math.PI/4), Math.cos(3*Math.PI/4), 0.0, 0.0,
                                                    0.0,                 0.0, 1.0, 0.0,
                                                    0.0,                 0.0, 0.0, 1.0];



        var trianglesmall3xtra =   [1.0, 0.0, 0.0, 0.0,
                                    0.0, 1.0, 0.0, 0.0,
                                    0.0, 0.0, 1.0, 0.0,
                                    1.0, 0.0, 0.0, 1.0];


        var trianglesmall3xtra2 =  [1.0, 0.0, 0.0, 0.0,
                                    0.0, 1.0, 0.0, 0.0,
                                    0.0, 0.0, 1.0, 0.0,
                                    +(-2.5+Math.sqrt(2)), 0.0, 0.0, 1.0];

        var trianglesmall3ytra =   [1.0, 0.0, 0.0, 0.0,
                                    0.0, 1.0, 0.0, 0.0,
                                    0.0, 0.0, 1.0, 0.0,
                                    0.0, -(Math.sqrt(8)+1+Math.sqrt(2)), 0.0, 1.0];


        
        this.scene.pushMatrix();
        this.scene.multMatrix(diamondtra);
        this.diamond2.display();
        this.scene.popMatrix();
        
        
        this.scene.pushMatrix();
        this.scene.multMatrix(trianglebigtra);
        this.trianglebig2.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.multMatrix(parallelogramrot);
        this.scene.multMatrix(parallelogramsca);
        this.scene.multMatrix(parallelogramtra);
        this.parallelogram2.display();
        this.scene.popMatrix();
        

        
        this.scene.pushMatrix();
        this.scene.multMatrix(triangle2tra);
        this.triangle2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(trianglebig3xtra);
        this.scene.multMatrix(trianglebig3rot);
        this.scene.multMatrix(trianglebig3ytra);
        this.trianglebig3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(trianglesmall2xtra);
        this.scene.multMatrix(trianglesmall2ytra);
        this.scene.multMatrix(trianglesmall2rot);
        this.trianglesmall2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(trianglesmall3ytra);
        this.scene.multMatrix(trianglesmall3xtra2);
        this.scene.multMatrix(trianglesmall3rot);
        this.scene.multMatrix(trianglesmall3xtra);
        this.trianglesmall3.display();
        this.scene.popMatrix();

    }
}

