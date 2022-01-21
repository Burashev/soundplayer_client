<template>
  <a href="#">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        viewBox="0 0 75 75"
        style="stroke-width: 5; stroke-linejoin:round"
        :style="{stroke: color, fill: color}"
    >
      <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
      />
      <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
            style="fill: none;"/>
    </svg>
  </a>
</template>

<script>
export default {
  name: "SpeakerButton",
  props: {
    size: {
      type: String,
      default: 30,
    },
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style scoped>

</style>