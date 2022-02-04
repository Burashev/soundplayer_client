<template>
  <div class="queue-button">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        :fill="color"
        :style="rotate ? 'transform: scaleX(-1);' : ''"
    >
      <path
          d="M19,1c0.6,0,1,0.4,1,1v20c0,0.6-0.4,1-1,1s-1-0.4-1-1v-6.9l-9.1,7.2c-2,1.5-4.9,0.1-4.9-2.4V4.1 c0-2.5,2.9-3.9,4.9-2.4L18,8.9V2C18,1.4,18.4,1,19,1z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "NextButton",
  props: {
    color: {
      type: String,
      default: '#fff'
    },
    size: {
      type: String,
      default: '18'
    },
    rotate: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.queue-button {
  cursor: pointer;
}
</style>