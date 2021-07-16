class RedButton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
    }

    update() {
        if(this.checkCollision(window.Level1Square4.explorer, this) || this.checkCollision(window.Level1Square4.rock, this)){
            this.setFrame(1);
            window.Level1Square4.reddown = true;
        }else{
            this.setFrame(0);
            window.Level1Square4.reddown = false;
        }
    }

    checkCollision(explorer, button) {
        if (explorer.x < button.x + 64 &&
            explorer.x + explorer.width > button.x &&
            explorer.y < button.y + 32 &&
            explorer.height + explorer.y > button.y) {
                return true;
            } else {
                return false;
            }
    }
}