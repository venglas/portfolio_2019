<template>
    <transition name="fade">
        <div class="logo" v-show="$store.state.interface.is_on" v-on:click="$router.push('/'); reset_menu(), setHeaderWidth()">
            <div class="logo-border"></div>
            <span class="letter">
              P
            </span>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'Logo',

  data: () => {
    return {
    }
  },

  methods: {
    reset_menu(){
      const menu_list_item = document.querySelector('#menu').children;
      
      for (let i = 0; i <= menu_list_item.length - 1; i++) {
        menu_list_item[i].classList.remove('active_link');
      }
    },

    setHeaderWidth(){
      if (this.$store.state.interface.menu.left_side_menu === true) {
        setTimeout(() => {
          this.$store.commit('setHeaderWidth', '100%');
        }, 200);
      }
    },
  },

  mounted () {}
}
</script>