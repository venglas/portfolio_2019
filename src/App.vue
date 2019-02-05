<template>
  <div id="app">
    <Menu></Menu>
    <Background></Background>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Background from './components/Background';
import Menu from './components/Menu';

export default {
  name: 'App',
  components: {Background, Menu}
}
</script>