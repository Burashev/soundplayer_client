<template>

</template>

<script>
import authService from "@/services/authService";
export default {
  name: "Auth",
  created() {
    const code = this.$route.query.code;
    if (code) {
      authService.callbackGithub(code);
    }
  }
}
</script>

<style scoped>

</style>