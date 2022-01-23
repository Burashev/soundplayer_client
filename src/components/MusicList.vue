<template>
  <div class="music-list">
    <MusicItem v-for="song in songs" :key="song.id" :song="song"></MusicItem>
  </div>
</template>

<script>
import MusicItem from "@/components/MusicItem";
import { mapState } from 'vuex';
export default {
  name: "MusicList",
  components: {MusicItem},
  computed: {
    ...mapState('music', ['songs'])
  }
}
</script>

<style lang="scss" scoped>
.music-list {
  margin-top: 100px;
  display: grid;
  grid-row-gap: 20px;
}
</style>