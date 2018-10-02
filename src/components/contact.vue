<template>
  <div class="contact">
    <h4>Contact</h4>
    <img id="logo" src="../assets/nysl_logo.png" alt="logo">
    <div id="contact-form" class="contact-form">
      <div v-if="isSending" class="loading">Sendig...</div>
      <div class="form">
        <input required name="name"  v-model='name' placeholder="Name" type="text" autocomplete="off"><br>
        <input required name="email" i v-model="email" placeholder="E-mail" type="email" autocomplete="off"><br>
        <textarea name="message" v-model="message" rows="4" placeholder="Message"></textarea><br>
        <button class="button" @click="onSubmit">Send</button>
      </div>
    </div>
    <span>or email us at <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a></span><br>
    <span>We will reply to your email as soon as we can.</span>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: "Contact",
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isSending: false
    }
  },
	methods: {
		onSubmit(evt) {
			evt.preventDefault();
      this.isSending = true;
			setTimeout(() => {
        let form = {
          name: this.name,
          email: this.email,
          message: this.message
        }
        firebase.database().ref('contact').push(form).then(success =>{
          this.isSending = false;
          this.name = '';
          this.email = '';
          this.message = '';
        }).catch(function(error){
          console.log(error)
        })
			}, 1000);
		}
	}
};
</script>

<style scoped>
.contact {
  color: white;
}
h4 {
  margin-top: 70px;
  margin-bottom: 20px;
}
span {
  background: rgb(33, 37, 41, 0.7);
  font-size: 110%
}
#logo {
  width: 40%;
  margin-bottom: 20px;
}
.contact-form {
	font-family: 16px;
	margin: 0 auto;
	max-width: 600px;
	width: 80%;
}
.contact-form {
	border-bottom: solid 1px #ccc;
	margin-bottom: 15px;
}
.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 16px;
}
.contact-form_title {
	color: #333;
	text-align: left;
	font-size: 28px;
}
.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
	border: solid 1px #e8e8e8;
	font-family: 'Roboto', sans-serif;
	padding: 10px 7px;
	outline: none;
}
.contact-form textarea {
	resize: none;
}
.contact-form .button {
	background: #da552f;
	border: solid 1px #da552f;
	color: white;
	cursor: pointer;
	padding: 10px 50px;
	text-align: center;
	text-transform: uppercase;
}
.contact-form .button:hover {
	background: #ea532a;
	border: solid 1px #ea532a;
}
.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
	font-size: 15px;
	border-radius: 3px
}
</style>