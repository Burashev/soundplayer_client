<template>

</template>

<script>
export default {
  name: "Auth",
  created() {
    const code = this.$route.query.code;
    if (code) {
      this.$store.dispatch('user/getUserByCode', code);
      this.$router.push({name: 'Index'});
    }
  }
}
</script>

<style scoped>

</style>