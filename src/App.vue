<template>
  <v-app>
    <component :is="layout">
      <AppNotifications />
      <router-view :key="$route.path"></router-view>
    </component>
  </v-app>
</template>

<script>
import Dashboard from "./layouts/Dashboard";
import Main from "./views/Main";
import AppNotifications from "@/common/components/AppNotifications";

const defaultLayout = "Blank";

export default {
  name: 'App',

  components: { AppNotifications, Dashboard, Main },

  data: () => ({
    //
  }),
  computed: {
    layout: function () {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>

<style></style>