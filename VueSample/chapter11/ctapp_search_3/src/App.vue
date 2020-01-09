<template>
<div>
  <div>
    <h1></h1>
    <p></p>
  </div>
</div>
</template>

<script>
import ContactList from './components/ContactList'
import CONSTANT from "./Constant.js"

export default {
  name : 'app',
  components :{ContactList},
  data: function(){
    return{
      currentView : null,
      contact :{ no:0, name:'', tel:'',address:'',photo:''},
      contactlist :{
        pageno:1, pagesize: CONF.PAGESIZE, totalcount:0, contacts:[]
      }
    }
  },
  mounted :function(){
    fetchContacts();
  },
  methods : {
    fetchContacts : function() {
      this.$axios.get(CONSTANT.FETCH,{
        params:{
          pageno: this.contactlist.pageno,
          pagesize: this.contactlist.pagesize
        }
      }).then((response)=>{
        this.contactlist = response.data;
      }).catch((ex)=>{
        window.console.log("fetchContacts Error : ", ex);
      })
    }

  }
 
}
</script>

<style>
</style>
