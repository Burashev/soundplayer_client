export default {
    SET_CURRENT_SONG(state, currentSong) {
        state.currentSong = currentSong;
    },
    SET_SONG_DURATION_SECONDS(state, time) {
        state.currentSong.durationSeconds = time;
    },
    SET_SONG_PAUSE(state, isPause) {
        state.currentSong.paused = isPause
    },
    SET_SONG_END(state, isEnd) {
        state.currentSong.ended = isEnd
    },
    SET_SONG_CURRENT_TIME_SECONDS(state, time) {
        state.currentSong.currentTimeSeconds = time;
    },
    SET_VOLUME(state, volume) {
        state.volume = volume;
    }
}