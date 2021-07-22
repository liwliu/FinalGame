class Level1Square1 extends Phaser.Scene {
    constructor() {
        super("Level1Square1");
    }


    create() {

        
        //variable to make this square accessible by other objects
        window.Level1Square1 = this;

        this.clock = new Clock(this);
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
        this.nextArea = this.add.tileSprite(960, 170, 40, 56, 'nextArea').setOrigin(0,0);
        this.nextAreaTop = this.add.tileSprite(960, 30, 40, 56, 'nextArea').setOrigin(0,0);


        this.wKey = this.add.tileSprite(252, 535, 32, 32, 'wKey').setOrigin(0,0);
        this.sKey = this.add.tileSprite(252, 570, 32, 32, 'sKey').setOrigin(0,0);
        this.aKey = this.add.tileSprite(215, 570, 32, 32, 'aKey').setOrigin(0,0);
        this.dKey = this.add.tileSprite(289, 570, 32, 32, 'dKey').setOrigin(0,0);
        

        // firing lasers
        // this.projectileGroup = new ProjectileGroup(this);

        //temp asset
        this.Enemy1 = new Enemy(this, 232, 104, 'meleeEnemy', 0).setOrigin(0,0); //this.add.tileSprite(232, 104, 32, 32, 'meleeEnemy').setOrigin(0,0);
        this.Enemy2 = new Enemy(this, 232, 104, 'meleeEnemy', 0).setOrigin(0,0); //this.add.tileSprite(232, 104, 32, 32, 'meleeEnemy').setOrigin(0,0);

        // fire laser
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

        //set keyboard input
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
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
        this.Enemy1.update();
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