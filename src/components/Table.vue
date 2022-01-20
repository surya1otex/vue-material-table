<template>
  <div>
    <input v-model="test">
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Users</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search"  />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
        <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    
    name: 'TableSearch',
    data: () => ({
      search: null,
      searcheds: [],
      myusers:[],
      users: [
        {
          id: 1,
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          gender: "Male",
          title: "Assistant Media Planner"
        }
      ]
    }),
    methods: {
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {

      }
    },
    created () {

       axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          console.log(response)
          //this.myusers.push(response.data[0]);
          //this.myusers = response.data[0]
          //this.searched = this.users
          //alert(response.data)
            console.log(this.users);
        })
         .catch(function (error) {
           console.log(error);
       });

      this.searched = this.users
      
      console.log(this.myusers)
      //this.searched = response.data[0]
      //this.searched = this.myusers
      this.test = 'Test Vue'

    },
    mounted () {


     this.searched = this.users
    }
  }
</script>

<style>
  .md-field {
    max-width: 300px;
  }
  .inner-block {
      width: 80%;
  }
</style>