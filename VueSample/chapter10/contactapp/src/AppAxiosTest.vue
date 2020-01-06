<template>
    <div id="app">
        <div class="container">
            <div class="form-group">
                <button @click="fetchContacts">1 page contacts search</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="name" placeholder="Input Name"/>
                <input type="text" v-model="tel"  placeholder="input phone number"/>
                <input type="text" v-model="address" placeholder="input address" />
                <button @click="addContact">Add Contacts</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no" />
                <button @click="fetchContactOne"> 1 Contact search</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no" />
                <input type="text" v-model="name" placeholder="Input Name"/>
                <input type="text" v-model="tel"  placeholder="input phone number"/>
                <input type="text" v-model="address" placeholder="input address" />
                <button @click="updateContact">Modify</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no"/>
                <button @click="deleteContact">Delete</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no" />
                <input type="file" ref="photofile" name="photo"/>
                <button @click="changePhoto">Modified File</button>
            </div>
        </div>
        <span>Output Json</span>
        <div id="result" class="container">
            <xmp>{{result}}</xmp>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      no: 0,
      name: '',
      tel: '',
      address: '',
      result: null
    }
  },
  methods: {
    fetchContacts: function () {
      axios({
        method: 'GET',
        url: '/api/contacts',
        params: {pageno: 1, pagesize: 5}
      }).then((response) => {
        window.console.log(response)
        this.result = response.data
      }).catch((ex) => {
        window.console.log('Error : ', ex)
      })
    },
    addContact: function () {
      axios.post('/api/contacts',
        {name: this.name, tel: this.tel, address: this.address})
        .then((response) => {
          window.console.log(response)
          this.result = response.data
          this.no = response.data.no
        })
        .catch((ex) => {
          window.console.log('add Contact Error : ', ex)
        })
    },
    fetchContactOne: function () {
      axios.get('/api/contacts', {
        params: {pageno: 1, pagesize: 5}
      }).then((response) => {
        window.console.log(response)
        this.result = response.data
      }).catch((ex) => {
        window.console.log('fetchContactOne Error: ', ex)
      })
    },
    updateContact: function () {
      axios.put('/api/contacts/' + this.no,
        {name: this.name, tel: this.tel, address: this.address})
        .then((response) => {
          window.console.log(response)
          this.name = ''
          this.tel = ''
          this.address = ''
          this.result = response.data
        }).catch((ex) => {
          window.console.log('updateContact Error :', ex)
        })
    },
    deleteContact: function () {
      axios.delete('/api/contacts/' + this.no)
        .then((response) => {
          window.console.log(response)
          this.result = response.data
        })
        .catch((ex) => {
          window.console.log('deleteContact Error : ', ex)
        })
    },
    changePhoto: function () {
      var data = new FormData()
      var file = this.$refs.photofile.files[0]
      data.append('photo', file)

      axios.post('/api/contacts/' + this.no + '/photo', data)
        .then((response) => {
          this.result = response.data
        }).catch((ex) => {
          window.console.log('update photo failed : ', ex)
        })
    }
  }
}
</script>
<style>
    @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");

    #app{
        font-family:'Avenir', HElvetica, Arial, sans-serif;
        -webkit-font-smoothing : antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color:#2c3e50;
        margin-top:60px;
    }

    .container{border:solid 1px gray; padding: 10px; margin-bottom:10px; text-align:left;}
    #result{text-align:left; padding:20px; border:solid 1px black;}
    .form-group{border:dashed 1px gray; padding: 5px 5px 5px 20px;}

</style>
