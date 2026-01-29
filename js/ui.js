function finishMiniGame(points) {
    state.score += points;
    state.energy = 100;
    saveState();

    closeGameScreen();
}

