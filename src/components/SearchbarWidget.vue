<template>
    <div>
        <input type="text"  v-model="location" @change="updateLocation" placeholder="find a city">
    </div>
</template>

<script>
export default {
  data() {
    return {
      location: null
    };
  },
  methods: {
    updateLocation() {
      this.$store.dispatch("updateWeatherData", this.location);
      this.$store.state.error = "";
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  font-size: 15px;
  width: 150px;
  padding: 5px;
  border: none;
  border-bottom: 2px solid black;
  transition: 0.5s;
}
input:hover {
  border-bottom: 2px solid #b22222;
  transition: 0.5s;
}
input:focus {
  width: 200px;
  border-bottom: 2px solid #b22222;
  transition: 0.5s;
  outline: none;
}
</style>
