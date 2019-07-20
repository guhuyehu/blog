import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		datalist: [],
		id: '',
		page: 1,
		limit: 5,
		show: false,
		lastid: ''
	},
	getters: {
		selectBlog: state => {

			return state.datalist.filter(todo => todo.id === state.id)[0] || {};
		}
	},
	mutations: {
		CHECKOUT_SUCCESS(state, data) {
			state.datalist = state.datalist.concat(data)
		},
		selectBlogHandle(state, id) {
			state.id = id
		},
		changePage(state, page) {
			state.page = page

		},
		changeloading(state, show) {
			state.show = show
		},
		lastid(state, lastid) {
			state.lastid = lastid
		}
	},
	actions: {
		getJSdata({
			commit,
			state
		}) {
			commit('changeloading', true)
			return axios.get("/api/getlist?_page=" + state.page + "&_limit=" + state.limit, ).then(res => {
				console.log(res.headers['x-total-count']);
				let data = res.data
				commit('CHECKOUT_SUCCESS', data)
				commit('changeloading', false)
				let lastid = Math.ceil(Number(res.headers['x-total-count'] / state.limit))
				commit('lastid', lastid)
			})

		},
	}


})