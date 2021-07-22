class Level1Square1 extends Phaser.Scene {
    constructor() {
        super("Level1Square1");
    }


    create() {
        this.sfxStopped = this.sound.add('sfx_stopped');

        
        //variable to make this square accessible by other objects
        window.Level1Square1 = this;

        //load in background
        this.Background = this.add.tileSprite(0,0, 1000, 1000, 'background1').setOrigin(0,0);
        //load walls
        //ocean
        this.OceanWall = this.add.tileSprite(0,0, 64, 1000, 'ocean').setOrigin(0,0);
        //top wall
        this.TopWall = this.add.tileSprite(0,0,1000,64, 'topWall').setOrigin(0,0);
        //bottom wall
        this.BotWall = this.add.tileSprite(2,934, 960, 64, 'botWall').setOrigin(0,0);
        //right wall
        this.RightWall = this.add.tileSprite(936,225, 64, 768,'rightWall').setOrigin(0,0);
        
        

        //load in explorer
        this.explorer = new Player(this, game.settings.x, game.settings.y, 'playersprite', 0).setOrigin(0,0);

        //assets
        this.checkpoint = this.add.tileSprite(127, 509, 64, 64, 'checkpoint').setOrigin(0,0);
        this.nextArea = this.add.tileSprite(960, 170, 40, 56, 'nextAreaFire').setOrigin(0,0);
        this.nextAreaTop = this.add.tileSprite(960, 30, 40, 56, 'nextAreaFire').setOrigin(0,0);


        this.wKey = this.add.tileSprite(252, 535, 32, 32, 'wKey').setOrigin(0,0);
        this.sKey = this.add.tileSprite(252, 570, 32, 32, 'sKey').setOrigin(0,0);
        this.aKey = this.add.tileSprite(215, 570, 32, 32, 'aKey').setOrigin(0,0);
        this.dKey = this.add.tileSprite(289, 570, 32, 32, 'dKey').setOrigin(0,0);
        

        // firing lasers
        // this.projectileGroup = new ProjectileGroup(this);

        //Enemies
        this.Enemy1 = new Enemy(this, Math.random() * (907 - 62) + 62, Math.random() * (904 - 59) + 59, 'meleeEnemy', 0).setOrigin(0,0); 
        this.Enemy2 = new Enemy(this, Math.random() * (907 - 62) + 62, Math.random() * (904 - 59) + 59, 'meleeEnemy', 0).setOrigin(0,0);         // fire laser
        this.Enemy3 = new Enemy(this, Math.random() * (907 - 62) + 62, Math.random() * (904 - 59) + 59, 'meleeEnemy', 0).setOrigin(0,0); 
        this.Enemy4 = new Enemy(this, Math.random() * (907 - 62) + 62, Math.random() * (904 - 59) + 59, 'meleeEnemy', 0).setOrigin(0,0); 
        this.Enemy5 = new Enemy(this, Math.random() * (907 - 62) + 62, Math.random() * (904 - 59) + 59, 'meleeEnemy', 0).setOrigin(0,0); 
        this.Enemy6 = new Enemy(this, Math.random() * (907 - 62) + 62, Math.random() * (904 - 59) + 59, 'meleeEnemy', 0).setOrigin(0,0); 
        this.Enemy7 = new Enemy(this, Math.random() * (907 - 62) + 62, Math.random() * (904 - 59) + 59, 'meleeEnemy', 0).setOrigin(0,0);         // fire laser
        this.Enemy8 = new Enemy(this, Math.random() * (907 - 62) + 62, Math.random() * (904 - 59) + 59, 'meleeEnemy', 0).setOrigin(0,0);         // fire laser
        this.Enemy9 = new Enemy(this, Math.random() * (907 - 62) + 62, Math.random() * (904 - 59) + 59, 'meleeEnemy', 0).setOrigin(0,0);         // fire laser
        this.Enemy10 = new Enemy(this, Math.random() * (907 - 62) + 62, Math.random() * (904 - 59) + 59, 'meleeEnemy', 0).setOrigin(0,0);         // fire laser
        //this.laser = new Projectile(this, 232, 104, 'enemyProjectile', 0).setOrigin(0,0);

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

        this.timer1 = 0;
        this.timer2 = 0;
        this.timer3 = 0;

        //set keyboard input
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(time, delta) {
        this.timer1 += delta;
        this.timer2 += delta;
        this.timer3 += delta;
        while (this.timer1 > 1000) {
            this.Enemy1.beginShoot();
            this.Enemy2.beginShoot();
            this.Enemy3.beginShoot();
            this.timer1 -= 1000;
        }
        while (this.timer2 > 2000) {
            this.Enemy4.beginShoot();
            this.Enemy5.beginShoot();
            this.Enemy6.beginShoot();
            this.timer2 -= 2000;
        }
        while (this.timer3 > 3000) {
            this.Enemy7.beginShoot();
            this.Enemy8.beginShoot();
            this.Enemy9.beginShoot();
            this.Enemy10.beginShoot();
            this.timer3 -= 3000;
        }
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
        if(this.game.settings.hit == true){
            this.sfxStopped.play();
            this.explorer.destroy();
            game.settings = {
                x: 142,
                y: 559,
                gameover: false,
                screen: 11,
                key: false,
                hit: false
            }
            this.scene.restart();
        }
        //COLLISION WITH WALLS CHECK
        if(this.checkCollision(this.explorer, this.BotWall)){
            this.explorer.y -=5;
        }
        if(this.checkCollision(this.explorer, this.TopWall)){
            this.explorer.y +=5;
        }
        if(this.checkCollision(this.explorer, this.RightWall)){
            this.explorer.x -=5;
        }
        if(this.checkCollision(this.explorer, this.OceanWall)){
            this.explorer.x +=5;
        }
        if(this.checkCollision(this.explorer, this.nextArea)){
            this.explorer.y -=5;
        }
        if(this.checkCollision(this.explorer, this.nextAreaTop)){
            this.explorer.y +=5;
        }

        //if (Phaser.Input.isDown())
        this.explorer.update();
        this.Enemy1.update();
        this.Enemy2.update();
        this.Enemy3.update();
        this.Enemy4.update();
        this.Enemy5.update();
        this.Enemy6.update();
        this.Enemy7.update();
        this.Enemy8.update();
        this.Enemy9.update();
        this.Enemy10.update();
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