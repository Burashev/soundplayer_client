export default {
    SET_SONG_ELEMENT(state, {song, source}) {
        state.songElement = song;
        state.songSource = source;
    },
    SET_SONG_DURATION_SECONDS(state, time) {
        state.songDurationSeconds = time;
    },
    SET_SONG_STATE(state, songState) {
        state.songState = songState
    },
    SET_SONG_CURRENT_TIME_SECONDS(state, time) {
        state.songCurrentTimeSeconds = time;
    },
}