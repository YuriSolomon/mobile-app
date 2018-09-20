<template>
  <div id="app">

  <router-view />
  <navigation />

  </div>
</template>

<script>
import Navigation from './components/navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  },
  data() {
    return{
      games: []
    }
  },
  beforeCreate() {
    fetch("https://api.myjson.com/bins/1bzm30", {})
        .then(response => response.json())
        .then(realData => {

            var data = realData;
            this.games = data.matches.games;

        })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: url("./assets/background.jpg");
  background-size: contain, cover;
  min-height: 600px;
}
</style>
