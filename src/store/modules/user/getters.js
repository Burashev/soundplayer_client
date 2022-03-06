export default {
    isAuth(state) {
        return !!state.userObject;
    },
    likedSongPlaylist(state) {
        return state.userObject.likedSongs
    },
    likedSongsIds(state) {
        return state.userObject ? state.userObject.likedSongs.songs.map(song => song.id) : [];
    }
}