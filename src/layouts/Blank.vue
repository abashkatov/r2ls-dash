<template>
  <div>
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  name: "Blank",
  components: { Footer },
};
</script>

<style scoped></style>