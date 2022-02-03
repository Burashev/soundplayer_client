import songService from '@/services/songService';
import playlistService from "@/services/playlistService";

export default {
    setCurrentSong({commit, state, dispatch}, {song, playlist}) {
        if (song.id === state.currentSong.id) {
            dispatch('togglePlay');
            return null
        }

        if (state.currentSong.id) {
            state.currentSong.element.pause();
            state.currentSong.element.currentTime = 0;
        }

        const element = new Audio(song.source);
        element.volume = state.volume;

        const currentSong = {
            ...song,
            element,
            currentTimeSeconds: 0,
            paused: true,
            ended: true,
        }

        commit('SET_CURRENT_SONG', currentSong);

        dispatch('setCurrentPlaylist', playlist);
        dispatch('togglePlay');
    },
    setCurrentPlaylist({commit, state}, playlist) {
        // if (playlist.id === state.currentPlaylist.playlistObject.id) return null;
        const currentSongIndex = playlist.songs.findIndex((song) => song.id === state.currentSong.id)

        const currentPlaylist = {
            playlistObject: playlist,
            currentSongIndex
        }

        commit('SET_CURRENT_PLAYLIST', currentPlaylist);
    },
    loadSongs({commit}) {
        songService.getAllSongs().then(data => {
            const songs = data.data;
            commit('SET_SONGS', songs);
        });
    },
    loadPlaylistsOnMain({commit}) {
        playlistService.getPlaylistsOnMain().then(data => {
            const playlists = data.data;
            commit('SET_MAIN_PLAYLISTS', playlists)
        })
    },
    togglePlay({commit, state, dispatch}) {
        if (!state.currentSong.id) return null;

        if (!state.currentSong.paused && !state.currentSong.ended) {
            state.currentSong.element.pause();
            commit('SET_SONG_PAUSE', true);
            return null;
        }

        state.currentSong.element.play()
            .then(() => {
                commit('SET_SONG_PAUSE', false);
                commit('SET_SONG_END', false);
                dispatch('currentTimeCounting');
            });

        state.currentSong.element.onended = () => {
            const songs = state.currentPlaylist.playlistObject.songs;
            const currentIndex = state.currentPlaylist.currentSongIndex;

            if (songs.length - 1 === currentIndex) {
                commit('SET_SONG_PAUSE', true);
                commit('SET_SONG_END', true);
                return null;
            }
            console.log(state.currentPlaylist);
            dispatch('setCurrentSong', {song: songs[currentIndex + 1], playlist: state.currentPlaylist.playlistObject});
        };
    },
    currentTimeCounting({state, commit}) {
        const interval = setInterval(() => {
            if (state.currentSong.ended) clearInterval(interval);
            commit('SET_SONG_CURRENT_TIME_SECONDS', state.currentSong.element.currentTime);
        }, 500)
    },
    setSongTime({state, commit}, time) {
        if (state.currentSong.ended) return null;
        state.currentSong.element.currentTime = time;
        commit('SET_SONG_CURRENT_TIME_SECONDS', time);
    },
    changeVolume({state, commit}, volume) {
        if (state.currentSong.element) state.currentSong.element.volume = volume;
        commit('SET_VOLUME', volume);
    }
}