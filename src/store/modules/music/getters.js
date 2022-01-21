import {timeFormat} from '@/services/utils'

export default {
    songDuration(state) {
        return timeFormat(state.songDurationSeconds)
    },
    songCurrentTime(state) {
        return timeFormat(state.songCurrentTimeSeconds)
    },
    getVolume(state) {
        return state.volume * 100 + '%';
    }
}