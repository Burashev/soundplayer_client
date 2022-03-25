<template>
  <playlist-item :playlist="likedSongPlaylist"/>
</template>

<script>
import {mapGetters} from "vuex";
import PlaylistItem from "@/components/playlist/PlaylistItem";

export default {
  name: "Library",
  components: {PlaylistItem},
  computed: {
    ...mapGetters('user', ['likedSongPlaylist'])
  }
}
</script>

<style scoped>

</style>
