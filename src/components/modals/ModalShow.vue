<template>
  <component :is="modalComponent"></component>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  name: "ModalShow",
  props: {
    modalName: {
      type: String,
      required: true
    }
  },
  computed: {
    modalComponent() {
      return defineAsyncComponent(() => import(`./${this.modalName}`));
    }
  }
}
</script>

<style scoped>

</style>