import songService from '@/services/api/songService';
import playlistService from "@/services/api/playlistService";
import localStorageService from '@/services/localStorageService';
import {shuffle} from "@/services/utils";

export default {
    setCurrentSong({commit, state, dispatch}, {song, playlist, repeat = false}) {
        if (song.id === state.currentSong.id && (!playlist || playlist.id === state.currentPlaylist.playlistObject.id) && !repeat) {
            dispatch('togglePlay');
            return null
        }

        if (state.currentSong.id) {
            state.currentSong.element.pause();
            state.currentSong.element.currentTime = 0;
            clearInterval(state.currentTimeCountingInterval);
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
        const currentSongIndex = playlist.songs.findIndex((song) => song.id === state.currentSong.id)
        let playlistToSet = null;

        if (state.currentPlaylist.playlistObject.id === playlist.id) {
            playlistToSet = state.currentPlaylist.playlistObject
        }
        else {
            playlistToSet = JSON.parse(JSON.stringify(playlist))
            if (state.shuffleStatus) playlistToSet.songs = shuffle(playlistToSet.songs)
        }

        const currentPlaylist = {
            playlistObject: playlistToSet,
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
            })
            .catch((error) => {
                this.dispatch('notification/createNotification', {
                    text: error,
                    error: true
                })
            });

        state.currentSong.element.onended = () => {
            const songs = state.currentPlaylist.playlistObject.songs;
            const currentIndex = state.currentPlaylist.currentSongIndex;

            if (state.repeatMode === 2) {
                dispatch('setCurrentSong', {
                    song: songs[currentIndex],
                    playlist: state.currentPlaylist.playlistObject,
                    repeat: true
                });
                return null;
            }

            if (songs.length - 1 === currentIndex) {
                if (state.repeatMode === 1) {
                    dispatch('setCurrentSong', {
                        song: songs[0],
                        playlist: state.currentPlaylist.playlistObject,
                        repeat: true
                    });
                    return null;
                }
                commit('SET_SONG_PAUSE', true);
                commit('SET_SONG_END', true);
                return null;
            }
            dispatch('setCurrentSong', {song: songs[currentIndex + 1], playlist: state.currentPlaylist.playlistObject});
        };
    },
    currentTimeCounting({state, commit}) {
        const interval = setInterval(() => {
            if (state.currentSong.ended || state.currentSong.paused) clearInterval(interval);
            commit('SET_SONG_CURRENT_TIME_SECONDS', state.currentSong.element.currentTime);
        }, 500);
        commit('SET_CURRENT_TIME_COUNTING_INTERVAL', interval);
    },
    setSongTime({state, commit}, time) {
        if (state.currentSong.ended) return null;
        state.currentSong.element.currentTime = time;
        commit('SET_SONG_CURRENT_TIME_SECONDS', time);
    },
    changeVolume({state, commit}, {volume = 1, previous = false}) {
        if (previous) {
            volume = state.previousVolume;
        }
        if (!volume) state.previousVolume = state.volume;
        if (state.currentSong.element) state.currentSong.element.volume = volume;
        localStorageService.setVolume(volume);
        commit('SET_VOLUME', volume);
    },
    changeQueueSong({state, commit, dispatch}, previous) {
        const playlist = state.currentPlaylist;
        const songs = playlist.playlistObject.songs;
        const currentIndex = playlist.currentSongIndex;

        if (!playlist.playlistObject.songs) return null;

        if (previous) {
            if (currentIndex - 1 < 0 || state.currentSong.currentTimeSeconds > 10) {
                dispatch('setSongTime', 0);
                return null;
            }
            dispatch('setCurrentSong', {song: songs[currentIndex - 1], playlist: playlist.playlistObject});
            return null;
        }

        if (songs.length - 1 === currentIndex) {
            if (songs.length === 1) {
                dispatch('setSongTime', state.currentSong.durationSeconds);
                return null;
            }
            dispatch('setCurrentSong', {song: songs[0], playlist: playlist.playlistObject});
            return null;
        }
        dispatch('setCurrentSong', {song: songs[currentIndex + 1], playlist: playlist.playlistObject});
    },
    changeRepeatMode({commit}, repeatMode) {
        repeatMode++;
        if (repeatMode > 2) repeatMode = 0;
        commit('SET_REPEAT_MODE', repeatMode);
    },
    toggleShuffleStatus({commit}) {
        commit('SET_SHUFFLE_STATUS')
    }
}
