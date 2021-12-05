<template>
  <div>
    <Header />
    <Sidebar />
    <v-content>
      <slot />
    </v-content>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default {
  name: "Dashboard",
  components: { Header, Sidebar, Footer },
};
</script>

<style scoped></style>