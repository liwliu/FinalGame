class Level1Square1 extends Phaser.Scene {
    constructor() {
        super("Level1Square1");
    }

    // preload() {
    //     //assets
    //     this.load.image('background1', './assets/img/startingBackground.png');
    //     this.load.image('playersprite', './assets/img/characterSpritesmall.png');
    // }

    create() {

        
        //variable to make this square accessible by other objects
        window.Level1Square1 = this;
        //load in background
        this.Background = this.add.tileSprite(0,0, 1000, 1000, 'background1').setOrigin(0,0);

        //load in explorer
        this.explorer = new Player(this, game.settings.x, game.settings.y, 'playersprite', 0).setOrigin(0,0);

        //assets
        this.checkpoint = this.add.tileSprite(127, 509, 64, 64, 'checkpoint').setOrigin(0,0);
        this.chest = this.add.tileSprite(112, 344, 32,32, 'chest').setOrigin(0,0);
        //temp asset
        this.meleeEnemy = this.add.tileSprite(232, 104, 32, 32, 'meleeEnemy').setOrigin(0,0);

        //checks if player already has key
        if(game.settings.key == true){
            this.haskey = true;
        }
        else{
            this.haskey = false;
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
        if(this.game.settings.gameover == true){ 
            this.explorer.destroy();
            game.settings = {
                x: 1.25,
                y: this.explorer.y,
                gameover: false,
                screen: 12,
                key: this.haskey 
            }
            this.scene.start("Level1Square2");
        }
        this.explorer.update();
    }


}