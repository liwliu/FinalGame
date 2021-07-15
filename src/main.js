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
    width: 500,
    height: 500,
    scene: [Menu, Level1Square1, Level1Square2, Level1Square3, Level1Square4]
}

let game = new Phaser.Game(config);

// Controls and other key bindings
let keyW, keyA, keyS, keyD, keySPACE;

// Variables to keep track of during the game
let totalDeaths = 0;
