class Level1Square3 extends Phaser.Scene {
    constructor() {
        super("Level1Square3");
    }

    preload() {
        //assets
        this.load.image('background3', './assets/img/thirdBackground.png');
        this.load.image('playersprite', './assets/img/characterSpritesmall.png');
    }

    create() {
        //variable to make this square accessible by other objects
        window.Level1Square3 = this;
        //load in background
        this.Background = this.add.tileSprite(0,0, 500, 500, 'background3').setOrigin(0,0);

        //load in explorer
        this.explorer = new Player(this, game.settings.x, game.settings.y, 'playersprite', 0).setOrigin(0,0);

        //set keyboard input
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {

        if(this.game.settings.gameover == true && this.explorer.y > 458){ 
            this.explorer.destroy();
            if(this.explorer.x <= 391.75){
                game.settings = {
                    x: this.explorer.x, 
                    y: 5.25,
                    gameover: false,
                    screen: 12
                }
            }
            else{
                game.settings = {
                    x: 391.75, 
                    y: 5.25,
                    gameover: false,
                    screen: 12
                }
            }
            this.scene.start("Level1Square2");
        }

        if(this.game.settings.gameover == true && this.explorer.x < 2){ 
            this.explorer.destroy();
                game.settings = {
                    x: 469, 
                    y: this.explorer.y,
                    gameover: false,
                    screen: 14
            }
            this.scene.start("Level1Square4");
        }
        this.explorer.update();
    }


}