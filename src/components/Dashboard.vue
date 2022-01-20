<template>
 <div class="vue-tempalte">
   <h3>Welcome to Dashboard</h3>
   <h5>{{ email }}</h5>
   <a @click="logout" class="btn btn-primary">Logout</a>
   <modal />
 </div>
</template>

<script>
import axios from 'axios';
import Modal from './Modal.vue';
   //  const headers = {
   //    'Authorization': 'Bearer ' + this.$route.params.token
   //  };

export default {
  components: { Modal },
  
  data() {
     return {
        email: '',
        token: ''
     } 
  },
  methods:{   
   logout() {
       alert(this.token);
      axios.get('http://192.168.19.106/laravel-jwt-auth/public/api/logout', 
      {

         headers: {
          'Authorization': 'Bearer ' + this.token
        }

      },
          {
          withCredentials: true
          }
      )
      .then(response => {
            this.errors = response.error
            //alert(response.request.response.error.email)
          // alert(response.data.error.email);
           console.log(response);

           //router.push({ name: 'user', params: { userId: '123' } })

           this.$router.push({ name: 'login' })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  created() {
      this.email = this.$route.params.email;
      this.token = this.$route.params.token;
  }
}
</script>

<style>
.vertical-center h5 {
   text-align: center;
}
</style>