class Level1Square3 extends Phaser.Scene {
    constructor() {
        super("Level1Square3");
    }

    // preload() {
    //     //assets
    //     this.load.image('background3', './assets/img/thirdBackground.png');
    //     this.load.image('playersprite', './assets/img/characterSpritesmall.png');
    // }

    create() {
        //variable to make this square accessible by other objects
        window.Level1Square3 = this;
        this.clock = new Clock(this);
        //load in background
        this.Background = this.add.tileSprite(0,0, 1000, 1000, 'background3').setOrigin(0,0);

        //load in explorer
        this.explorer = new Player(this, game.settings.x, game.settings.y, 'playersprite', 0).setOrigin(0,0);

        //Walls
         //Top
         this.thirdTopWall = this.add.tileSprite(0,0,960,64, 'topWall3').setOrigin(0,0);
         //Bot
         this.thirdBotWall = this.add.tileSprite(0,934, 576, 64, 'botWall3').setOrigin(0,0);
         //Left
         this.thirdLeftWall = this.add.tileSprite(1.25,240, 64, 704,'leftWall3').setOrigin(0,0);
         //right
         this.thirdRightWall = this.add.tileSprite(934, 0, 64, 1000, 'rightWall3').setOrigin(0,0);
         //mid
         this.thirdMidWall = this.add.tileSprite(545,130, 320, 320, 'midWall3').setOrigin(0,0); 

        //load rock
         this.rock3Entrance = new Rock(this, 706, 655, 'rock', 0).setOrigin(0,0);
         this.rock3 = new Rock(this, 181, 795, 'rock', 0).setOrigin(0,0);

        //load in key
        if(game.settings.key == false){
        this.key = new Key(this, 876, 90, 'keysprite', 0).setOrigin(0,0);
        }
        else{
            this.key = new Key(this, 1300, 1300, 'keysprite', 0).setOrigin(0,0);
        }

        //camera
        this.cameras.main.setSize(500,500);
        this.cameras.main.setBounds(0,0,1000, 1000);

        this.cameras.main.startFollow(this.explorer);

        //set keyboard input
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        
        this.explorer.update();
        this.key.update();
        this.rock3.update();
        this.rock3Entrance.update();
        

        if(this.game.settings.gameover == true && this.explorer.y > 960){ 
            this.explorer.destroy();
            if(this.explorer.x <= 830 && this.explorer.x>= 560){
                game.settings = {
                    x: this.explorer.x, 
                    y: 5.25,
                    gameover: false,
                    screen: 12,
                    key: true
                }
                this.scene.start("Level1Square2");
            }
            // else{
            //     game.settings = {
            //         x: 704, 
            //         y: 5.25,
            //         gameover: false,
            //         screen: 12
            //     }
            // }
            
        }
        

        if(this.game.settings.gameover == true && this.explorer.x < 2){
            this.explorer.destroy();
                game.settings = {
                    x: 959, 
                    y: this.explorer.y,
                    gameover: false,
                    screen: 14,
                    key: false
                }
            this.scene.start("Level1Square4");
        }
        
        //this.checkcamera();
    }
    
    /*checkcamera(){
        if(this.explorer.y < 250){
            this.camera.y
        }
    }*/

}