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
        
        //enemies
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
        while(this.Enemy1.x >= 770 && this.Enemy1.y >= 750){
            this.Enemy1.x = Math.random() * (907 - 62) + 62;
            this.Enemy1.y = Math.random() * (904 - 59) + 59;
        }
        while(this.Enemy2.x >= 770 && this.Enemy2.y >= 750){
            this.Enemy2.x = Math.random() * (907 - 62) + 62;
            this.Enemy2.y = Math.random() * (904 - 59) + 59;
        }
        while(this.Enemy3.x >= 770 && this.Enemy3.y >= 750){
            this.Enemy3.x = Math.random() * (907 - 62) + 62;
            this.Enemy3.y = Math.random() * (904 - 59) + 59;
        }
        while(this.Enemy4.x >= 770 && this.Enemy4.y >= 750){
            this.Enemy4.x = Math.random() * (907 - 62) + 62;
            this.Enemy4.y = Math.random() * (904 - 59) + 59;
        }
        while(this.Enemy5.x >= 770 && this.Enemy5.y >= 750){
            this.Enemy5.x = Math.random() * (907 - 62) + 62;
            this.Enemy5.y = Math.random() * (904 - 59) + 59;
        }
        while(this.Enemy6.x >= 770 && this.Enemy6.y >= 750){
            this.Enemy6.x = Math.random() * (907 - 62) + 62;
            this.Enemy6.y = Math.random() * (904 - 59) + 59;
        }
        while(this.Enemy7.x >= 770 && this.Enemy7.y >= 750){
            this.Enemy7.x = Math.random() * (907 - 62) + 62;
            this.Enemy7.y = Math.random() * (904 - 59) + 59;
        }
        while(this.Enemy8.x >= 770 && this.Enemy8.y >= 750){
            this.Enemy8.x = Math.random() * (907 - 62) + 62;
            this.Enemy8.y = Math.random() * (904 - 59) + 59;
        }
        while(this.Enemy9.x >= 770 && this.Enemy9.y >= 750){
            this.Enemy9.x = Math.random() * (907 - 62) + 62;
            this.Enemy9.y = Math.random() * (904 - 59) + 59;
        }
        while(this.Enemy10.x >= 770 && this.Enemy10.y >= 750){
            this.Enemy10.x = Math.random() * (907 - 62) + 62;
            this.Enemy10.y = Math.random() * (904 - 59) + 59;
        }

        //next area totems
        this.nextArea2 = this.add.tileSprite(570, 5, 40, 56, 'nextAreaNoFire').setOrigin(0,0);
        this.nextArea2Top = this.add.tileSprite(821, 5, 40, 56, 'nextAreaNoFire').setOrigin(0,0);

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

        //timers
        this.timer1 = 0;
        this.timer2 = 0;
        this.timer3 = 0;


        //set keyboard input
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(time, delta) {
        //do not move this function it is very important that it is at the beginning of update()
        this.key.update();

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
        if(game.settings.hit == true){
            this.explorer.destroy();
            game.settings = {
                x: 1.25,
                y: 134,
                gameover: false,
                screen: 12,
                key: false ,
                hit: false
            }
            this.scene.restart();
        }
        if(this.game.settings.gameover == true && this.explorer.x < 2){ 
            this.explorer.destroy();
            if(game.settings.key == false){
                game.settings = {
                    x: 970,
                    y: this.explorer.y,
                    gameover: false,
                    screen: 11,
                    key: false,
                    hit: false
                }
            }
            else{
                game.settings = {
                    x: 970,
                    y: this.explorer.y,
                    gameover: false,
                    screen: 11,
                    key: true, 
                    hit: false
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
                    key: false,
                    hit: false
                }
            }
            else if(this.explorer.x >= 579){
                 game.settings= {
                     x: 650,
                     y: 955,
                     gameover: false,
                     screen: 13,
                     key: false,
                     hit: false
                 }
            }
            this.scene.start("Level1Square3");
        }
        if(game.settings.key){
            this.nextArea2.setTexture('nextAreaFire');
            this.nextArea2Top.setTexture('nextAreaFire');
        }
        
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