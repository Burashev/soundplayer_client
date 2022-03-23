function timeFormat(seconds) {
    seconds = Math.round(seconds);

    let minutes = seconds >= 60 ? Math.trunc(seconds / 60) : 0;
    seconds = seconds % 60;

    seconds = `${seconds}`.length === 1 ? `0${seconds}` : seconds
    minutes = `${minutes}`.length === 1 ? `0${minutes}` : minutes

    return `${minutes}:${seconds}`
}

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export {timeFormat, shuffle}
