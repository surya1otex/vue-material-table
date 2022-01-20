<template>

  <div>
<card-loader :loopCount="4" v-if="loading" />
    <h1>{{ company }}</h1>
    <md-button class="md-raised md-primary" v-on:click="on">Show</md-button>
    <md-button class="md-raised md-primary" v-on:click="off">Hide</md-button>
  </div>
  
</template>

<script>


import CardLoader from "./CardLoader.vue";
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data() {
    return {
      topProducts: [],
      loading: true,
      company: 'E Square System and Technologies'
    };
  },
  components: { CardLoader },
  methods: {
     off: function() {
         this.loading = false;
     },
     on: function() {
         this.loading = true;
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #9e1537;
}
</style>
