function timeFormat(seconds) {
    seconds = Math.round(seconds);

    let minutes = seconds >= 60 ? Math.trunc(seconds / 60) : 0;
    seconds = seconds % 60;

    seconds = `${seconds}`.length === 1 ? `0${seconds}` : seconds
    minutes = `${minutes}`.length === 1 ? `0${minutes}` : minutes

    return `${minutes}:${seconds}`
}

export {timeFormat}