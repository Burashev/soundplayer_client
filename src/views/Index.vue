<template>
<!--  <MusicList :songs="songs"></MusicList>-->
<PlaylistList :playlists="playlistsOnMain"/>
</template>

<script>
import MusicList from "@/components/MusicList";
import PlaylistList from "@/components/PlaylistList";
import {mapState} from "vuex";

export default {
  name: "Index",
  components: {MusicList, PlaylistList},
  computed: {
    ...mapState('music', ['songs', 'playlistsOnMain']),
  },
  created() {
      // this.$store.dispatch('music/loadSongs');
      this.$store.dispatch('music/loadPlaylistsOnMain');
  }
}
</script>

<style scoped>

</style>