/* Final Game Project

Created by:
- Warren Liu
- John Sanli
- Christopher Lee

Theme: Lost and Found

Creative Tilt:
- Our game is an idea of a dungeon crawler where the lost item is a
character that the player controls. The player is able to move
around a map and interact with certain objects in order 

*/

// Game configuration
let config = {
    typer: Phaser.Auto,
    width: 700,
    height: 700,
    scene: [Preload, Menu, Play, GameOver]
}

let game = new Phaser.Game(config);

// Controls and other key bindings
let keyW, keyA, keyS, keyD;
let keySpace;

// Variables to keep track of during the game
let totalDeaths = 0;
