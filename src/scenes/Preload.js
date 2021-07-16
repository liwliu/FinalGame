/* Class: Preload.js

This class is used for preloading all assets needed for the game to operate

*/

class Preload extends Phaser.Scene{
    constructor() {
        super("preloadScene");
    }

    preload() {

        // Level 1 Square 1
        this.load.image('background1', './assets/img/startingBackground.png');

        // Level 1 Square 2
        this.load.image('background2', './assets/img/secondBackground.png');

        // Level 1 Square 3
        this.load.image('background3', './assets/img/thirdBackground.png');

        // Level 1 Square 4
        this.load.image('background4', './assets/img/fourthBackground.png');

        // Sprites
        this.load.image('playersprite', './assets/img/characterSpritesmall.png');
        this.load.image('keysprite', './assets/img/Key.png');
        this.load.image('checkpoint', './assets/img/checkpoint.png');
        this.load.image('chest', './assets/img/treasureChest.png');
        this.load.image('meleeEnemy', './assets/img/satanCornChip.png');
        this.load.image('enemyProjectile', '/assets/img/enemyProjectile.png');
        this.load.image('rock', '/assets/img/rock.png');
        this.load.spritesheet('blue', '/assets/img/pressButton.png', {frameWidth: 64, frameHeight: 64, startFrame:0, endFrame:1});
        this.load.spritesheet('red', '/assets/img/holdButton.png', {frameWidth: 64, frameHeight: 64, startFrame:0, endFrame:1});
    }

    create() {
        this.scene.start("menuScene");

    }
}