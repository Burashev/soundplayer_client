import songService from '@/services/songService';
import playlistService from "@/services/playlistService";

export default {
    setCurrentSong({commit, state}, song) {
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
        if (!state.currentSong.id) return null

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

        state.currentSong.element.addEventListener('ended', () => {
            commit('SET_SONG_END', true);
        })
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