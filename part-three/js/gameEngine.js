let gameEngineDecider = true;

const gameRun = () => {
	ctx.clearRect(0, 0, gameWidth, gameHeight);
	draw(ctx);
	friction();
	gravity();
	newPlayer.update();
	checkPosition(newPlayer);
	newPlayer.checkLeftKeyDown();
	newPlayer.checkRightKeyDown();

	if (gameEngineDecider) {
		requestAnimationFrame(() => {
			gameRun();
		});
	}
};

if (typeof draw !== 'undefined') {
	gameRun();
}
