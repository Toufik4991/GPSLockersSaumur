let state = {
    step: 0,
    score: 0,
    energy: 100,
    name: "",
    started: false
};

function saveState() {
    localStorage.setItem("saumurQuest", JSON.stringify(state));
}

function loadState() {
    const s = localStorage.getItem("saumurQuest");
    if (s) state = JSON.parse(s);
}

