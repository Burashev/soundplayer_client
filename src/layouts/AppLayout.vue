<template>
  <component :is="layout">
    <slot></slot>
  </component>
</template>

<script>
import AppLayoutDefault from "@/layouts/AppLayoutDefault";
import {shallowRef} from "vue";

export default {
  name: "AppLayout",
  data() {
    return {
      layout: shallowRef(AppLayoutDefault),
    }
  },
  watch: {
    '$route.meta': {
      async handler() {
        if (this.$route.meta.layout) {
          const newLayout = this.$route.meta?.layout;
          this.layout = (await import(`@/layouts/${newLayout}`)).default;
        } else {
          this.layout = AppLayoutDefault;
        }
      }
    }
  }
}
</script>

<style scoped>

</style>