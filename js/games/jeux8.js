function jeux1(container) {
    container.innerHTML = `
        <h2>📍 Point GPS 9</h2>
        <p>Mini-jeu 8</p>
        <button id="win">Continuer</button>
    `;

    document.getElementById("win").onclick = function () {
        finishMiniGame(10);
    };
}

