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

        this.initMaterials();
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


        

                                    
        //this.materialgreen.apply();
        this.scene.customMaterial.apply();
        this.scene.pushMatrix();
        this.scene.multMatrix(diamondtra);
        //this.diamond2.enableNormalViz();
        this.diamond2.display();
        this.scene.popMatrix();
        
        this.materialblue.apply();
        this.scene.pushMatrix();
        this.scene.multMatrix(trianglebigtra);
        this.trianglebig2.display();
        this.scene.popMatrix();

        this.materialyellow.apply();
        this.scene.pushMatrix();
        this.scene.multMatrix(parallelogramrot);
        this.scene.multMatrix(parallelogramsca);
        this.scene.multMatrix(parallelogramtra);
        this.parallelogram2.display();
        this.scene.popMatrix();
        
        this.materialpink.apply();
        this.scene.pushMatrix();
        this.scene.multMatrix(triangle2tra);
        this.triangle2.display();
        this.scene.popMatrix();

        this.materialorange.apply();
        this.scene.pushMatrix();
        this.scene.multMatrix(trianglebig3xtra);
        this.scene.multMatrix(trianglebig3rot);
        this.scene.multMatrix(trianglebig3ytra);
        this.trianglebig3.display();
        this.scene.popMatrix();

        this.materialred.apply();
        this.scene.pushMatrix();
        this.scene.multMatrix(trianglesmall2xtra);
        this.scene.multMatrix(trianglesmall2ytra);
        this.scene.multMatrix(trianglesmall2rot);
        this.trianglesmall2.display();
        this.scene.popMatrix();

        this.materialpurple.apply();
        this.scene.pushMatrix();
        this.scene.multMatrix(trianglesmall3ytra);
        this.scene.multMatrix(trianglesmall3xtra2);
        this.scene.multMatrix(trianglesmall3rot);
        this.scene.multMatrix(trianglesmall3xtra);
        this.trianglesmall3.display();
        this.scene.popMatrix();

    }

    enableNormalViz(){
        this.diamond2.enableNormalViz();
        this.trianglebig2.enableNormalViz();
        this.parallelogram2.enableNormalViz();
        this.triangle2.enableNormalViz();
        this.trianglebig3.enableNormalViz();
        this.trianglesmall2.enableNormalViz();
        this.trianglesmall3.enableNormalViz();
    }

    disableNormalViz(){
        this.diamond2.disableNormalViz();
        this.trianglebig2.disableNormalViz();
        this.parallelogram2.disableNormalViz();
        this.triangle2.disableNormalViz();
        this.trianglebig3.disableNormalViz();
        this.trianglesmall2.disableNormalViz();
        this.trianglesmall3.disableNormalViz();
    }

    initMaterials(){

        //PINK
        this.materialpink = new CGFappearance(this.scene);
        this.materialpink.setAmbient(255/255, 155/255, 207/255, 1.0);
        this.materialpink.setDiffuse(0, 0, 0, 1.0);
        this.materialpink.setSpecular(1, 1, 1, 1.0);
        this.materialpink.setShininess(10.0);

        //GREEN
        this.materialgreen = new CGFappearance(this.scene);
        this.materialgreen.setAmbient(0, 1, 0, 1.0);
        this.materialgreen.setDiffuse(0, 0, 0, 1.0);
        this.materialgreen.setSpecular(1, 1, 1, 1.0);
        this.materialgreen.setShininess(10.0);

        //YELLOW
        this.materialyellow = new CGFappearance(this.scene);
        this.materialyellow.setAmbient(1, 1, 0, 1.0);
        this.materialyellow.setDiffuse(0, 0, 0, 1.0);
        this.materialyellow.setSpecular(1, 1, 1, 1.0);
        this.materialyellow.setShininess(10.0);

        //BLUE
        this.materialblue = new CGFappearance(this.scene);
        this.materialblue.setAmbient(0, 155/255, 1, 1.0);
        this.materialblue.setDiffuse(0, 0, 0, 1.0);
        this.materialblue.setSpecular(1, 1, 1, 1.0);
        this.materialblue.setShininess(10.0);

        //ORANGE
        this.materialorange = new CGFappearance(this.scene);
        this.materialorange.setAmbient(1, 155/255, 0, 1.0);
        this.materialorange.setDiffuse(0, 0, 0, 1.0);
        this.materialorange.setSpecular(1, 1, 1, 1.0);
        this.materialorange.setShininess(10.0);

        //RED
        this.materialred = new CGFappearance(this.scene);
        this.materialred.setAmbient(1, 27/255, 27/255, 1.0);
        this.materialred.setDiffuse(0, 0, 0, 1.0);
        this.materialred.setSpecular(1, 1, 1, 1.0);
        this.materialred.setShininess(10.0);

        //PURPLE
        this.materialpurple = new CGFappearance(this.scene);
        this.materialpurple.setAmbient(150/255 , 80/255, 190/255, 1.0);
        this.materialpurple.setDiffuse(0, 0, 0, 1.0);
        this.materialpurple.setSpecular(1, 1, 1, 1.0);
        this.materialpurple.setShininess(10.0);
        


    }


}

