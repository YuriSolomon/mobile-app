<template>
  <div class="teams">
    <h4>Teams</h4>
    <div class="container">
        <div class="row d-flex justify-content-around">
            <div v-for="(team,i) in teams" v-on:click="getTeamInfo" :key="i" class="square m-4 d-flex align-items-center justify-content-center">
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
      teams: [],
      teamInfo: []
    };
  },
  created() {
    this.getTeams()
  },
  computed: {
    ...mapState({
      games: "games"
    })
  },
  methods:{
    getTeams() {
      let teams1 = this.games.map(team => team.team1);
      let teams2 = this.games.map(team => team.team2);
      let teams1and2 = teams1.concat(teams2);
      let sortedTeams = teams1and2.sort();
      sortedTeams.forEach((team) => {
        if (!(team == (team+1))) {
          if (!this.teams.includes(team)) {
            this.teams.push(team)
          }
        }
      });
      // console.log(this.sortedTeams);
      // console.log(this.teams);
    },
    getTeamInfo() {
      this.teamInfo = [];
        let team = "U1";
        this.games.forEach(game => {
          if ((game.team1 == team) || (game.team2 == team)) {
            this.teamInfo.push(game);
          }
        })
      console.log(this.teamInfo);
    }
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