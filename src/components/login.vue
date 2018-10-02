<template>
<div class="login">
  <div class="log">
    <p class="advice"><span>You must login</span></p>
    <input v-model="email" class="email" type="text" placeholder="Your email..."><br>
    <input v-model="password" class="password" type="password" placeholder="Your password..."><br>
    <button id="login" class="button is-info" v-on:click="login">Login!</button>
  </div>
  <div class="sign">
    <p class="advice"><span>Sign up</span></p>
    <input v-model="email1" class="email" type="text" placeholder="Your email..."><br>
    <input v-model="password1" class="password" type="password" placeholder="Your password..."><br>
    <button id="login" class="button is-info" v-on:click="signUp">Sign up!</button>
  </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      email1: "",
      password1: "",
    };
  },
  created() {
    this.checkUserStatus();
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(success => this.user = true, this.$router.push("/chat"))
        .catch(function(error) {
          console.log(error);
        });
    },
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email1, this.password1)
        .catch(function(error) {
          console.log(error);
        });
        // console.log("d");
    },
    checkUserStatus() {
      // console.log(firebase.auth().currentUser);
      var userisLogged = firebase.auth().currentUser !== null;
      if (userisLogged) {
        this.$router.push("/chat")
      };
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
}
p span {
  background: rgb(33, 37, 41, 0.7);
  padding: 5px;
}
.log {
  margin-top: 120px;
}
.sign {
  margin-top: 80px;
}
</style>