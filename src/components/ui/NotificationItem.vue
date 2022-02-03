<template>
  <div class="notification" :class="{'error': error}">
    <span>
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "NotificationItem",
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
  min-width: 200px;
  max-width: 300px;
  background-color: #424244;
  display: flex;
  justify-content: center;
  padding: 15px;
  border-radius: 7px;
  color: #bebebe;
  margin-bottom: 10px;
  cursor: pointer;
  &.error {
    background-color: #ff3c3c;
    color: white;
  }
}
</style>