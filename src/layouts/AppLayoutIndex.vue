<template>
  <header class="header">
    <div class="header__btn" @click="">Sign in</div>
  </header>
  <div class="container">
    <slot/>
  </div>
  <MusicController/>
</template>

<script>
import MusicController from "@/components/MusicController";

export default {
  name: "AppLayoutIndex",
  components: {MusicController}
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row-reverse;
  padding: 20px 50px;

  &__btn {
    padding: 15px 25px;
    border-radius: 7px;
    background-color: #ff3c3c;
    color: white;
    cursor: pointer;
    font-weight: 500;
  }
}
</style>