<template>
  <button @click="play">Play</button>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    play() {
      new Audio('/Song1.mp3').play();
    }
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

.triangle {
  width: 0;
  height: 0;
  border: 14px solid;
  border-top: none;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: black;
}

.triangle-right {
  transform: rotate(90deg);
}

</style>
