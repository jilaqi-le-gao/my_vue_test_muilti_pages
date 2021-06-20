<template>
  <v-app>
    <v-container 
      fill-height fluid 
    >
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 lg2 xl2>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <form 
                @submit.prevent="signin"
              >
                <v-row>
                  <v-text-field
                    prepend-icon="mdi-account"
                    label="Username"
                    v-model="LoginInfo.username"
                  >
                  </v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    prepend-icon="mdi-key"
                    label="Password"
                    v-model="LoginInfo.password"
                  >
                  </v-text-field>
                </v-row>
                <v-row
                  justify="center"
                >
                  <v-btn
                    class="mb-3"
                    type="submit"
                    color="primary"
                  >
                    Sign In
                  </v-btn>
                </v-row>
              </form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <div class="text-center">
        <v-dialog
          v-model="login_fail_status"
          width="500"
        >
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Login Failed
            </v-card-title>

            <v-card-text>
              Your username and password is incorrect. Please re-check.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="close_login_dialog"
              >
                Got it
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
    show1: false,
    LoginInfo: {
      // username,
      // password,
    }
  }),
  mounted () {
    this.$store.dispatch('login/getSaveCsrftoken');
  },
  methods: {
    signin () {
      this.$store.dispatch('login/loginUser', this.LoginInfo);
    },
    close_login_dialog () {
      this.$store.dispatch('login/closeLoginFail');
    }
  },
  computed: {
    login_fail_status () {
      return this.$store.getters['login/get_login_fail'];
    }
  }
};
</script>
