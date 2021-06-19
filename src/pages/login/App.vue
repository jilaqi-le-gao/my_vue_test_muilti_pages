<template>
  <v-app>
    <v-container 
      fill-height fluid 
    >
      <v-row
        align="center"
        justify="center"
      >
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
              type="submit"
              color="primary"
            >
              Sign In
            </v-btn>
          </v-row>
        </form>
      </v-row>
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
    }
  },
};
</script>
