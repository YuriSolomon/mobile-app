<template>
  <div class="locations">
    <h4>Locations</h4>
    <div class="container">
        <h5>AJ Katzenmaier Elementary</h5>
        <p>24 W. Walton St., Chicago, IL 60610</p>
        <h5>Greenbay Elementary</h5>
        <p>1734 N. Orleans St., Chicago, IL 60614</p>
        <h5>Howard A Yeager Elementary</h5>
        <p>2245 N. Southport Ave., Chicago, IL 60614</p>
        <h5>Marjorie P Hart Elementary</h5>
        <p>2625 N. Orchard St., Chicago, IL 60614</p>
        <h5>North Elementary</h5>
        <p>1409 N. Ogden Ave., Chicago, IL 60610</p>
        <h5>South Elementary</h5>
        <p>2101 N. Fremont St., Chicago, IL 60614</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Locations"
};
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