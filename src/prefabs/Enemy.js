class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.isFiring = false;
        this.angle = 0;
        this.projectileGroup = new ProjectileGroup(this.scene);
        this.seconds_passed = 0;

    }

    update() {
        // check for collission if it spawns with the player in every level
        if(this.checkCollision(this.scene.explorer, this)){
            game.settings.hit = true;
        }
    }
        

    beginShoot(){
        if ((this.checkProximity(this.scene.explorer, this))){
           this.projectileGroup.fireProjectile(this.x, this.y, this.getSlope(this.scene.explorer, this));
        }
    }

    // 

    checkProximity(player, enemy) {
        let totalX = player.x - enemy.x;
        let totalY = player.y - enemy.y;
        let distance = Math.sqrt(totalX * totalX + totalY * totalY);
        if (distance <= 353){
            return true;
        } else {
            return false;
        }
    }

    checkCollision(player, enemy) {
        if (player.x < enemy.x + enemy.width &&
            player.x + player.width > enemy.x &&
            player.y < enemy.y + enemy.height &&
            player.height + player.y > enemy.y) {
                return true;
            } else {
                return false;
        }
    }

    getSlope(player, enemy){
        return (enemy.y - player.y) / (enemy.x - player.x);
    }
}