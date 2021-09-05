<template>
  <v-app id="app" :style="{background: $vuetify.theme.themes[theme].background}">
    <NaviMainSideNavi />

    <v-main>
      <NaviMainPage />
    </v-main>
  </v-app>
</template>

<script>
import NaviMainSideNavi from '@/components/NavigationMainComp/NaviMainSideNavi';
import NaviMainPage from '@/components/NavigationMainComp/NavMainPage';

export default {
	name: 'App',
	components: {
    NaviMainSideNavi,
    NaviMainPage
	},
	data: () => ({
    }),
	mounted () {

	},
  
  computed: {
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
}
</script>
