<template>
    <div class="wrapper">
        <div v-for="list in getList" :key="list.id" class="tab">
            <h3>{{ list.dt | weekday }}</h3> <!--Filter to Grab weekday-->
            <div class="details">
                <img :src="require(`../assets/${list.weather[0].icon}.svg`)" alt="icon">
                <h4 class="description">{{list.weather[0].description}}</h4>
                <h4 class="max-temp">{{list.temp.max}}°C</h4>
                <h4 class="min-temp">{{list.temp.min}}°C</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    getList() {
      return this.$store.getters.list;
    }
  },
  filters: {
    weekday(timestamp) {
      let date = new Date(timestamp * 1000);
      return date.toLocaleDateString("en", { weekday: "long" });
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 30rem;
  height: 25rem;
  padding: 1em;
}
.details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tab {
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
h3 {
  font-weight: 900;
}
h4 {
  font-size: 17px;
}
.description {
  width: 40%;
}
.max-temp {
  width: 20%;
  margin-left: 0;
}
.min-temp {
  width: 20%;
  margin-left: 0;
}
</style>
