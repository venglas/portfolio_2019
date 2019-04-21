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

export default {
  name: 'App',
  components: {Background, Menu, Logo},
  methods: {
    show_logo(){
      this.$store.commit('interface_show');
    },

    hide_logo(){
      this.$store.commit('interface_hide');
    },

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
    }
  },

  created(){
    let all_routes = ['/'];
    this.$router.options.routes.forEach(element => {
      all_routes.push(element.path)
    });

    this.$store.commit('set_all_routes', all_routes);
  },

  watch: {
    $route(){
      this.check_route();
      this.show_horizontal_menu();
    }
    
  }
}
</script>