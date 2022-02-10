<template>
  <playlist-list :playlists="playlistsOnMain"/>
  <modal-auth v-if="isOpen"/>
</template>

<script>
import MusicList from "@/components/MusicList";
import PlaylistList from "@/components/PlaylistList";
import {mapState} from "vuex";
import ModalAuth from "@/components/ui/ModalAuth";

export default {
  name: "Index",
  components: {MusicList, PlaylistList, ModalAuth},
  computed: {
    ...mapState('music', ['songs', 'playlistsOnMain']),
    ...mapState('modal', ['isOpen'])
  },
  created() {
    // this.$store.dispatch('music/loadSongs');
    this.$store.dispatch('music/loadPlaylistsOnMain');
  }
}
</script>

<style scoped>

</style>