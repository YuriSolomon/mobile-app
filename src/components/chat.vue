<template>
<div class="chat container">
  <div class="fixed-bottom">
    <input id="input" class="input" type="text" placeholder="Your message...">
    <button id="create-post" v-on:click="writePost" class="button is-primary">Send</button>
  </div>
  <div class="messages container" id="messages">
    <div class="message m-3" v-for="(key, i) in messages" :key="i">
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
        $(".messages").animate({ scrollTop: $(".messages").prop("scrollHeight") }, 500);
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
.chat {
  margin-top: 15px;
  color: white;
}
.messages {
  background: rgb(33, 37, 41, 0.7);
  min-height: 550px;
}
#messages {
  height: 300px;
  width: 300px;
  overflow: scroll;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
p {
  color: white;
  margin: 10px;
}
.message {
  min-width: 70px;
  min-height: 40px;
  background: grey;
  text-align: right;
  max-width: 80%;
  align-self: flex-end;
  border-radius: 10px;
}
</style>