<template>
  <div class="teams">
    <h4>Teams</h4>
    <div class="container">
      <div class="row d-flex justify-content-around">
        <div v-if="this.teamInfo.length != 0" class="info container">
          <h1>{{this.selecedTeam}} games</h1>
          <table class="table table-dark">
            <tr>
              <td>Date</td>
              <td>Teams</td>
              <td>Location</td>
              <td>Times</td>
            </tr>
            <tbody>
              <tr v-for="(game, index) in teamInfo" :key='index'>
                <td>{{game.date}}</td>
                <td>{{game.team1}} vs. {{game.team2}}</td>
                <td>{{game.location}}</td>
                <td>{{game.time}}</td>
              </tr>
            </tbody>
          </table>
          <button v-on:click="close">close</button>
        </div>
        <div v-for="(team,i) in teams" v-on:click="getTeamInfo(team)" :key="i" class="square m-4 d-flex align-items-center justify-content-center">
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
      teamInfo: [],
      selecedTeam: ""
    };
  },
  created() {
    this.getTeams();
  },
  computed: {
    ...mapState({
      games: "games"
    })
  },
  methods: {
    getTeams() {
      let teams1 = this.games.map(team => team.team1);
      let teams2 = this.games.map(team => team.team2);
      let teams1and2 = teams1.concat(teams2);
      let sortedTeams = teams1and2.sort();
      sortedTeams.forEach(team => {
        if (!(team == team + 1)) {
          if (!this.teams.includes(team)) {
            this.teams.push(team);
          }
        }
      });
      // console.log(this.sortedTeams);
      // console.log(this.teams);
    },
    getTeamInfo(team) {
      this.teamInfo = [];
      this.selecedTeam = team;
      this.games.forEach(game => {
        if (game.team1 == team || game.team2 == team) {
          this.teamInfo.push(game);
        }
      });
      // console.log(this.teamInfo);
    },
    close() {
      this.teamInfo = [];
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
  background: rgb(33, 37, 41, 0.7);
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */ 
}
.table {
  font-size: 65%;
}
.table-dark {
  background: rgb(33, 37, 41, 0.7);
}
</style>