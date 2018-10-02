<template>
<div class="chat container">
  <div class="signout">
    <button v-on:click="signOut">Log out</button>
  </div>
  <div class="fixed-bottom">
    <input id="input" class="input" type="text" placeholder="Your message...">
    <button id="create-post" v-on:click="writePost" class="button is-primary">Send</button>
  </div>
  <div class="container" id="messages">
    <div class="messages" v-for="(key, i) in messages" :key="i">
      <div class="message m-3 user" v-if="key.email == currentUser">
        <p>{{key.email}}:</p>
        <p>{{key.message}}</p>
      </div>
      <div class="message m-3 other" v-else>
        <p>{{key.email}}:</p>        
        <p>{{key.message}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Chat",
  data() {
    return {
      messages: {},
      currentUser: ""
    }
  },
  created() {
    this.checkUserStatus(),
    this.getMessage()
  },
  methods: {
    writePost() {
      let text = document.getElementById("input").value;
      let user  = firebase.auth().currentUser.email;
      let message = {
        email: user,
        message: text
      };
      firebase.database().ref('chat').push(message);
      document.getElementById("input").value = "";
    },
    getMessage() {
      // console.log("getPost");
      firebase.database().ref('chat').on('value', (data) => {
        this.messages = data.val();
      })
    },
    checkUserStatus() {
      // console.log(firebase.auth().currentUser.email);
      var userisLogged = firebase.auth().currentUser == null;

      if (userisLogged) {
        this.$router.push("/login")
      } else {
        this.currentUser = firebase.auth().currentUser.email;
        this.$forceUpdate();
        // console.log(this.currentUser)
        // console.log(firebase.auth().currentUser.email)
      }
    },
    signOut() {
      firebase.auth().signOut().then(success => {
        // console.log("success");
        this.$router.push("/login")
      }).catch(function(error) {
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
.chat {
  margin-top: 15px;
  color: white;
}
#messages {
  height: 500px;
  width: 90%;
  overflow: scroll;
  margin-bottom: 20px;
  background: rgb(33, 37, 41, 0.7);
}
.messages {
  display: flex;
  flex-direction: column;
}
p {
  color: white;
  margin: 10px;
  word-break: break-all;
}
.user {
  min-width: 120px;
  min-height: 40px;
  background: rgb(129, 126, 126);
  text-align: right;
  max-width: 80%;
  align-self: flex-end;
  border-radius: 10px;
}
.other {
  min-width: 120px;
  min-height: 40px;
  background: rgb(83, 79, 79);
  text-align: left;
  max-width: 80%;
  align-self: flex-start;
  border-radius: 10px;
}
</style>