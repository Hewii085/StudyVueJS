<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <child1/>
    <child2/>
    <module1/>
  </div>
</template>

<script>
import Child2 from './components/Child2.vue';
import Child1 from './components/Child1.vue';
//import 순서에 따라 style 적용 순서가 다르다. 아래에 있는것이 마지막 적용본.
import Module1 from './components/Module1.vue';

export default {
  name: 'app',
  components: {
    Child2, Child1, Module1
  },
  data(){
    return{ msg: "Welcome to Your Vue.js App"}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
