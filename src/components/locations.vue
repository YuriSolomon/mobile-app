<template>
  <div class="locations">
    <h4>Locations</h4>
    <h6>Click address to see a map</h6>
    <div class="container">
        <div class="location container" v-for="(item, index) in locations" :key="index">
            <h5>{{item.location}}</h5>
            <p v-on:click="showMap(item)">{{item.adress}}</p>
            <iframe class="map" v-if="item.mapStatus" :src="item.map" frameborder="0"></iframe>
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
            mappedLocations: []
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
        showMap(item) {
            if (item.mapStatus) {
                item.mapStatus = false
            } else {
                item.mapStatus = true
            }
            // eslint-disable-next-line
            // console.log(item.mapStatus);
            this.$forceUpdate();
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
    text-decoration: underline;
    text-align: left;
}
p {
    text-align: left;
    font-size: 97%;
}
.location {
    margin-top: 30px;
    padding-top: 5px;
    padding-bottom: 1px;
    background: rgb(33, 37, 41, 0.7);
    border-radius: 15px;
}
.map {
    text-align: center;
    margin-bottom: 10px;
}
</style>