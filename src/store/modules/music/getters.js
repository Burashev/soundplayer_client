import {timeFormat} from '@/services/utils'

export default {
    songDuration(state) {
        return timeFormat(state.currentSong.durationSeconds)
    },
    songCurrentTime(state) {
        return timeFormat(state.currentSong.currentTimeSeconds)
    },
    getVolume(state) {
        return state.volume * 100 + '%';
    },
    songPercent(state) {
        return (state.currentSong.durationSeconds ? state.currentSong.currentTimeSeconds / state.currentSong.durationSeconds * 100 : 0) + '%';
    }
}