class Key extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        //audio
        this.sfxUnlocked = scene.sound.add('sfx_unlocked');
        this.sfxPickup = scene.sound.add('sfx_pickup');
    }

    update() {
        if(game.settings.screen == 12){
            if(this.checkCollision(window.Level1Square2.explorer, this)){
                //this.sfxPickup.play();
                this.sfxUnlocked.play();
                game.settings.key = true;
                this.x = 1300;
                this.y = 1300;
            }
        }
        if(game.settings.screen == 13){
            if(this.checkCollision(window.Level1Square3.explorer, this)){
                //this.sfxPickup.play();
                this.sfxUnlocked.play();
                game.settings.key = true;
                this.x = 1300;
                this.y = 1300;
            }

        }
    }
    checkCollision(explorer, key) {
        if (explorer.x < key.x + key.width &&
            explorer.x + explorer.width > key.x &&
            explorer.y < key.y + key.height &&
            explorer.height + explorer.y > key.y) {
                return true;
            } else {
                return false;
            }
    }
}