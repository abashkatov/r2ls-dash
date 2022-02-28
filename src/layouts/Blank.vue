<template>
  <v-app>
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/Footer";

export default {
  name: "Blank",
  components: { Footer },
};
</script>

<style scoped></style>