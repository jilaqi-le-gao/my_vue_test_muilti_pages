import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import Notes from './modules/Notes'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		login,
		Notes,
	}
})
