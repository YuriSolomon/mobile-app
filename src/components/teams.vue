<template>
  <div class="teams">
    <h4>Teams</h4>
    <div class="container">
        <div class="row d-flex justify-content-around">
            <div v-for="(team,i) in teams" :key="i" class="square m-4 d-flex align-items-center justify-content-center">
              <h1>{{team}}</h1>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Teams",
  data() {
    return {
      teams1: [],
      teams2: [],
      teams1and2: [],
      sortedTeams: [],
      teams: []
    };
  },
  created() {
    this.teams1 = this.games.map(team => team.team1);
    this.teams2 = this.games.map(team => team.team2);
    this.teams1and2 = this.teams1.concat(this.teams2);
    this.sortedTeams = this.teams1and2.sort();
    this.sortedTeams.forEach((team) => {
      if (!(team == (team+1))) {
        if (!this.teams.includes(team)) {
          this.teams.push(team)
        }
      }
    });
    // console.log(this.sortedTeams);
    // console.log(this.teams);
  },
  computed: {
    ...mapState({
      games: "games"
    })
  }
};
</script>

<style scoped>
.teams {
  color: white;
}
h4 {
  margin-top: 70px;
}
.square {
  width: 100px;
  height: 100px;
  border: solid 2px black;
  border-radius: 15px;
  background: rgb(33, 37, 41, 0.7) !important;
}
</style>