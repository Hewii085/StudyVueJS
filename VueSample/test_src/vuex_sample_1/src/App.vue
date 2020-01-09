<template>
<div id="app">
  <default-view></default-view>
</div>
</template>

<script>
import DefaultView from './components/TestApp'

export default {
  name : 'app',
  components : {DefaultView}
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
