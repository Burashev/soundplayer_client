<template>
  <div class="music-list">
    <MusicItem v-for="song in songs" :key="song.id" :song="song" :playlist="playlist"></MusicItem>
  </div>
</template>

<script>
import MusicItem from "@/components/MusicItem";
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
    }
  }
}
</script>

<style lang="scss" scoped>
.music-list {
  display: grid;
  grid-row-gap: 20px;
}
</style>