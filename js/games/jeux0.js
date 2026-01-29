function jeux0(container) {
    container.innerHTML = `
        <h2>📍 Point GPS 1</h2>
        <p>Mini-jeu 0</p>
        <button id="win">Valider le point</button>
    `;

    document.getElementById("win").onclick = function () {
        finishMiniGame(10);
    };
}

