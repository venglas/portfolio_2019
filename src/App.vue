<template>
  <div id="app" class="app">
    <Logo></Logo>
    <Menu></Menu>
    <Background></Background>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import './scss/main.scss';
import Background from './components/Background';
import Menu from './components/Menu';
import Logo from './components/Logo';

export default {
  name: 'App',
  components: {Background, Menu, Logo}
}
</script>