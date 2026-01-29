function loadGameForStep(step, container) {
    switch (step) {
        case 0: jeux0(container); break;
        case 1: jeux1(container); break;
        case 2: jeux2(container); break;
        case 3: jeux3(container); break;
        case 4: jeux4(container); break;
        case 5: jeux5(container); break;
        case 6: jeux6(container); break;
        case 7: jeux7(container); break;
        case 8: jeux8(container); break;
        default: showEndScreen();
    }
}

