<template>
  <playlist-list :playlists="playlistsOnMain"/>
  <modal-show v-if="openedModal" :modal-name="openedModal"/>
</template>

<script>
import MusicList from "@/components/MusicList";
import PlaylistList from "@/components/PlaylistList";
import {mapState} from "vuex";
import ModalShow from "@/components/modals/ModalShow";

export default {
  name: "Index",
  components: {MusicList, PlaylistList, ModalShow},
  computed: {
    ...mapState('music', ['songs', 'playlistsOnMain']),
    ...mapState('modal', ['openedModal']),
    // ...mapState('modal', ['isOpen'])
  },
  created() {
    // this.$store.dispatch('music/loadSongs');
    this.$store.dispatch('music/loadPlaylistsOnMain');
  }
}
</script>

<style scoped>

</style>