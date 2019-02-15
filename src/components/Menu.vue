<template>
    <header class="header header--page">
        <nav class="nav nav--page" v-show="menu.show">
            <ul class="list list--page-menu" id="menu" v-bind:class="{hideHorizontalMenu : menu.hideMenu, leftSideMenu : menu.leftSideMenu}">
                <li class="list__item" v-for="items in menu.items" v-on:click="hideMenu">
                    <h1 v-on:click="$router.push('/test')">{{items}}</h1>
                </li>
            </ul>
        </nav>

        <button class="button button--start" v-on:click="start_button" v-show="startButton.show" v-bind:class="{hideStartButton : startButton.hideStartButtonClass}">
            start
        </button>
    </header>
</template>

<script>
export default {
  name: 'Menu',

  data: () => {
    return {
        menu: {
            menu: null, // in mounted put there html element
            items: ['start', 'projects', 'about', 'cv'],
            show: false,
            hideMenu: false,
            leftSideMenu: false,
            menuToggleTutorial: false
        },
        startButton: {
            show: true,
            hideStartButtonClass: false,
        }
    }
  },

  methods: {
    start_button(){
        this.menu.show = true;
        this.startButton.hideStartButtonClass = true;
        setTimeout(() => {
            this.startButton.show = false;
        }, 1600); // 1500 cuz it's animation time
    },
    hideMenu(){
        this.menu.hideMenu = true;
        setTimeout(() => {
            this.menu.leftSideMenu = true;
            this.menuAutoToggle();
        }, 1000)
    },
    menuAutoToggle(){
        if (this.menu.menuToggleTutorial === false) {
            this.menu.menuToggleTutorial = true;
            setTimeout(() => {
                this.menu.menu.style.left = '0px';
                setTimeout(() => {
                    this.menu.menu.style.left = `-${this.menu.menu.offsetWidth - 20}px`;
                }, 2000);
            }, 200);
        }
    }
  },

  mounted () {
    this.menu.menu = document.querySelector('#menu');

    window.addEventListener('resize', () => {
        setTimeout(() => {
            console.log(`${this.menu.menu.offsetWidth + 25}px`)
            this.$store.commit('set_menu_width', `${this.menu.menu.offsetWidth + 25}px` );
        }, 500);
    });
  }
}
</script>