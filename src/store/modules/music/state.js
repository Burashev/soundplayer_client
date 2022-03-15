import localStorageService from '@/services/localStorageService';

export default {
    currentSong: {
        durationSeconds: 0,
        currentTimeSeconds: 0,
        paused: true,
        ended: true,
    },
    currentPlaylist: {
        currentSongIndex: 0,
        playlistObject: {},
    },
    playlistsOnMain: [],
    volume: localStorageService.getVolume(),
    previousVolume: 1,
    songs: [],
    currentTimeCountingInterval: null,
    repeatMode: 0 // 0, 1, 2
}