<template>
  <div>
    <v-navigation-drawer
        permanent
        expand-on-hover
        app
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title class="text-h6">
            Sandr Adams
          </v-list-item-title>
          <v-list-item-subtitle>email</v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
          nav
          dense
      >
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Главная</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/profile">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Профиль</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/login">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Вход</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/signup">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Регистрация</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped></style>