import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => {
      return state.users;
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    getUsersRequest: ({ commit }, payload) => {
      if (payload !== "") {
        axios
          .get(`https://api.github.com/search/users?q=${payload}`)
          .then((res) => {
            commit("setUsers", res.data.items);
          })
          .catch((e) => {});
      } else {
        commit("setUsers", payload);
      }
    },
  },
  modules: {},
});
