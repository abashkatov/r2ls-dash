<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Регистрация</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Имя пользователя"
                    type="text"
                ></v-text-field>
                <v-text-field
                    prepend-icon="email"
                    name="email"
                    label="Email"
                    type="email"
                ></v-text-field>
                <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Пароль"
                    type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" link to="/login">Вход</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="success" to="/">Регистрация</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: "Signup",
};
</script>

<style scoped></style>