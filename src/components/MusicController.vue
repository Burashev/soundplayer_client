<template>
  <div class="music-controller">
    <div class="music-controller__range" @click="progressClick">

    </div>
    <div class="music-controller__lower-block">
      <div class="music-controller__buttons">
        <PlayButton :color="arrowColor" rotate="90" :paused="songState.paused || songState.ended"></PlayButton>
      </div>
      <span class="music-controller__duration">{{ songCurrentTime }} / {{ songDuration }}</span>
    </div>
  </div>
</template>

<script>
import PlayButton from "@/components/ui/PlayButton";
import {mapState, mapGetters} from 'vuex'

export default {
  name: "MusicController",
  data() {
    return {
      arrowColor: '#ffffff',

    }
  },
  components: {PlayButton},
  computed: {
    ...mapState("music", ["songState", "songCurrentTimeSeconds", "songDurationSeconds"]),
    ...mapGetters("music", ["songDuration", "songCurrentTime"]),
    songPercent() {
      return (this.songDurationSeconds ? this.songCurrentTimeSeconds / this.songDurationSeconds * 100 : 0) + '%';
    }
  },
  methods: {
    progressClick(e) {
      const time = this.songDurationSeconds * (e.clientX / e.target.offsetWidth);
      this.$store.dispatch('music/setSongTime', time);
    }
  }

}
</script>

<style lang="scss" scoped>
.music-controller {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #2d2d2f;

  &__range {
    background-color: #424244;
    width: 100%;
    height: 10px;
    cursor: pointer;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: v-bind(songPercent);
      background-color: #ff3c3c;
      height: 100%;
    }
  }

  &__lower-block {
    display: flex;
    align-items: center;
    padding: 0 50px;
    height: 80px;
  }

  &__buttons {
    margin-right: 30px;
  }

  &__duration {
    color: white;
  }
}
</style>