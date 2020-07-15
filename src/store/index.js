import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    users: [],
    totalCount: "",
    pageNumber: 1,
    selectParam: "down",
    sortParam: "desc",
  },
  getters: {
    getTotalCount: (state) => {
      return state.totalCount;
    },
    getUsers: (state) => {
      return state.users;
    },
    getPageNumber: (state) => {
      return state.pageNumber;
    },
    getSearch: (state) => {
      return state.search;
    },
  },
  mutations: {
    setInfo(state, payload) {
      state.selectParam = payload.value;
      if (state.selectParam === "down") {
        state.sortParam = "desc";
      }
      if (state.selectParam === "up") {
        state.sortParam = "asc";
      }
    },
    setSearch(state, payload) {
      state.search = payload;
    },
    setUsersInfo(state, payload) {
      state.totalCount = payload.total_count;
      state.users = payload.items;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setPageNumber(state, payload) {
      state.pageNumber = payload;
    },
  },
  actions: {
    setInfo: ({ commit, dispatch }, payload) => {
      commit("setInfo", payload);
      dispatch("getUsersRequest", payload);
    },
    setSearch: ({ commit }, payload) => {
      commit("setSearch", payload.query);
    },
    getPageValue: ({ commit, dispatch }, payload) => {
      commit("setPageNumber", payload.number);
      dispatch("getUsersRequest", payload);
    },
    getUsersRequest: ({ commit, state }, payload) => {
      if (payload.name !== "") {
        let baseUrl = "https://api.github.com/search/";
        axios
          .get(
            `${baseUrl}users?q=${payload.name}&sort=repositories&order=${state.sortParam}&page=${state.pageNumber}`
          )
          .then((res) => {
            commit("setUsersInfo", res.data);
          })
          .catch((e) => {});
      } else {
        commit("setUsersInfo", "олег");
      }
    },
  },
  modules: {},
});
