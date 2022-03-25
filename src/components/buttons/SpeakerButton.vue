<template>
  <div class="speaker-button">
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 23 17.27"
         :width="size"
         :height="size"
         style="stroke-width: 1.6px; stroke-linejoin:round"
         :style="{stroke: color, fill: color}"
    >
      <g v-if="buttonStatus === 4">
        <path d="M12.6,4.41,7.12,9.15H1.92v6.11H7l5.56,4.82Z" transform="translate(-1.12 -3.61)"/>
        <path d="M15.36,8.83a6.26,6.26,0,0,1,0,6.85m2.27-9.12a9.59,9.59,0,0,1,0,11.39M19.71,4.48a12.41,12.41,0,0,1,0,15.55" transform="translate(-1.12 -3.61)" style="fill: none"/>
      </g>
      <g v-else-if="buttonStatus === 3">
        <path d="M12.6,4.41,7.12,9.15H1.92v6.11H7l5.56,4.82Z" transform="translate(-1.12 -3.61)"/>
        <path d="M15.36,8.83a6.26,6.26,0,0,1,0,6.85m2.27-9.12a9.59,9.59,0,0,1,0,11.39" transform="translate(-1.12 -3.61)"
              style="fill: none;"/>
      </g>
      <g v-else-if="buttonStatus === 2">
        <path d="M12.6,4.41,7.12,9.15H1.92v6.11H7l5.56,4.82Z" transform="translate(-1.12 -3.61)"/>
        <path d="M15.36,8.83a6.26,6.26,0,0,1,0,6.85" transform="translate(-1.12 -3.61)" style="fill: none;"/>
      </g>
      <g v-else>
        <path d="M12.6,4.41,7.12,9.15H1.92v6.11H7l5.56,4.82Z" transform="translate(-1.12 -3.61)" style="stroke-linejoin: round;"/>
      </g>
    </svg>
  </div>
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
    },
    buttonStatus: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style lang="scss" scoped>
.speaker-button {
  position: relative;
  z-index: 2;
  cursor: pointer;
}
</style>