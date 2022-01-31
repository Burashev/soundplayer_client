export default {
    SET_CURRENT_SONG(state, currentSong) {
        state.currentSong = currentSong;
    },
    SET_CURRENT_PLAYLIST(state, playlist) {
        state.currentPlaylist = playlist;
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
    },
    SET_SONGS(state, songs) {
        state.songs = songs;
    },
    SET_MAIN_PLAYLISTS(state, playlists) {
        state.main_playlists = playlists
    }
}