<template>
  <div @click="changeRepeatMode">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        :stroke="color"
        fill="none"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
      <g>
        <path d="M17 2l4 4-4 4" />
        <path d="M3 11v-1a4 4 0 014-4h14" />
        <path d="M7 22l-4-4 4-4" />
        <path d="M21 13v1a4 4 0 01-4 4H3" />
      </g>
      <g v-if="repeatMode === 2">
        <path d="M17 2l4 4-4 4" />
        <path d="M3 11v-1a4 4 0 014-4h14" />
        <path d="M7 22l-4-4 4-4" />
        <path d="M21 13v1a4 4 0 01-4 4H3" />
        <path d="M11 10h1v4" />
      </g>
    </svg>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "RepeatButton",
  computed: {
    ...mapState('music', ['repeatMode']),
    color() {
      const colors = ['#bebebe', '#ff3c3c', '#ff3c3c']
      return colors[this.repeatMode];
    }
  },
  methods: {
    changeRepeatMode() {
      this.$store.dispatch('music/changeRepeatMode', this.repeatMode)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  cursor: pointer;
}
</style>