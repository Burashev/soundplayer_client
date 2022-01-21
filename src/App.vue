<template>
  <div class="container">
    <router-view/>
  </div>
  <MusicController :current-time-seconds="currentTimeSeconds" :duration-time-seconds="durationTimeSeconds"></MusicController>
</template>

<script>
import MusicController from "@/components/MusicController";

export default {
  name: "App",
  components: {MusicController},
  data() {
    return {
      currentTimeSeconds: 0,
      durationTimeSeconds: 0,
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
/* Color variables */
$bg-color: #202124;

/* Fonts */
@font-face {
  src: url("/assets/fonts/Inter-Regular.ttf");
  font-family: "Inter";
  font-weight: 400;
}

@font-face {
  src: url("/assets/fonts/Inter-Medium.ttf");
  font-family: "Inter";
  font-weight: 500;
}

/* Common styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  background-color: $bg-color;
}

.container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
}
</style>
