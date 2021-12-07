
const width = typeof canvas !== 'undefined' ? canvas.width : 900;
const height = typeof canvas !== 'undefined' ? canvas.height : 504;

const backgroundImg = document.querySelector('.map-background');

// Global variables
const gameHeight = height;
const gameWidth = width;
let tileSize = 16;
let tileOutputSize = 3;

let updatedTileSize = tileSize * tileOutputSize;

const gameLevels = [];
let currentLevel = 0;

let oldPositionDelay = 0; // Adding a delay to updating old position to decrease margin of error

// let collisionMap = []; // Needed to declare this before gameRun function in loading screen
// let collsionMapCols = 30;
// let collisionMapRows = 16;

// Background Images
let canvasBackground = new Image();
canvasBackground.src = '../images/sky1.png';

// Friction
const friction = () => {
	if (newPlayer.speed.x > 0) {
		newPlayer.speed.x -= 0.3;
		if (newPlayer.speed.x < 0) {
			newPlayer.speed.x = 0;
		}
	} else if (newPlayer.speed.x < 0) {
		newPlayer.speed.x += 0.3;
		if (newPlayer.speed.x > 0) {
			newPlayer.speed.x = 0;
		}
	}
};

// Gravity
const gravity = () => {
	if (newPlayer.speed.y < 4) {
		newPlayer.speed.y += 1;
	} else {
		newPlayer.speed.y = 4;
	}
};

const win = () => {
	gameEngineDecider = false;
};
