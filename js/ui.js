function finishMiniGame(points) {
    state.score += points;
    state.energy = 100;
    state.step++;
    saveState();

    const container = document.getElementById("game");
    loadGameForStep(state.step, container);
}
