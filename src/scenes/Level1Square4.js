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

        this.sfxStopped = this.sound.add('sfx_stopped');
        //variable to make this square accessible by other objects
        window.Level1Square4 = this;
        //load in background
        this.Background = this.add.tileSprite(0,0, 1000, 1000, 'background4').setOrigin(0,0);

        //Walls
         //Top
         this.fourthTopWall = this.add.tileSprite(0,0,1000,64, 'topWall4').setOrigin(0,0);
         //Bot
         this.fourthBotWall = this.add.tileSprite(0,934, 1000, 64, 'botWall4').setOrigin(0,0);
         //Left
         this.fourthLeftWall = this.add.tileSprite(0,63, 64, 576,'leftWall4').setOrigin(0,0);
         //right
         this.fourthRightWall = this.add.tileSprite(968, 250, 32, 704, 'rightWall4').setOrigin(0,0);

         //mid
         this.fourthMidWall = this.add.tileSprite(520,0, 192, 510, 'midWall4').setOrigin(0,0); 
         //midLeft
         this.fourthMidLeftWall = this.add.tileSprite(520, 0, 64, 510, 'midLeftWall4').setOrigin(0,0);
         //midRight
         this.fourthMidRightWall = this.add.tileSprite(645, 0, 64, 510, 'midRightWall4').setOrigin(0,0);
         //midBot
         this.fourthMidBotWall = this.add.tileSprite(519, 448, 190, 64, 'midBotWall4').setOrigin(0,0);
         
         
         //sidemid
         this.sideMidWall = this.add.tileSprite(779,600, 192, 128, 'sideMidWall4').setOrigin(0,0);
         //sidetop
         this.sideMidTopWall = this.add.tileSprite(779,600, 192, 64, 'sideMidTopWall4').setOrigin(0,0);
         //sidebot
         this.sideMidBotWall = this.add.tileSprite(779, 664, 190, 64, 'midBotWall4').setOrigin(0,0);
         //sideLeft
         this.sideMidLeftWall = this.add.tileSprite(775, 600, 64, 128, 'sideMidLeftWall4').setOrigin(0,0);


        //load in button
        this.bluebutton = new BlueButton(this, 910, 770, 'blue', 0).setOrigin(0,0);
        var bluedown = false;

        this.redbutton = new RedButton(this, 64, 60, 'red', 0).setOrigin(0,0);
        var reddown = false;
        

        //load in explorer
        this.explorer = new Player(this, game.settings.x, game.settings.y, 'playersprite', 0).setOrigin(0,0);
        
        //load enemies
        this.Enemy1 = new Enemy(this, 729, 900, 'meleeEnemy', 0).setOrigin(0,0); 
        this.Enemy2 = new Enemy(this, Math.random() * (509 - 59) + 59, Math.random() * (900 - 535) + 535, 'meleeEnemy', 0).setOrigin(0,0);   
        this.Enemy3 = new Enemy(this, Math.random() * (509 - 59) + 59, Math.random() * (900 - 535) + 535, 'meleeEnemy', 0).setOrigin(0,0); 
        this.Enemy4 = new Enemy(this, Math.random() * (489 - 254) + 254, Math.random() * (455 - 60) + 60, 'meleeEnemy', 0).setOrigin(0,0); 
        this.Enemy5 = new Enemy(this, Math.random() * (489 - 254) + 254, Math.random() * (455 - 60) + 60, 'meleeEnemy', 0).setOrigin(0,0); 
        //area torch
        this.nextArea4 = this.add.tileSprite(0, 880, 40, 56, 'nextAreaNoFire').setOrigin(0,0);
        this.nextArea4Top = this.add.tileSprite(0, 645, 40, 56, 'nextAreaNoFire').setOrigin(0,0); 

        //rock
        this.rockEntrance = new Rock(this, 849, 360, 'rock', 0).setOrigin(0,0);
        this.rock = new Rock(this, 234, 310, 'rock', 0).setOrigin(0,0);

        //timers
        this.horizontaltimer = 0;
        this.timer = 0;
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

    update(time, delta) {
        this.explorer.update();
        this.bluebutton.update();
        this.redbutton.update();
        this.rock.update();
        this.rockEntrance.update();
        this.Enemy1.update();
        this.Enemy2.update();
        this.Enemy3.update();
        this.Enemy4.update();
        this.Enemy5.update();

        this.horizontaltimer += delta;
        this.timer += delta;
        
        while (this.horizontaltimer > 100) {
            this.Enemy1.beginShoot();
            this.horizontaltimer -= 100;
        }
        while (this.timer > 1000) {
            this.Enemy2.beginShoot();
            this.Enemy3.beginShoot();
            this.Enemy4.beginShoot();
            this.Enemy5.beginShoot();
            this.timer -= 1000;
        }

        if(game.settings.hit){
            this.sfxStopped.play();
            this.explorer.destroy();
                game.settings = {
                    x: 959, 
                    y: 125,
                    gameover: false,
                    screen: 14,
                    key: false,
                    hit: false
                }
            this.scene.restart();
        }

        if(this.game.settings.gameover == true){
            if(this.explorer.x < 20){
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
        //WALL COLLISION CHECK
        if(this.checkCollision(this.explorer, this.fourthBotWall)){
            this.explorer.y -=5;
        }
        if(this.checkCollision(this.explorer, this.fourthTopWall)){
            this.explorer.y +=5;
        }
        if(this.checkCollision(this.explorer, this.fourthRightWall)){
            this.explorer.x -=5;
        }
        if(this.checkCollision(this.explorer, this.fourthLeftWall)){
            this.explorer.x +=5;
        }
        if(this.checkCollision(this.explorer, this.fourthMidLeftWall)){
            this.explorer.x -=5;
        }
        if(this.checkCollision(this.explorer, this.fourthMidRightWall)){
            this.explorer.x +=5;
        }
        if(this.checkCollision(this.explorer, this.fourthMidBotWall)){
            this.explorer.y +=5;
        }
        if(this.checkCollision(this.explorer, this.sideMidTopWall)){
            this.explorer.y -=5;
        }
        if(this.checkCollision(this.explorer, this.sideMidBotWall)){
            this.explorer.y +=5;
        }
        if(this.checkCollision(this.explorer, this.sideMidLeftWall)){
            this.explorer.x -=5;
        }
        if(this.checkCollision(this.explorer, this.nextArea4)){
            this.explorer.y -=5;
        }
        if(this.checkCollision(this.explorer, this.nextArea4Top)){
            this.explorer.y +=5;
        }

        if(this.checkCollision(this.rock, this.fourthBotWall)){
            this.explorer.y -=5;
            this.rock.y -=5;
        }
        if(this.checkCollision(this.rock, this.fourthTopWall)){
            this.explorer.y +=5;
            this.rock.y +=5;
        }
        if(this.checkCollision(this.rock, this.fourthRightWall)){
            this.rock.x -=5;
            this.explorer.x -=5;
        }
        if(this.checkCollision(this.rock, this.fourthLeftWall)){
            this.explorer.x +=5;
            this.rock.x += 5;
        }
        if(this.checkCollision(this.rock, this.fourthMidLeftWall)){
            this.explorer.x -=5;
            this.rock.x -=5;
        }
        if(this.checkCollision(this.rock, this.fourthMidRightWall)){
            this.explorer.x +=5;
            this.rock.x +=5;
        }
        if(this.checkCollision(this.rock, this.fourthMidBotWall)){
            this.explorer.y +=5;
            this.rock.y +=5;
        }
        if(this.checkCollision(this.rock, this.sideMidTopWall)){
            this.explorer.y -=5;
            this.rock.y -=5;
        }
        if(this.checkCollision(this.rock, this.sideMidBotWall)){
            this.explorer.y +=5;
            this.rock.y +=5;
        }
        if(this.checkCollision(this.rock, this.sideMidLeftWall)){
            this.explorer.x -=5;
            this.rock.x -=5;
        }
        if(this.checkCollision(this.rock, this.nextArea4)){
            this.explorer.y -=5;
            this.rock.y -=5;
        }
        if(this.checkCollision(this.rock, this.nextArea4Top)){
            this.explorer.y +=5;
            this.rock.y +=5;
        }
        
        if(this.checkCollision(this.rockEntrance, this.fourthBotWall)){
            this.explorer.y -=5;
            this.rockEntrance.y -=5;
        }
        if(this.checkCollision(this.rockEntrance, this.fourthTopWall)){
            this.explorer.y +=5;
            this.rockEntrance.y +=5;
        }
        if(this.checkCollision(this.rockEntrance, this.fourthRightWall)){
            this.rockEntrance.x -=5;
            this.explorer.x -=5;
        }
        if(this.checkCollision(this.rockEntrance, this.fourthLeftWall)){
            this.explorer.x +=5;
            this.rockEntrance.x += 5;
        }
        if(this.checkCollision(this.rockEntrance, this.fourthMidLeftWall)){
            this.explorer.x -=5;
            this.rockEntrance.x -=5;
        }
        if(this.checkCollision(this.rockEntrance, this.fourthMidRightWall)){
            this.explorer.x +=5;
            this.rockEntrance.x +=5;
        }
        if(this.checkCollision(this.rockEntrance, this.fourthMidBotWall)){
            this.explorer.y +=5;
            this.rockEntrance.y +=5;
        }
        if(this.checkCollision(this.rockEntrance, this.sideMidTopWall)){
            this.explorer.y -=5;
            this.rockEntrance.y -=5;
        }
        if(this.checkCollision(this.rockEntrance, this.sideMidBotWall)){
            this.explorer.y +=5;
            this.rockEntrance.y +=5;
        }
        if(this.checkCollision(this.rockEntrance, this.sideMidLeftWall)){
            this.explorer.x -=5;
            this.rockEntrance.x -=5;
        }
        if(this.checkCollision(this.rockEntrance, this.nextArea4)){
            this.explorer.y -=5;
            this.rockEntrance.y -=5;
        }
        if(this.checkCollision(this.rockEntrance, this.nextArea4Top)){
            this.explorer.y +=5;
            this.rockEntrance.y +=5;
        }
        //change torch to on
        if(game.settings.key){
            this.nextArea4.setTexture('nextAreaFire');
            this.nextArea4Top.setTexture('nextAreaFire');
        }

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