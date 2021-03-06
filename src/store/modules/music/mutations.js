export default {
    SET_CURRENT_SONG(state, currentSong) {
        state.currentSong = currentSong;
    },
    SET_CURRENT_PLAYLIST(state, playlist) {
        state.currentPlaylist = playlist;
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
    },
    SET_SONGS(state, songs) {
        state.songs = songs;
    },
    SET_MAIN_PLAYLISTS(state, playlists) {
        state.playlistsOnMain = playlists
    },
    SET_CURRENT_TIME_COUNTING_INTERVAL(state, interval) {
        state.currentTimeCountingInterval = interval;
    },
    SET_REPEAT_MODE(state, mode) {
        state.repeatMode = mode;
    },
    SET_SHUFFLE_STATUS(state) {
        state.shuffleStatus = !state.shuffleStatus;
    }
}
