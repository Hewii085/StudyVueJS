<template>
<div>
  <div>
    <component :is="currentView"></component>
    <contact-list></contact-list>
  </div>
</div>
</template>

<script>
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'
import UpdatePhoto from './components/UpdatePhoto'
import {mapState} from 'vuex'

export default {
  name : 'app',
  components :{ContactList, ContactForm,UpdatePhoto},
  computed : mapState(['currentView'])
}
</script>

<style>
</style>
