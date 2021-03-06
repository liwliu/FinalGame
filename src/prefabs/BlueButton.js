class BlueButton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.sfxButton = scene.sound.add('sfx_stopped');
    }

    update() {
        if(this.checkCollision(window.Level1Square4.explorer, this)){
            this.setFrame(1);
            
            window.Level1Square4.bluedown = true;
            
        }
    }

    checkCollision(explorer, button) {
        if (explorer.x < button.x + 32 &&
            explorer.x + explorer.width > button.x &&
            explorer.y < button.y + 16 &&
            explorer.height + explorer.y > button.y) {
                return true;
            } else {
                return false;
            }
    }
}