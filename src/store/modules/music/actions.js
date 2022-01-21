export default {
    setSong({commit, state}, source) {
        if (state.songSource === source) {
            return null;
        }
        const song = new Audio(source);
        song.volume = 0.1;
        commit('SET_SONG_ELEMENT', {song, source});
    },
    togglePlay({commit, state, dispatch}) {
        if (!state.songState.paused && !state.songState.ended) {
            state.songElement.pause();
            commit('SET_SONG_STATE', {
                paused: true,
                ended: false
            });
            return null;
        }
        state.songElement.play()
            .then(() => {
                commit('SET_SONG_DURATION_SECONDS', state.songElement.duration);
                commit('SET_SONG_STATE', {
                    paused: false,
                    ended: false
                });
                dispatch('currentTimeCounting');
            });
        state.songElement.addEventListener('ended', () => {
            commit('SET_SONG_STATE', {
                paused: false,
                ended: true
            });
        })
    },
    currentTimeCounting({state, commit}) {
        const interval = setInterval(() => {
            if (state.songState.ended) clearInterval(interval);
            commit('SET_SONG_CURRENT_TIME_SECONDS', state.songElement.currentTime);
        }, 100)
    },
    setSongTime({state, commit}, time) {
        if (state.songState.ended) return null;
        state.songElement.currentTime = time;
    },
    changeVolume({state, commit}, volume) {
        if (state.songElement) state.songElement.volume = volume;
        commit('SET_VOLUME', volume);
    }
}