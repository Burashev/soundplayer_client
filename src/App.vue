<template>
  <app-layout>
    <router-view/>
  </app-layout>
  <NotificationList/>
</template>

<script>
import NotificationList from "@/components/ui/NotificationList";
import AppLayout from "@/layouts/AppLayout";

export default {
  name: "App",
  components: {NotificationList, AppLayout},
  created() {
    setInterval(() => {
      this.$store.dispatch('user/getUser');
    }, 5000);
  }
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
