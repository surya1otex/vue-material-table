<template>
    <div class="vue-tempalte">
        <form @submit.prevent="postPost">
            <h3>Sign Up</h3>
            <div class="form-group">
                <label>Name</label>
                <input type="text" v-model="name" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
          name:'',
          email: '',
          password:'',
          errors: []
    }
  },

  methods: {
    // Pushes posts to the server when called.
    postPost() {
        //alert(this.name);
      axios.post(`http://192.168.19.106/laravel-jwt-auth/public/api/register`, {
 
            name:this.name,
            email: this.email,
            password:this.password

      })
      .then(response => {
          //this.error = response.responseText
          alert(response.error)
          console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>