<template>
    <div class="main">
      <div class="header">
        <searchbar-widget/>
      </div>
      <div v-if="loading" class="loading"><i class="fa-2x fas fa-spinner fa-spin"></i></div>
      <div v-else class="columns " transition="appear">
        <div class="today column is-half">
          <today-widget/>
        </div>
        <div class="forecast column is-half">
          <forecast-widget/>
        </div>
      </div>
      <div v-if="error" class="error">{{error}}</div>
    </div>
</template>
<script>
import TodayWidget from "./components/TodayWidget.vue";
import ForecastWidget from "./components/ForecastWidget.vue";
import SearchbarWidget from "./components/SearchbarWidget.vue";
export default {
  name: "app",
  components: {
    TodayWidget,
    ForecastWidget,
    SearchbarWidget
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    error() {
      return this.$store.getters.error;
    }
  },
  created() {
    // Getting geolocation with GeoLocation API
    this.$getLocation({
      timeout: 10000
    })
      .then(coordinates => {
        this.$store.commit("SET_LOCATION", coordinates);
        this.$store.dispatch("getWeatherData");
      })
      .catch(error => {
        this.$store.state.error = error;
        this.$store.dispatch("updateWeatherData", "New York");
      });
  }
};
</script>

<style>
html {
  padding: 0;
  margin: 0;
}
body {
  padding: 0;
  margin: 0;
}
i {
  color: #b22222;
}
.header {
  display: flex;
  justify-content: center;
  height: 10vh;
}
.loading {
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
}
.columns {
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
}
.column {
  padding-right: 0;
  padding-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.today {
  width: 50vw;
  height: 90vh;
  padding: 1em;
}
.forecast {
  width: 50vw;
  height: 90;
}
@media only screen and (max-width: 768px) {
  .today {
    width: 100vw;
  }
  .forecast {
    width: 100vw;
    height: 80vh;
    background-color: aliceblue;
  }
}
.error {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(178, 44, 44, 0.7);
  color: white;
  text-align: center;
  height: 50px;
}
</style>
