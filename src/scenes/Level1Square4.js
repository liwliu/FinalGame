class Level1Square4 extends Phaser.Scene {
    constructor() {
        super("Level1Square4");
    }

    // preload() {
    //     //assets
    //     this.load.image('background4', './assets/img/fourthBackground.png');
    //     this.load.image('playersprite', './assets/img/characterSpritesmall.png');
    // }

    create() {
        //variable to make this square accessible by other objects
        window.Level1Square4 = this;
        //load in background
        this.Background = this.add.tileSprite(0,0, 1000, 1000, 'background4').setOrigin(0,0);

        //Walls
         //Top
         this.fourthTopWall = this.add.tileSprite(0,0,1000,64, 'topWall4').setOrigin(0,0);
         //Bot
         this.fourthBotWall = this.add.tileSprite(240,934, 768, 64, 'botWall4').setOrigin(0,0);
         //Left
         this.fourthLeftWall = this.add.tileSprite(0,63, 64, 576,'leftWall4').setOrigin(0,0);
         //right
         this.fourthRightWall = this.add.tileSprite(969, 250, 32, 704, 'rightWall4').setOrigin(0,0);
         //mid
         this.fourthMidWall = this.add.tileSprite(545,0, 192, 510, 'midWall4').setOrigin(0,0); 
         //sidemid
         this.sideMidWall = this.add.tileSprite(779,600, 192, 128, 'sideMidWall4').setOrigin(0,0);


        //load in button
        this.bluebutton = new BlueButton(this, 919, 770, 'blue', 0).setOrigin(0,0);
        var bluedown = false;

        this.redbutton = new RedButton(this, 64, 65, 'red', 0).setOrigin(0,0);
        var reddown = false;
        
        this.rockEntrance = new Rock(this, 849, 360, 'rock', 0).setOrigin(0,0);
        this.rock = new Rock(this, 234, 310, 'rock', 0).setOrigin(0,0);

        //load in explorer
        this.explorer = new Player(this, game.settings.x, game.settings.y, 'playersprite', 0).setOrigin(0,0);

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
        this.bluebutton.update();
        this.redbutton.update();
        this.rock.update();
        this.rockEntrance.update();

        if(this.game.settings.gameover == true){
            if(this.explorer.x < 2){
                this.explorer.destroy();
                this.scene.start("Level1End");
            }
            else{

                this.explorer.destroy();
                game.settings = {
                    x: 9, 
                    y: this.explorer.y,
                    gameover: false,
                    screen: 13,
                    key: true
                }
                this.scene.start("Level1Square3");
            }
        }
    }


}