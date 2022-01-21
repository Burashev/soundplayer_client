import {createStore} from 'vuex'
import music from './modules/music';



export default createStore({
    // state: {
    //     songSource: null,
    //     songElement: null,
    //     songState: {
    //         paused: true,
    //         ended: true,
    //     },
    //     songDurationSeconds: 0,
    //     songCurrentTimeSeconds: 0,
    // },
    // mutations: {
    //     SET_SONG_ELEMENT(state, {song, source}) {
    //         state.songElement = song;
    //         state.songSource = source;
    //     },
    //     SET_SONG_DURATION_SECONDS(state, time) {
    //         state.songDurationSeconds = time;
    //     },
    //     SET_SONG_STATE(state, songState) {
    //         state.songState = songState
    //     },
    //     SET_SONG_CURRENT_TIME_SECONDS(state, time) {
    //         state.songCurrentTimeSeconds = time;
    //     },
    // },
    // actions: {
    //     setSong({commit, state}, source) {
    //         if (state.songSource === source) {
    //             return null;
    //         }
    //         const song = new Audio(source);
    //         commit('SET_SONG_ELEMENT', {song, source});
    //     },
    //     togglePlay({commit, state, dispatch}) {
    //         if (!state.songState.paused && !state.songState.ended) {
    //             state.songElement.pause();
    //             commit('SET_SONG_STATE', {
    //                 paused: true,
    //                 ended: false
    //             });
    //             return null;
    //         }
    //         state.songElement.play()
    //             .then(() => {
    //                 commit('SET_SONG_DURATION_SECONDS', state.songElement.duration);
    //                 commit('SET_SONG_STATE', {
    //                     paused: false,
    //                     ended: false
    //                 });
    //                 dispatch('currentTimeCounting');
    //             });
    //         state.songElement.addEventListener('ended', () => {
    //             commit('SET_SONG_STATE', {
    //                 paused: false,
    //                 ended: true
    //             });
    //         })
    //     },
    //     currentTimeCounting({state, commit}) {
    //         const interval = setInterval(() => {
    //             if (state.songState.ended) clearInterval(interval);
    //             commit('SET_SONG_CURRENT_TIME_SECONDS', state.songElement.currentTime);
    //         }, 300)
    //     },
    //     setSongTime({state, commit}, time) {
    //         if (state.songState.ended) return null;
    //         state.songElement.currentTime = time;
    //     }
    // },
    // getters: {
    //     songDuration(state) {
    //         return timeFormat(state.songDurationSeconds)
    //     },
    //     songCurrentTime(state) {
    //         return timeFormat(state.songCurrentTimeSeconds)
    //     }
    // },
    modules: {music}
})
