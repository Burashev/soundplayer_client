<template>
  <MusicList :songs="songs"></MusicList>
  <MusicPlaylist :playlist="playlists[0]"></MusicPlaylist>
</template>

<script>
import MusicList from "@/components/MusicList";
import MusicPlaylist from "@/components/MusicPlaylist";
import {mapState} from "vuex";

export default {
  name: "Index",
  components: {MusicList, MusicPlaylist},
  computed: {
    ...mapState('music', ['songs', 'playlists']),
  },
  created() {
      this.$store.dispatch('music/loadSongs');
  }
}
</script>

<style scoped>

</style>