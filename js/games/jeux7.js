function jeux1(container) {
    container.innerHTML = `
        <h2>📍 Point GPS 8</h2>
        <p>Mini-jeu 7</p>
        <button id="win">Continuer</button>
    `;

    document.getElementById("win").onclick = function () {
        finishMiniGame(10);
    };
}

