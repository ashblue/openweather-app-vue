import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { api } from "./api_key";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    location: {
      lng: null,
      lat: null
    },
    error: null,
    loading: true
  },
  mutations: {
    // 'SET_LOCATION' mutation was commited in 'App.vue' component
    SET_LOCATION(state, payload) {
      state.location.lng = payload.lng;
      state.location.lat = payload.lat;
    },
    SET_DATA(state, payload) {
      state.data = payload;
      state.loading = false;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    getWeatherData({ commit, state }) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${
            state.location.lat
          }&lon=${state.location.lng}&appid=${api}&units=metric&cnt=5`
        )
        .then(response => {
          if (response.data) {
            commit("SET_DATA", response.data);
          }
        })
        .catch(function(error) {
          if (error) {
            commit("SET_ERROR", error.response.data.message);
          }
        });
    },
    updateWeatherData({ commit }, payload) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast/daily?q=${payload}&appid=${api}&units=metric&cnt=5`
        )
        .then(response => {
          if (response.data) {
            commit("SET_DATA", response.data);
          }
        })
        .catch(function(error) {
          if (error) {
            commit("SET_ERROR", error.response.data.message);
          }
        });
    }
  },
  getters: {
    city(state) {
      return state.data.city.name;
    },
    list(state) {
      state.data.list.shift();
      return state.data.list;
    },
    error(state) {
      return state.error;
    }
  }
});
