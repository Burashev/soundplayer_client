<template>
  <header-index :is-auth="isAuth" :user-object="userObject"/>
  <div class="container">
    <slot/>
  </div>
  <music-controller/>
</template>

<script>
import MusicController from "@/components/music/MusicController";
import {mapGetters, mapState} from "vuex";
import HeaderIndex from "@/components/HeaderIndex";


export default {
  name: "AppLayoutIndex",
  components: {MusicController, HeaderIndex},
  computed: {
    ...mapGetters('user', ['isAuth']),
    ...mapState('user', ['userObject']),
  }
}
</script>

<style lang="scss" scoped>

</style>
