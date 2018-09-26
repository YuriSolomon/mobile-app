<template>
  <div class="games container">
    <h4>Game Information</h4>
    <h5>Fall Schedule</h5>
    <p>*All games take place on Saturday*</p>

    <div>
      <table class="table table-dark">
        <tr>
          <td>Date</td>
          <td>Teams</td>
          <td>Location</td>
          <td>Times</td>
        </tr>
        <tbody>
          <tr v-for="(game, index) in games" :key='index'>
            <td>{{game.date}}</td>
            <td>{{game.team1}} vs. {{game.team2}}</td>
            <td>{{game.location}}</td>
            <td>{{game.time}}</td>
          </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Games",
  // data() {
  //   return {
  //     myTest: []
  //   }
  // },
  computed: {
    games() {
      return this.$store.state.games;
    }
  }
};
</script>

<style scoped>
.table {
  font-size: 65%;
}
.games {
  color: white;
}
h4 {
  margin-top: 70px;
}
p {
  margin-top: 20px;
  margin-bottom: 30px;
}
h6 {
  text-align: left;
  text-decoration: underline;
}
.table-dark {
  background: rgb(33, 37, 41, 0.7);
}
</style>