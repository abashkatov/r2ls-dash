<template>
  <v-app>
    <AppNotifications />
    <Dashboard>
      <Main />
    </Dashboard>
  </v-app>
</template>

<script>
import Dashboard from "./layouts/Dashboard";
import Main from "./views/Main";
import AppNotifications from "@/common/components/AppNotifications";

export default {
  name: 'App',

  components: { AppNotifications, Dashboard, Main },

  data: () => ({
    //
  }),
};
</script>

<style></style>