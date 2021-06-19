import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/proxy';

const state = {
	csrftoken: null,
};

const mutations = {
	UPDATE_CSRFTOKEN (state, payload){
		state.csrftoken = payload;
	}
};

const actions = {
	getSaveCsrftoken (context){
		axios.get('/authtest/').then(function (response){
			context.commit('UPDATE_CSRFTOKEN', response.data.csrftoken);
		});
	},
	loginUser (context, payload){
		var form_data = new FormData();
		form_data.append('username', payload.username);
		form_data.append('password', payload.password);
		form_data.append('csrfmiddlewaretoken', state.csrftoken);
		// form_data.append('next', ??)
		axios({
			url: '/accounts/login/',
			method: 'POST',
			data: form_data,
		}).then(function (response){
			console.log(response);
		})
	}
};

const getters = {};

const loginModule = {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};

export default loginModule;