<template>
  <transition name="fade" mode="out-in">
    <div v-if="notifications.length" class="notification__wrapper">
      <transition-group name="fade" mode="out-in">
        <v-alert
          v-for="{ text, type, id } in notifications"
          :key="id"
          dense
          :type="type"
        >
          {{ text }}
        </v-alert>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AppNotifications",
  computed: {
    ...mapState(["notifications"]),
  },
};
</script>

<style lang="scss" scoped>
.notification {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid transparent;
  &__wrapper {
    position: fixed;
    z-index: 9999;
    top: $header-height;
    right: 0;
    width: 420px;
    padding: 10px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
