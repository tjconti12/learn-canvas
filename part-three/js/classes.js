// Class related global variables
let levelPlayerSizeX = 80; // Allows you to change size of character depending on the level
let levelPlayerSizeY = 64;
let levelPlayerYoffset = 20; // To correct changes when resizing character

// Variables that referenc the player position for use in challenge.js
let xPosition;
let yPosition;

let levelEnemySizeX = 68;
let levelEnemySizeY = 44;
let levelEnemyYoffset = 20;

// Player class
class Player {
	constructor() {
		this.width = 20;
		this.height = 20;
		this.health = 5;
		this.speed = { x: 0, y: 0 };
		this.position = {
			x: gameWidth - this.width - 100,
			y: gameHeight - this.height - 150,
		};
		this.oldPosition = { x: 0, y: gameHeight - this.height };
		this.leftKeyDown = false;
		this.rightKeyDown = false;
		this.color = 'black';
		this.jumping = false;
		// this.image = Object.assign(new Image, {src: ''});
	}
	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
	moveLeft() {
		this.speed.x -= 0.4;
	}
	moveRight() {
		this.speed.x += 0.4;
	}
	checkLeftKeyDown() {
		if (this.leftKeyDown) {
			this.moveLeft();
		}
	}
	checkRightKeyDown() {
		if (this.rightKeyDown) {
			this.moveRight();
		}
	}
	jump() {
		if (this.speed.y === 0) {
			this.speed.y = -12;
			this.jumping = true;
		}
	}
	update() {
		// updates the position variables for use in challenge.js
		xPosition = this.position.x;
		yPosition = this.position.y;

		// Keeps the character from moving left outside of the map
		if (this.position.x < 5) {
			this.position.x = 5;
			this.speed.x = 0;
		}
		// Keeps the character from moving right outside of the map
		else if (this.position.x > gameWidth - this.width) {
			this.position.x = gameWidth - this.width;
			this.speed.x = 0;
		} // Keeps the character from moving below the map
		if (typeof backgroundCtx !== 'undefined') {
			if (this.position.y > gameHeight - this.height - 5) {
				this.position.y = gameHeight - this.height - 5;
				this.speed.y = 0;	
			}
		} else {
			if (this.position.y > gameHeight - this.height - 50) {
				this.position.y = gameHeight - this.height - 50;
				this.speed.y = 0;
			}
		}
		// Keeps the character from moving above the map
		if (this.position.y < 10) {
			this.position.y = 10;
			this.speed.y = 0;
		}
		// keeps character from gliding on their own
		if (this.speed.x < 0.1 && this.speed.x > -0.1) {
			this.speed.x = 0;
		}
		// Adds delay before updating the old position (after the function runs 50 times)
		if (oldPositionDelay % 50 === 0) {
			this.oldPosition.x = this.position.x;
			this.oldPosition.y = this.position.y;
		}
		oldPositionDelay += 1;
		this.position.x += this.speed.x;
		this.position.y += this.speed.y;
		if (this.speed.y < 10.5 && this.speed.y > -10.5) {
			// Had to add buffer here because collision logic was not allowing speed.y to go to 0
			this.jumping = false;
		}
	}
}

const newPlayer = new Player();

// Enemy Class

class Enemy {
	constructor() {
		this.width = 25;
		this.height = 25;
		this.color = 'red';
		this.speed = { x: 0, y: 0 };
		this.position = { x: 250, y: gameHeight - this.height - 100 };
		this.oldPosition = { x: 0, y: gameHeight - this.height };
		this.moveCounter = 0;
		this.moveDirectionStart = 2;
	}

	move() {
		if (this.moveCounter % 100 < 50) {
			this.position.x -= this.moveDirectionStart;
		} else {
			this.position.x += this.moveDirectionStart;
		}
		this.moveCounter += 1;
		this.oldPosition.y = this.position.y;
		this.oldPosition.x = this.position.y;
		this.position.y += this.speed.y;
	}
}
