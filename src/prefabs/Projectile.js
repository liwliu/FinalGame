class Projectile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, slope){
        super(scene, x, y, slope);
    }

    shoot(x, y, slope) {
        this.body.reset(x, y);
            //this.scene.clock = this.scene.time.delayedCall(3000 , () => {
        this.setAngle(Math.atan(slope) * 57.2958);
        this.setActive(true);
        this.setVisible(true);

        if(this.scene.explorer.x > x){
            this.setVelocityY(100 * slope);
            this.setVelocityX(100);
        }
        else{
            this.setVelocityY(-100 * slope);
            this.setVelocityX(-100);
        }
            //}, null, this);
    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);

        if(this.y <= 0 || this.x <= 0 || this.y >= 500 || this.x >= 500){
            this.setActive(false);
            this.setVisible(false);
        }
    }

    checkCollision(player, laser) {
        if (player.x < laser.x + laser.width &&
            player.x + laser.width > player.x &&
            player.y < laser.y + laser.height &&
            player.height + player.y > laser.y) {
                console.log("hit");
                return true;
            } else {
                return false;
        }
    }

}