<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="" target="_blank">
           E Shop Vendor's Admin
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/">Sign up</router-link>
          </li>
          <li class="nav-item">
             <router-link class="btn btn-outline-primary" to="/test">Test Page</router-link>
          </li>
          <li class="nav-item">
             <router-link class="btn btn-outline-primary" to="/modal">Modal Page</router-link>
          </li>
          <li class="nav-item">
             <router-link class="btn btn-outline-primary" to="/page">Input Page</router-link>
          </li>
          <li class="nav-item">
             <router-link class="btn btn-outline-primary" to="/loader">Loader</router-link>
          </li>
          <li class="nav-item">
             <router-link class="btn btn-outline-primary" to="/table">Table</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Login from './components/Login.vue'

// export default {
//   name: 'App',
//   components: {
//     Login
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
