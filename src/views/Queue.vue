<template>
  <div class="queue-section">
    <h1 class="queue-section__title">Songs Queue</h1>
    <music-list
        v-if="currentPlaylist.playlistObject.songs"
        :playlist="currentPlaylist.playlistObject"
        :is-active-playlist="true"
        :songs="songs"/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import MusicList from "@/components/music/MusicList";

export default {
  name: "Queue",
  components: {MusicList},
  computed: {
    ...mapState('music', ['currentPlaylist']),
    songs() {
      return this.currentPlaylist.playlistObject.songs.slice(this.currentPlaylist.currentSongIndex,)
    }
  }
}
</script>

<style lang="scss" scoped>
.queue-section {
  &__title {
    color: white;
  }
}
</style>
