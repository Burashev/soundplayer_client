<template>
  <div class="music-playlist">
    <h1 class="music-playlist__title">{{ playlist.title }}</h1>
    <music-list :songs="playlist.songs" :playlist="playlist" :is-active-playlist="isActivePlaylist"/>
  </div>
</template>

<script>
import MusicList from "@/components/music/MusicList";
import {mapState} from "vuex";

export default {
  name: "PlaylistItem",
  components: {MusicList},
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('music', ["currentPlaylist"]),
    isActivePlaylist() {
      if (!this.currentPlaylist) return false;
      return this.currentPlaylist.playlistObject.id === this.playlist.id
    }
  }
}
</script>

<style lang="scss" scoped>
.music-playlist {
  &__title {
    color: white;
    letter-spacing: 0.01em;
  }
}
</style>
