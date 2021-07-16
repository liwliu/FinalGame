class Projectile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame, 'projectile');
    }

    shoot(x, y) {
        this.body.reset(x, y);
        this.setActive(true);
        this.setVisible(true);

        this.setVelocityY(100);
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