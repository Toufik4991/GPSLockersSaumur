function jeux1(container) {
    container.innerHTML = `
        <h2>📍 Point GPS 2</h2>
        <p>Mini-jeu 1</p>
        <button id="win">Continuer</button>
    `;

    document.getElementById("win").onclick = function () {
        finishMiniGame(10);
    };
}

