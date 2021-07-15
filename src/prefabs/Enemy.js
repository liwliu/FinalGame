class Enemy extends Phaser.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = game.settings.speed;
    }

    update() {

    }

    reset() {

    }

    checkCollision(player, enemy) {
        if (player.x < enemy.x + enemy.width &&
            player.x + enemy.width > player.x &&
            player.y < enemy.y + enemy.height &&
            player.height + player.y > enemy.y) {
                return true;
            } else {
                return false;
            }
    }
}