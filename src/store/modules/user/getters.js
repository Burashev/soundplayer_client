export default {
    isAuth(state) {
        return !!state.userObject;
    },
    likedSongPlaylist(state) {
        return state.userObject.likedSongs
    }
}