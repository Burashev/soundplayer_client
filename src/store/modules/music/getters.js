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
    },
    speakerButtonStatus(state) {
        const statusesCount = 3;
        const volumeTotal = 1;
        if (state.volume === 0) return 1
        if (state.volume <= volumeTotal / statusesCount) return 2
        if (state.volume <= (volumeTotal + 1) / statusesCount) return 3
        if (state.volume <= 1) return 4
    }
}