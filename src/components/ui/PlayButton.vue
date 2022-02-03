<template>
  <a href="#" @click.prevent="buttonClick">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        viewBox="0 0 277.338 277.338"
        :fill="color"
        v-if="!paused"

    >
      <path d="M14.22,45.665v186.013c0,25.223,16.711,45.66,37.327,45.66c20.618,0,37.339-20.438,37.339-45.66V45.665
		c0-25.211-16.721-45.657-37.339-45.657C30.931,0,14.22,20.454,14.22,45.665z"/>
      <path d="M225.78,0c-20.614,0-37.325,20.446-37.325,45.657V231.67c0,25.223,16.711,45.652,37.325,45.652s37.338-20.43,37.338-45.652
		V45.665C263.109,20.454,246.394,0,225.78,0z"/>
    </svg>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        viewBox="0 0 24 24"
        :fill="color"
        class="triangle"
        v-else
    >
      <path
          d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z"/>
    </svg>


  </a>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ArrowUI",
  props: {
    color: {
      type: String,
      default: '#fff'
    },
    size: {
      type: String,
      default: '24'
    },
    paused: {
      type: Boolean,
      default: false
    },
    song: {
      type: Object,
      required: true
    },
    playlist: {
      type: Object
    }
  },
  computed: {
    ...mapState('music', ['currentSong']),
  },
  methods: {
    buttonClick() {
      this.$store.dispatch('music/setCurrentSong', {song: this.song, playlist: this.playlist});
    }
  }
}
</script>

<style lang="scss" scoped>
.triangle {
  transform: rotate(90deg);
}
</style>