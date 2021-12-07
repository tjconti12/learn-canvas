// Controls

document.addEventListener('keydown', (event) => {
	// event.keyCode
	// Left arrow: 37
	// Right arrow: 39
	// Up arrow: 38
	// Spacebar: 32
	if (event.keyCode === 37) {
		newPlayer.leftKeyDown = true;
	} else if (event.keyCode === 39) {
		newPlayer.rightKeyDown = true;
	} else if (event.keyCode === 32) {
		newPlayer.jump();
	}
});

document.addEventListener('keyup', (event) => {
	if (event.keyCode === 37) {
		newPlayer.leftKeyDown = false;
	} else if (event.keyCode === 39) {
		newPlayer.rightKeyDown = false;
	}
});
