class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load assets here
    }

    create() {
       

        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '40px',
            //backgroundColor: '#D3D3DE',
            color: '#3CD070',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //menu background
        //this.newMenu - this.add.tileSprite(0,0, 640, 480, 'menuBackground').setOrigin(0,0);
        
        this.add.text(250, 220, 'TEMPORARY START SCREEN', menuConfig).setOrigin(0.5);
        this.add.text(250, 250, 'USE SPACE TO START', menuConfig).setOrigin(0.5);
        
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          game.settings = {
            x: 142,
            y: 559,
            gameover: false,
            screen: 11,
            key: false
          }
          this.scene.start("Level1Square1");    
        }
      }
}