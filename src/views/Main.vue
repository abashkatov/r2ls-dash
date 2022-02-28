<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-card-actions>
              <v-btn color="primary" link to="/login">Вход</v-btn>
              <v-btn color="primary" link to="/signup">Регистрация</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: "Main",
};
</script>

<style scoped></style>