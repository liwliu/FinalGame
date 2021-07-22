class Projectile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, slope){
        super(scene, x, y, slope);
    }

    shoot(x, y, slope) {
        this.body.reset(x, y);
        this.setAngle(Math.atan(slope) * 57.2958);
        this.setActive(true);
        this.setVisible(true);

        if(slope >= 0){
            this.xvel = (300/(1 + slope));
            this.yvel = ((300*slope)/(slope+1));
        }
        else{
            if(this.scene.explorer.x > x && this.scene.explorer.y <= y){
                this.xvel = (300/(1 + -slope));
                this.yvel = -((300*-slope)/(-slope+1));
            }
            else{
                this.xvel = -(300/(1 + -slope));
                this.yvel = ((300*-slope)/(-slope+1));
            }
        }
        //Q1
        if(this.scene.explorer.x > x && this.scene.explorer.y <= y){
                this.setVelocityX(this.xvel);
                this.setVelocityY(this.yvel);
        }
        //Q2
        else if(this.scene.explorer.x <= x && this.scene.explorer.y <= y){
                this.setVelocityX(-this.xvel);
                this.setVelocityY(-this.yvel);
        }
        //Q
        else if(this.scene.explorer.x <= x && this.scene.explorer.y > y){
                this.setVelocityX(this.xvel);
                this.setVelocityY(this.yvel);
        }
        //Q4
        else if(this.scene.explorer.x > x && this.scene.explorer.y > y){
                this.setVelocityX(this.xvel);
                this.setVelocityY(this.yvel);
        }
        console.log(" xv: " + this.xvel + " yv " + this.yvel + " slope: " + slope);
    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);

        if(this.y <= 0 || this.x <= 0 || this.y >= 1000 || this.x >= 1000){
            this.setActive(false);
            this.setVisible(false);
        }
        if(this.checkCollision(this.scene.explorer, this)){
            game.settings.hit = true;
        }
    }

    checkCollision(player, laser) {
        if (player.x < laser.x + laser.width &&
            player.x + player.width > laser.x &&
            player.y < laser.y + laser.height &&
            player.height + player.y > laser.y) {
                console.log("hit");
                return true;
            } else {
                return false;
        }
    }

}