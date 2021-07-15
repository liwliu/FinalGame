class Level1Square4 extends Phaser.Scene {
    constructor() {
        super("Level1Square4");
    }

    preload() {
        //assets
        this.load.image('background4', './assets/img/fourthBackground.png');
        this.load.image('playersprite', './assets/img/characterSpritesmall.png');
    }

    create() {
        //variable to make this square accessible by other objects
        window.Level1Square4 = this;
        //load in background
        this.Background = this.add.tileSprite(0,0, 1000, 1000, 'background4').setOrigin(0,0);
        

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

        if(this.game.settings.gameover == true){
            this.explorer.destroy();
            game.settings = {
                x: 9, 
                y: this.explorer.y,
                gameover: false,
                screen: 13
            }
            this.scene.start("Level1Square3");
         }
    }


}