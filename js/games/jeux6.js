function jeux1(container) {
    container.innerHTML = `
        <h2>📍 Point GPS 7</h2>
        <p>Mini-jeu 6</p>
        <button id="win">Continuer</button>
    `;

    document.getElementById("win").onclick = function () {
        finishMiniGame(10);
    };
}

