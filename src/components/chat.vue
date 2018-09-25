
<template>
<div class="chat">
  <div class="inputs">
    <input id="textInput" class="input" type="text" placeholder="Your message...">
    <button id="create-post" class="button is-primary">Send</button>
  </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Chat",
  data() {
    return {
      email: "",
      password: "",
      user: false
    }
  },
  methods: {

  }
}



</script>

<style scoped>
h1 {
  font-size: 200%;
}
#logo {
  margin-top: 25%;
  width: 80%;
}
.advice {
  margin-top: 15px;
  color: white;
  background: rgb(33, 37, 41, 0.7);
}
</style>