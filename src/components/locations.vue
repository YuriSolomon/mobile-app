<template>
  <div class="locations">
    <h4>Locations</h4>
    <div class="container">
        <div v-for="(item, index) in locations" :key="index">
            <h5>{{item.location}}</h5>
            <p v-on:click="showMap">{{item.adress}}</p>
            <iframe v-if="map" :src="item.map" frameborder="0"></iframe>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "Locations",
    created() {
        this.getLocations()
    },
    data() {
        return{
            locations: [],
            mappedLocations: [],
            map: false
        }
    },
    computed: {
        ...mapState({
            games: "games"
        })
    },
    methods: {
        getLocations() {
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

            this.locations.forEach(location => {
                location.mapStatus= false;
            });
            // console.log(this.locations);
        },
        showMap() {
            if (this.map) {
                this.map = false
            } else {
                this.map = true
            }
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
    background: rgb(33, 37, 41, 0.7);
}
P {
    text-align: left;
    background: rgb(33, 37, 41, 0.7);
}
</style>