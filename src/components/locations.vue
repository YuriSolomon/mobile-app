<template>
  <div class="locations">
    <h4>Locations</h4>
    <div class="container">
        <div v-for="(item, index) in locations" :key="index">
            <h5>{{item.location}}</h5>
            <p>{{item.adress}}</p>
            <iframe :src="item.map" frameborder="0"></iframe>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "Locations",
    created() {
        // reducing elements' keys to location and adress
        this.games.forEach(game => {
            let newObject = {};
            for(let key in game){
                if(key == 'location' || key == 'adress' || key == 'map'){
                    newObject[key] = game[key];
                }
            }
            this.mappedLocations.push(newObject);
        })
        // reducing repeated elements
        let locInside = [];
        for(let i = 0; i < this.mappedLocations.length; i++){
            var item = this.mappedLocations[i];
            var duplicated = false;
            for(let j = 0; j < i; j++){
                if( i != j ){
                    if( this.mappedLocations[j].location == item.location && this.mappedLocations[j].address == item.address ) {
                        duplicated = true;
                    }
                }
            } 
            if(!duplicated){
               locInside.push(item);
            }
        }
        this.locations = locInside;
        // console.log(this.locations);
    },
    data() {
        return{
            locations: [],
            mappedLocations: []
        }
    },
    computed: {
        ...mapState({
            games: "games"
        })
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
    background: rgb(33, 37, 41, 0.7);
}
P {
    text-align: left;
    background: rgb(33, 37, 41, 0.7);
}
</style>