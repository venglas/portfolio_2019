<template>
  <div id="app">
    <Background></Background>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Background from './components/Background';

export default {
  name: 'App',
  components: {Background}
}
</script>

<style>
  #app {
    background: url('https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  }
</style>
