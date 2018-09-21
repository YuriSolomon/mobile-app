<template>
  <div class="locations">
    <h4>Locations</h4>
    <div class="container">
        <div v-for="(item, index) in locations" :key="index">
            <p>{{item}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Locations",
    created() {
        this.games = this.$store.state.games;
        console.log(this.games);
        let locInside = [];
        this.games.forEach(game => {
             if (!locInside.includes(game.location)) {
                locInside.push(game.location)
            }
        });
        this.locations = locInside;
        // eslint-disable-next-line
        console.log(this.locations);
        //  this.games = this.$store.state.games; 
    },
    data() {
        return{
            locations: [],
            // games: []
        }
    },
    computed: {
    games() {
      return this.$store.state.games;
    }
  }
}



</script>

<style scoped>
.locations {
    color: white;
}
h4 {
    margin-top: 70px;
}
h5 {
    text-align: left;
    text-decoration: underline;
    margin-top: 30px;
    background: rgb(33, 37, 41, 0.7)!important;
}
P {
    text-align: left;
    background: rgb(33, 37, 41, 0.7)!important;
}
</style>