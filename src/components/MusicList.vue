<template>
  <div class="music-list">
    <MusicItem></MusicItem>
    <MusicItem></MusicItem>
    <MusicItem></MusicItem>
  </div>
</template>

<script>
import MusicItem from "@/components/MusicItem";
export default {
  name: "MusicList",
  components: {MusicItem}
}
</script>

<style lang="scss" scoped>
.music-list {
  margin-top: 100px;
  display: grid;
  grid-row-gap: 20px;
}
</style>