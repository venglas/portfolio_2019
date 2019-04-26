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
  data:() => {
    return{
      start_route: '',
      // view_scroll_position: this.$router.app.$el.children[3].scrollTop
    }
  },
  methods: {
    show_logo(){
      this.$store.commit('interface_show'); // this can't be a commit via store 
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
    },

    checkStartRoute(){
      this.start_route = this.$route.path;

      if (this.start_route !== '/'){
        // this.$store.commit('hide_horizontal_menu');
        this.$store.commit('show_left_side_menu');        
      }
    },

    checkScrollHeight(){
      const view = {
        height: this.$router.app.$el.children[3].offsetHeight,
        scroll_height: this.$router.app.$el.children[3].scrollHeight
      }

      if (view.height < view.scroll_height) {
        this.$store.commit('show_scroll_arrow');
      } else {
        this.$store.commit('hide_scroll_arrow');
      }
    },

    checkScrollPosition(){
      console.log(this.$router.app.$el.children[3].scrollTop)
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

  mounted(){
    this.checkScrollHeight();
    this.checkScrollPosition();
  },

  watch: {
    $route(){
      this.check_route();
      this.show_horizontal_menu();
      this.checkScrollHeight();
    }

    //here should be code for checking every scroll posiotion time in view
  }
}
</script>