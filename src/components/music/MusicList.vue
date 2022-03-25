<template>
  <div class="music-list">
    <music-item v-for="song in songs"
                :key="song.id"
                :song="song"
                :playlist="playlist"
                :is-active-song="isActivePlaylist && song.id === currentSong.id"/>
  </div>
</template>

<script>
import MusicItem from "@/components/music/MusicItem";
import { mapState } from 'vuex';
export default {
  name: "MusicList",
  components: {MusicItem},
  props: {
    songs: {
      type: Array,
      required: true
    },
    playlist: {
      type: Object,
      required: true
    },
    isActivePlaylist: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapState('music', ['currentSong'])
  }
}
</script>

<style lang="scss" scoped>
.music-list {
  display: grid;
  grid-row-gap: 20px;
}
</style>
