
<template>
  <div class="chat">
    <div class="login">
        <p class="advice">You must to be logged</p>
        <div class="inputs">
            <input id="textInput" class="email" type="text" placeholder="Your email...">
            <input id="textInput" class="passward" type="text" placeholder="Your passward..."><br>
            <button id="login" class="button is-info">Login!</button>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: "Chat"
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