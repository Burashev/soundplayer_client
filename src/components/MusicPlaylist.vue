<template>
  <div class="music-playlist">
    <h2>{{ playlist.title }}</h2>
    <MusicList :songs="playlist.songs"></MusicList>
  </div>
</template>

<script>
import MusicList from "@/components/MusicList";

export default {
  name: "MusicPlaylist",
  components: {MusicList},
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },

}
</script>

<style scoped>

</style>