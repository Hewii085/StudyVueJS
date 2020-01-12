
<template>
  <div>
    <div class="header">
      <h1 class="headerText">OPENSG</h1>
      <nav>
        <ul>
          <li><router-link v-bind:to="{name :'home'}">HOME</router-link></li>
          <li><router-link v-bind:to="{name :'about'}">About</router-link></li>
          <li><router-link v-bind:to="{name :'contacts'}">Contacts</router-link></li>
        </ul>
      </nav>
    </div>

    <div class="contaier">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contacts from './components/Contacts.vue';
import ContactByNo from './components/ContactByNo.vue';
import NotFound from './components/NotFound.vue';
import VueRouter from 'vue-router'

const router = new VueRouter({
  mode : 'history',
  routes : [
    { path:'/', component: Home },
    { path:'/home',name:'home', component: Home },
    { path:'/about',name:'about', component: About },
    { path:'/contacts',name:'contacts', component: Contacts, 
      children : [
        { path : ':no',name :'contactbyno', component : ContactByNo, props:true}
        ]

    },
    {path :'*', component: NotFound}
  ]
})

export default {
  name : 'app',
  router
}
</script>

<style>
.header { background-color:aqua; padding: 10px 0px 0px 0px; }
.headerText { padding: 0px 20px 0px 20px; } 
ul { list-style-type: none; margin: 0; padding: 0;
    overflow: hidden; background-color: purple;  }
li { float: left; }
li a { display: block; color: yellow; text-align: center;
    padding: 14px 16px; text-decoration: none;  }
li a:hover { background-color: aqua; color:black; }#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
