/* Class: Preload.js
    This class is used for preloading all assets needed for the game to operate
*/

class Preload extends Phaser.Scene{
    constructor() {
        super("preloadScene");
    }

    preload() {
        //audio
        this.load.audio('sfx_locked', './assets/audio/locked.wav');
        this.load.audio('sfx_pickup', './assets/audio/pickup.wav');
        this.load.audio('sfx_stopped', './assets/audio/stopped.wav');
        this.load.audio('sfx_unlocked', './assets/audio/unlocked.wav');

        // Level 1 Square 1
        this.load.image('background1', './assets/img/startingBackground.png');
        this.load.image('topWall', './assets/img/square1TopWall.png');
        this.load.image('botWall', './assets/img/square1BottomWall.png');        
        this.load.image('rightWall', './assets/img/square1RightWall.png');
        this.load.image('aKey', './assets/img/aKey.png');
        this.load.image('sKey', './assets/img/sKey.png');
        this.load.image('wKey', './assets/img/wKey.png');
        this.load.image('dKey', './assets/img/dKey.png');
        this.load.image('ocean', './assets/img/oceanWall.png');

        // Level 1 Square 2
        this.load.image('background2', './assets/img/secondBackground.png');
        this.load.image('topWall2', './assets/img/wallSecondAreaTop.png');
        this.load.image('botWall2', './assets/img/wallSecondAreaBot.png');
        this.load.image('rightWall2', './assets/img/wallSecondAreaRight.png');
        this.load.image('leftWall2', './assets/img/wallSecondAreaLeft.png');

        // Level 1 Square 3
        this.load.image('background3', './assets/img/thirdBackground.png');
        this.load.image('botWall3', './assets/img/thirdAreaWalls/thirdAreaWallBot.png');
        this.load.image('topWall3', './assets/img/thirdAreaWalls/thirdAreaWallTop.png');
        this.load.image('rightWall3', './assets/img/thirdAreaWalls/thirdAreaWallRight.png');
        this.load.image('midWall3', './assets/img/thirdAreaWalls/thirdAreaWallMiddle.png');
        this.load.image('leftWall3', './assets/img/thirdAreaWalls/thirdAreaWallLeft.png');
        this.load.image('midRightWall3', './assets/img/thirdAreaWalls/thirdAreaWallsMiddleRight.png');
        this.load.image('midLeftWall3', './assets/img/thirdAreaWalls/thirdAreaWallsMiddleLeft.png');
        this.load.image('midTopWall3', './assets/img/thirdAreaWalls/thirdAreaWallsMiddleTop.png');
        this.load.image('midBotWall3', './assets/img/thirdAreaWalls/thirdAreaWallsMiddleBot.png');
        
        

        // Level 1 Square 4
        this.load.image('background4', './assets/img/fourthBackground.png');
        this.load.image('botWall4', './assets/img/fourthAreaWalls/area4WallBot.png');
        this.load.image('topWall4', './assets/img/fourthAreaWalls/area4WallsTop.png');
        this.load.image('leftWall4', './assets/img/fourthAreaWalls/area4WallLeft.png');
        this.load.image('rightWall4', './assets/img/fourthAreaWalls/area4WallsRight.png');
        this.load.image('midWall4', './assets/img/fourthAreaWalls/area4WallMid.png');
        this.load.image('sideMidWall4', './assets/img/fourthAreaWalls/area4WallsideMid.png');
        this.load.image('midLeftWall4', './assets/img/fourthAreaWalls/area4WallMidLeft.png');
        this.load.image('midRightWall4', './assets/img/fourthAreaWalls/area4WallMidRight.png');
        this.load.image('midBotWall4', './assets/img/fourthAreaWalls/area4WallMidBot.png');
        this.load.image('sideMidTopWall4','./assets/img/fourthAreaWalls/area4WallsideMidTop.png');
        this.load.image('sideMidLeftWall4','./assets/img/fourthAreaWalls/area4WallsideMidLeft.png');


        // Sprites
        this.load.image('playersprite', './assets/img/characterSpritesmall.png');
        this.load.image('keysprite', './assets/img/Key.png');
        this.load.image('checkpoint', './assets/img/checkpoint.png');
        //this.load.image('chest', './assets/img/treasureChest.png');
        this.load.image('meleeEnemy', './assets/img/satanCornChip.png');
        this.load.spritesheet('projectile', './assets/img/enemyProjectile.png', {frameWidth: 20, frameHeight: 20, startFrame: 0, endFrame: 4});
        this.load.image('rock', './assets/img/rock.png');
        this.load.image('nextAreaFire', './assets/img/nextArea.png');
        this.load.image('nextAreaNoFire', './assets/img/nextAreaNoFire.png');
        this.load.spritesheet('blue', './assets/img/pressButton.png', {frameWidth: 64, frameHeight: 64, startFrame:0, endFrame:1});
        this.load.spritesheet('red', './assets/img/holdButton.png', {frameWidth: 64, frameHeight: 64, startFrame:0, endFrame:1});
    }

    create() {
        this.scene.start("menuScene");

    }
}