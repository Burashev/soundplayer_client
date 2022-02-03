<template>
  <div class="notification__list">
    <transition-group name="list" tag="div">
      <NotificationItem v-for="notification in notifications"
                        :text="notification.text"
                        :error="notification.error"
                        :key="notification.text"
      />
    </transition-group>
  </div>
</template>

<script>
import NotificationItem from "@/components/ui/NotificationItem";

export default {
  name: "NotificationList",
  components: {NotificationItem},
  data() {
    return {
      notifications: [
        {
          error: true,
          text: 'Some error omg'
        },
        {
          error: true,
          text: 'Some big big big big big big big big big big big big big big big error omg'
        },
        {
          error: false,
          text: 'Some not error omg'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.notification__list {
  position: absolute;
  bottom: 90px;
  width: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.list-enter-active,
.list-leave-active {
  transition: all .6s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>