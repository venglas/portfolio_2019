<template>
  <div id="app" class="app" v-on:mouseover="show_logo" v-on:mouseleave="hide_logo">
    <Logo></Logo>
    <Menu></Menu>
    <Background></Background>

    <transition name="slide-fade">
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
import './scss/main.scss';
import Background from './components/Background';
import Menu from './components/Menu';
import Logo from './components/Logo';
import {debounce} from 'lodash';

export default {
  name: 'App',
  components: {Background, Menu, Logo},
  data:() => {
    return{
      start_route: ''
    }
  },
  methods: {
    show_logo: debounce( function() {
      this.$store.commit('interface_show');
    }, 250),

    hide_logo: debounce( function() {
      this.$store.commit('interface_hide');
    }, 250),

    check_route(){
      if (!this.$store.state.all_routes.includes(  this.$router.currentRoute.path ) ) {
        this.$router.push('/404')
      }
    },

    show_horizontal_menu(){
      if ( this.$route.path === '/') {
        this.$store.commit('show_horizontal_menu');
        this.$store.commit('hide_left_side_menu');
      }
    },

    checkStartRoute(){
      this.start_route = this.$route.path;

      if (this.start_route !== '/'){
        this.$store.commit('show_left_side_menu');        
      }
    }
  },

  created(){
    let all_routes = ['/'];
    this.$router.options.routes.forEach(element => {
      all_routes.push(element.path)
    });

    this.$store.commit('set_all_routes', all_routes);

    this.checkStartRoute();
  },

  mounted(){},

  watch: {
    $route(){
      this.check_route();
      this.show_horizontal_menu();
    }
  }
}
</script>