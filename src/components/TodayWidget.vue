<template>
    <div class="card">
        <div class="title">
            <h1>Today</h1>
            <h2>{{city}}</h2>
            <div class="details">
                <img :src="require(`../assets/${icon}.svg`)" alt="icon">
                <div class="description">
                    <h3>{{description}}</h3>
                    <h3>{{temperature.day}}°C</h3>
                </div>
            </div>
             <div class="info">
                    <h3>humidity: <br>
                        <span>{{humidity}}%</span>
                    </h3>
                    <h3>max temperature: <br>
                        <span>{{temperature.max}}°C</span>
                    </h3>
                    <h3>speed: <br>
                        <span>{{speed}}m/s</span>
                        </h3>
                    <h3>min temperature: <br>
                        <span>{{temperature.min}}°C</span>
                    </h3>
                    <h3>pressure:  <br
                        ><span>{{pressure}} mb</span>
                    </h3>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    icon() {
      return this.$store.getters.list[0].weather[0].icon;
    },
    description() {
      return this.$store.getters.list[0].weather[0].description.toUpperCase();
    },
    humidity() {
      return this.$store.getters.list[0].humidity;
    },
    pressure() {
      return this.$store.getters.list[0].pressure;
    },
    speed() {
      return this.$store.getters.list[0].speed;
    },
    temperature() {
      return this.$store.getters.list[0].temp;
    },
    city() {
      return this.$store.getters.city;
    }
  }
};
</script>

<style scoped>
.card {
  background-color: white;
  width: 30rem;
  height: 25rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 10px 30px 5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.2s ease, box-shadow 0.2s ease;
  opacity: 1;
  align-items: center;
  display: flex;
  align-items: center;
}
.title {
  margin: 7%;
}
.title h1 {
  font-size: 30px;
}
.title h2 {
  font-size: 25px;
}
.title .details {
  display: flex;
  align-items: center;
}
.details img {
  height: 150px;
  width: auto;
}
.title .description h3 {
  font-size: 25px;
}
.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.info h3 {
  font-size: 17px;
  width: 50%;
  margin-bottom: 10px;
}
.info span {
  font-weight: 900;
  color: #b22222;
}
</style>
