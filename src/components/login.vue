<template>
<div class="login">
    <p class="advice">You must login</p>
    <input v-model="email" class="email" type="text" placeholder="Your email...">
    <input v-model="password" class="password" type="password" placeholder="Your password..."><br>
    <button id="login" class="button is-info" v-on:click="login">Login!</button>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(success => this.$router.push("/chat"))
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
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