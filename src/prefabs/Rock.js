class Rock extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
    }

    update() {
        if(this.checkCollision(window.Level1Square4.explorer, this)){
            if(keyW.isDown) {
                this.y-=5;
                if(this.y < 5){
                    this.y+=5;
                    window.Level1Square4.explorer.y+= 5;
                }
            }
            if(keyA.isDown) {
                this.x-=5;
                if(this.x < 0){
                    this.x+=5;
                    window.Level1Square4.explorer.x+= 5;
                }
            }
            if(keyD.isDown) {
                this.x+=5;
                if(this.x > 970){
                    this.x-=5;
                    window.Level1Square4.explorer.x-= 5;
                }
            }
            if(keyS.isDown) {
                this.y+=5;
                if(this.y > 965){
                    this.y-=5;
                    window.Level1Square4.explorer.y-= 5;
                }
            }
        }
    }

    checkCollision(explorer, button) {
        if (explorer.x < button.x + 32 &&
            explorer.x + explorer.width > button.x &&
            explorer.y < button.y + 32 &&
            explorer.height + explorer.y > button.y) {
                return true;
            } else {
                return false;
            }
    }
}