class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load assets here
        //menu UI
        this.load.spritesheet('ship', './assets/img/Shipforsomething.png',{frameWidth: 500, frameHeight: 500, startFrame:0, endFrame:5});
        this.load.image('text', './assets/img/menuUI.png');
    }

    create() {
        //menu UI
        this.textUI = this.add.tileSprite(0,0, 500, 500, 'text').setOrigin(0,0);
        this.anims.create({key:'sailBoat', frames: this.anims.generateFrameNumbers('ship', {start:0, end:5, first:0}), frameRate:3, repeat:-1});        
        this.sailShip = this.add.sprite(0,0, 'sailBoat').setOrigin(0,0);
        this.sailShip.anims.play('sailBoat');

        
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          game.settings = {
            x: 142,
            y: 559,
            gameover: false,
            screen: 11,
            key: false,
            hit: false
          }
          this.scene.start("Level1Square1");    
        }
      }
}