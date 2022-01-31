<template>
  <div class="music-playlist">
    <h1 class="music-playlist__title">{{ playlist.title }}</h1>
    <MusicList :songs="playlist.songs" :playlist="playlist"></MusicList>
  </div>
</template>

<script>
import MusicList from "@/components/MusicList";

export default {
  name: "PlaylistItem",
  components: {MusicList},
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },

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