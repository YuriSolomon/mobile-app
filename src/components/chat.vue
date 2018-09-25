<template>
<div class="chat">
  <input id="input" class="input" type="text" placeholder="Your message...">
  <button id="create-post" v-on:click="writePost" class="button is-primary">Send</button>
  <div id="messages">
    <div v-for="(key, i) in messages" :key="i">
      <p>{{key.message}}</p>
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
      messages: {}
    }
  },
  created() {
    this.getMessage()
  },
  methods: {
    writePost() {
      let text = document.getElementById("input").value;
      let message = {
        message: text
      };
      firebase.database().ref('chat').push(message);
    },
    getMessage() {
      console.log("getPost");
      firebase.database().ref('chat').on('value', (data) => {
        this.messages = data.val();
      })
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
p {
  color: white;
}
</style>