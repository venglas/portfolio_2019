<template>
  <div id="app" class="app" v-on:mouseover="show_logo" v-on:mouseleave="hide_logo">
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
  components: {Background, Menu, Logo},
  methods: {
    show_logo(){
      this.$store.commit('interface_show');
    },
    hide_logo(){
      this.$store.commit('interface_hide');
    }
  }
}
</script>