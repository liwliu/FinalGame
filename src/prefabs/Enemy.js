class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.isFiring = false;
        this.angle = 0;

    }

    update() {

        this.angle += 2;

        // check for collission if it spawns with the player in every level
        if(this.checkCollision(window.Level1Square1.explorer, this)){
            totalDeaths++
            console.log("total deaths: " + totalDeaths);
        }
        
        if (this.checkProximity(window.Level1Square1.explorer, this)){
            this.shoot();
        }

        // Close to enemy and then it shoots

    }

    // 

    checkProximity(player, enemy) {
        let totalX = player.x - enemy.x;
        let totalY = player.y - enemy.y;
        let distance = Math.sqrt(totalX * totalX + totalY * totalY);
        if (distance <= 15){
            console.log("close");
            return true;
        } else {
            return false;
        }
    }

    // shoot towards the player
    shoot() {
        // spawn bullet

        // move bullet towards player direction
        // only in direction of fired

        // sue Math.angle


    }

    checkCollision(player, enemy) {
        if (player.x < enemy.x + enemy.width &&
            player.x + enemy.width > player.x &&
            player.y < enemy.y + enemy.height &&
            player.height + player.y > enemy.y) {
                console.log("death");
                return true;
            } else {
                return false;
        }
    }
}