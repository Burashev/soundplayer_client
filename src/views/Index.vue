<template>
  <MusicList :songs="songs"></MusicList>
  <MusicPlaylist :playlist="playlists[0]"></MusicPlaylist>
</template>

<script>
import MusicList from "@/components/MusicList";
import MusicPlaylist from "@/components/MusicPlaylist";
import {mapState} from "vuex";
import songService from '@/services/songService';

export default {
  name: "Index",
  components: {MusicList, MusicPlaylist},
  computed: {
    ...mapState('music', ['songs', 'playlists']),
  },
  created() {
    songService.getAllSongs();
  }
}
</script>

<style scoped>

</style>