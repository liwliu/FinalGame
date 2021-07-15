class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
    }
 

    update() {
        if(this.x < 0){
            this.x+=.75;
            //return to square 1 from square 2
            if(game.settings.screen == 12 && this.y <= 176 && this.y >= 50){
                game.settings.gameover = true; 
            }
            //go to square 3 
            if(game.settings.screen == 13 && this.y <= 87.25 && this.y >= 43.75){
                game.settings.gameover = true; 
            }
        }
        if(this.y < 5){
            this.y+=.75;
            //go to square 3
            if(game.settings.screen == 12 && this.x <=830   && this.x >= 650){
                game.settings.gameover = true; 
            }
        }

        if(this.x > 970){
            this.x-=.75;
            //go to square 2
            if(game.settings.screen == 11 &&this.y <= 166 && this.y >= 46){
                game.settings.gameover = true; 
            }
        }

        if(this.y > 965){
            this.y-=.75;
            //return to square 2 from square 3
            if(game.settings.screen == 13 && this.x <= 830  && this.x >= 650){
                game.settings.gameover = true; 
            }
        }

        if(keyW.isDown) {
            this.y-=10;
            console.log(this.x, "x");
            console.log(this.y, "y");
        }
        if(keyA.isDown) {
            this.x-=10;
            console.log(this.x, "x");
            console.log(this.y, "y");
        }
        if(keyD.isDown) {
            this.x+=10;
            console.log(this.x, "x");
            console.log(this.y, "y");
        }
        if(keyS.isDown) {
            this.y+=10;
            console.log(this.x, "x");
            console.log(this.y, "y");
        }
    }
}