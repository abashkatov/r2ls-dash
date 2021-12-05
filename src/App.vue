<template>
  <v-app>
    <Dashboard>
      <Main />
    </Dashboard>
  </v-app>
</template>

<script>
import Dashboard from "./layouts/Dashboard";
import Main from "./views/Main";

export default {
  name: 'App',

  components: { Dashboard, Main },

  data: () => ({
    //
  }),
};
</script>

<style></style>