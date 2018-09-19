<template>
  <div class="navigation fixed-bottom">
    <router-link class="link col-3" to="/Games">Games</router-link>
    <router-link class="link col-3" to="/Teams">Teams</router-link>
    <router-link class="link col-3" to="/Locations">Locations</router-link>
    <router-link class="link col-3" to="/Contact">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
.link {
    text-decoration: none;
    color: black;
}
</style>