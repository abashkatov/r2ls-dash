<template>
  <div>
    <Header />
    <Sidebar />
    <v-main>
      <slot />
    </v-main>
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