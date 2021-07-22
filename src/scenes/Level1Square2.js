class Level1Square2 extends Phaser.Scene {
    constructor() {
        super("Level1Square2");
    }

    // ad

    create() {
        //variable to make this square accessible by other objects
        window.Level1Square2 = this;

        //load in background
        this.Background = this.add.tileSprite(0,0, 1000, 1000, 'background2').setOrigin(0,0);

        //Walls
        //Top
        this.secondTopWall = this.add.tileSprite(0,0,576,64, 'topWall2').setOrigin(0,0);
        //Bot
        this.secondBotWall = this.add.tileSprite(40,934, 960, 64, 'botWall2').setOrigin(0,0);
        //Left
        this.secondLeftWall = this.add.tileSprite(0,225, 64, 768,'leftWall2').setOrigin(0,0);
        //right
        this.secondRightWall = this.add.tileSprite(934, 0, 64, 968, 'rightWall2').setOrigin(0,0);


        //load in explorer
        this.explorer = new Player(this, game.settings.x, game.settings.y, 'playersprite', 0).setOrigin(0,0);

        //next area totems
        this.nextArea2 = this.add.tileSprite(570, 5, 40, 56, 'nextArea').setOrigin(0,0);
        this.nextArea2Top = this.add.tileSprite(821, 5, 40, 56, 'nextArea').setOrigin(0,0);

        //load in key
        if(game.settings.key == false){
            this.key = new Key(this, 764, 840.5, 'keysprite', 0).setOrigin(0,0);
        }else{
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
        //do not move this function it is very important that it is at the beginning of update()
        this.key.update();

        if(this.game.settings.gameover == true && this.explorer.x < 2){ 
            this.explorer.destroy();
            if(game.settings.key == false){
                game.settings = {
                    x: 970,
                    y: this.explorer.y,
                    gameover: false,
                    screen: 11,
                    key: false
                }
            }
            else{
                game.settings = {
                    x: 970,
                    y: this.explorer.y,
                    gameover: false,
                    screen: 11,
                    key: true 
                }
            }
            this.scene.start("Level1Square1");
        }

         //WALL COLLISION CHECK
         if(this.checkCollision(this.explorer, this.secondBotWall)){
            this.explorer.y -=5;
        }
        if(this.checkCollision(this.explorer, this.secondTopWall)){
            this.explorer.y +=5;
        }
        if(this.checkCollision(this.explorer, this.secondRightWall)){
            this.explorer.x -=5;
        }
        if(this.checkCollision(this.explorer, this.secondLeftWall)){
            this.explorer.x +=5;
        }
        if(this.checkCollision(this.explorer, this.nextArea2)){
            this.explorer.x +=5;
        }
        if(this.checkCollision(this.explorer, this.nextArea2Top)){
            this.explorer.x -=5;
        }

        if(this.game.settings.gameover == true && this.explorer.y < 7){ 
            this.explorer.destroy();
            if(this.explorer.x >=650){
                game.settings = {
                    x: this.explorer.x,
                    y: 955,
                    gameover: false,
                    screen: 13,
                    key: false
                }
            }
            else if(this.explorer.x >= 579){
                 game.settings= {
                     x: 650,
                     y: 955,
                     gameover: false,
                     screen: 13,
                     key: false
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

    checkCollision(explorer, wall) {
        if (explorer.x < wall.x + wall.width &&
            explorer.x + explorer.width > wall.x &&
            explorer.y < wall.y + wall.height &&
            explorer.height + explorer.y > wall.y) {
                return true;
            } else {
                return false;
            }
    }

}