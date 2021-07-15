class Level1Square2 extends Phaser.Scene {
    constructor() {
        super("Level1Square2");
    }

    preload() {
        //assets
        this.load.image('background2', './assets/img/secondBackground.png');
        this.load.image('playersprite', './assets/img/characterSpritesmall.png');
    }

    create() {
        //variable to make this square accessible by other objects
        window.Level1Square1 = this;
        //load in background
        this.Background = this.add.tileSprite(0,0, 1000, 1000, 'background2').setOrigin(0,0);

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
        if(this.game.settings.gameover == true && this.explorer.x < 2){ 
            this.explorer.destroy();
            game.settings = {
                x: 970,
                y: this.explorer.y,
                gameover: false,
                screen: 11
            }
            this.scene.start("Level1Square1");
        }

        if(this.game.settings.gameover == true && this.explorer.y < 7){ 
            this.explorer.destroy();
            if(this.explorer.x >=650){
                game.settings = {
                    x: this.explorer.x,
                    y: 955,
                    gameover: false,
                    screen: 13
                }
            }
            else if(this.explorer.x >= 579){
                 game.settings= {
                     x: 650,
                     y: 955,
                     gameover: false,
                     screen: 13
                 }
             }
            // else{
            //     game.settings = {
            //         x: 326.75,
            //         y: 961,
            //         gameover: false,
            //         screen: 13
            //     }
            // }
           
                this.scene.start("Level1Square3");
        }
        this.explorer.update();
    }


}