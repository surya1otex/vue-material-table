<template>
    <div class="vue-tempalte">
        <form @submit.prevent="postPost">
            <h3>Sign In</h3>
                 <ul v-if="errors && errors.length">
                   <li v-for="error of errors" v-bind:key="error.id">
                    {{error.message}}
                   </li>
                 </ul>
            <div class="form-group">
                <label>Email address</label>
                <input type="text" v-model="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>
            <br>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>

            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>

        </form>
    </div>
</template>

<script>
import axios from 'axios';
//const queryString = require('query-string');
export default {
  data() {
    return {
          email: '',
          password:'',
          errors: []
    }
  },


  methods: {
    // Pushes posts to the server when called.
    postPost() {

      axios.post('http://192.168.19.106/laravel-jwt-auth/public/api/login', 
      {

            email: this.email,
            password:this.password,
            grant_type: 'MY_GRANT_TYPE'

      },
          {
              headers: {
                'Content-Type': 'application/json; charset=UTF-8'
           }
          }
      )
      .then(response => {
            this.errors = response.error
            //alert(response.request.response.error.email)
          // alert(response.data.error.email);
           console.log(response);

           //router.push({ name: 'user', params: { userId: '123' } })

          //  if(response.error.email) {
              
          //      this.errors.push('invalid email');
          //  }

           if(response.data.token) {

              //this.$router.push({ name: 'dashboard', params: { email: this.email, token: response.data.token } })
              this.$router.push({ name: 'page'})

           }
      })
      .catch(error => {
        this.errors.push(error)
      })
    }
  }
}
</script>