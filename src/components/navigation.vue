<template>
<div class="pos-f-t fixed-top">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4 d-flex justify-content-around">
      <span class="text-muted" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><router-link class="link" to="/Games">Games</router-link></span>
      <span class="text-muted" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><router-link class="link" to="/Teams">Teams</router-link></span>
      <span class="text-muted" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><router-link class="link" to="/Locations">Locations</router-link></span>
      <span class="text-muted" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><router-link class="link" to="/Contact">Contact</router-link></span>
      <span class="text-muted" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><router-link class="link" to="/Login">Chat</router-link></span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <span class="text-muted" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><router-link class="link" to="/"><h3>NYSL</h3></router-link></span>
  </nav>
</div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: white;
}
h3 {
    color: white;
}
.p-4 {
    border-bottom: solid 2px gray;
}
</style>