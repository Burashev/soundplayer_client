<template>
  <playlist-item v-for="playlist in playlists" :playlist="playlist" :key="playlist.id"/>
</template>

<script>
import PlaylistItem from "@/components/playlist/PlaylistItem";

export default {
  name: "PlaylistList",
  components: {PlaylistItem},
  props: {
    playlists: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
