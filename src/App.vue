<template>
  <div id="app" class="app">
    <Menu></Menu>
    <Background></Background>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import './scss/main.scss';
import Background from './components/Background';
import Menu from './components/Menu';

export default {
  name: 'App',
  components: {Background, Menu}
}
</script>