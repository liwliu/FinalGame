class Projectile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, slope, horizontal){
        super(scene, x, y, slope, horizontal);
    }

    shoot(x, y, slope, horizontal) {
        this.body.reset(x, y);
        this.setActive(true);
        this.setVisible(true);


        if(game.settings.screen == 13 && ((x == 501 && y == 490) || (x == 387 && y == 110))){
            this.setVelocityX(300)
        }
        else if(game.settings.screen == 14 && ((x == 729 && y == 900))){
            this.setAngle(90);
            this.setVelocityY(-300)
        }
        else{
            this.setAngle(Math.atan(slope) * 57.2958);
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
        if(game.settings.screen == 13){
            if(this.checkCollision(this.scene.rock3, this) || this.checkCollision(this.scene.rock3Entrance, this)){
            this.setActive(false);
            this.setVisible(false);
            }
        }
        if(game.settings.screen == 14){
            if(this.checkCollision(this.scene.rock, this) || this.checkCollision(this.scene.rockEntrance, this)){
            this.setActive(false);
            this.setVisible(false);
            }
        }
    }

    checkCollision(player, laser) {
        if (player.x < laser.x + laser.width &&
            player.x + player.width > laser.x &&
            player.y < laser.y + laser.height &&
            player.height + player.y > laser.y) {
                return true;
            } else {
                return false;
        }
    }

}