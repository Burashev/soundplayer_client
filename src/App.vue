<template>
  <div class="container">
    <router-view/>
  </div>
  <NotificationList/>
  <MusicController/>
</template>

<script>
import MusicController from "@/components/MusicController";
import NotificationList from "@/components/ui/NotificationList";

export default {
  name: "App",
  components: {MusicController, NotificationList},
}
</script>

<style lang="scss">
/* Color variables */
$bg-color: #202124;

/* Fonts */
@font-face {
  src: url("~@/assets/fonts/Inter-Regular.ttf");
  font-family: "Inter";
  font-weight: 400;
}

@font-face {
  src: url("~@/assets/fonts/Inter-Medium.ttf");
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
