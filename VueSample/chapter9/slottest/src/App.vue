<template>
  <div id="app">
    <speech-box :headerText="A.header" :footerText="A.footer">
      <div>
        <p>
          {{A.message}}
        </p>
      </div>
    </speech-box>

    <speech-box class="sanders" :headerText="B.header" :footerText="B.footer">
      <div>
        <p>
          {{B.message}}
        </p>
      </div>
    </speech-box>
  </div>
</template>

<script>
import SpeechBox from './components/SpeechBox.vue'

export default {
  name: 'app',
  components: {
    SpeechBox
  },
  data: function(){
   return{ 
     A:{
      header : "A",
      footer : "2020.1.1",
      message : `efg`
    },
    B:{
      header : "B",
      footer : "2020.2.1",
      message : `asdfasdf`
    }
  };
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
