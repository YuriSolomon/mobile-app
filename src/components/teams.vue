<template>
  <div class="teams">
    <h4>Teams</h4>
    <div class="container">
        <div class="row d-flex justify-content-around">
            <div class="square m-4 d-flex align-items-center justify-content-center"><h1>U1</h1></div>
            <div class="square m-4 d-flex align-items-center justify-content-center"><h1>U2</h1></div>
        </div>
        <div class="row d-flex justify-content-around">
            <div class="square m-4 d-flex align-items-center justify-content-center"><h1>U3</h1></div>
            <div class="square m-4 d-flex align-items-center justify-content-center"><h1>U4</h1></div>
        </div>
        <div class="row d-flex justify-content-around">
            <div class="square m-4 d-flex align-items-center justify-content-center"><h1>U5</h1></div>
            <div class="square m-4 d-flex align-items-center justify-content-center"><h1>U6</h1></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teams"
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