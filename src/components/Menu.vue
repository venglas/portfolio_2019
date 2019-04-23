<template>
    <header class="header header--page">
        <nav class="nav nav--page" v-show="$store.state.interface.menu.isVisible">
            <ul class="list list--page-menu" id="menu" v-bind:class="{hideHorizontalMenu : $store.state.interface.menu.left_side_menu, leftSideMenu : $store.state.interface.menu.left_side_menu}">
                <li class="list__item" v-for="item in menu.routes" v-on:click="$router.push(item), hideMenu($event)">
                    <h1>{{item.name}}</h1>
                </li>
            </ul>
        </nav>

        <!-- <button class="button button--start" v-on:click="start_button" v-show="startButton.show" v-bind:class="{hideStartButton : startButton.hideStartButtonClass}">
            start
        </button> -->
    </header>
</template>

<script>
export default {
  name: 'Menu',

  data: () => {
    return {
        menu: {
            menu: null, // in mounted put there html element
            routes: [],
            // show: true,
            hideMenu: false,
            // leftSideMenu: false,
            menuToggleTutorial: false
        },
        // startButton: {
        //     show: true,
        //     hideStartButtonClass: false,
        // }
    }
  },

  methods: {
    // start_button(){
    //     this.menu.show = true;
    //     this.startButton.hideStartButtonClass = true;
    //     setTimeout(() => {
    //         this.startButton.show = false;
    //     }, 1600); // 1500 cuz it's animation time
    // },

    hideMenu(e){
        this.setActiveRoute(); // show us where we' re in smaller vertical menu via underlined the link
        // this.hideLeftSideMenu(); //uncomment this if u can use function which hide left side menu after clicking
        e.target.parentElement.style.pointerEvents = 'none';

        setTimeout(() => {
            e.target.parentElement.style.pointerEvents = 'auto';
            this.$store.commit('show_left_side_menu');
        }, 500)
    },

    hideLeftSideMenu(){
        if (this.menu.leftSideMenu === true) {
            //here is place for code function which hide menu after clicking
        }
    },

    setActiveRoute(){
        const scope = this;
        function reset(){
            for (let i = 0; i <= scope.menu.menu.children.length - 1; i++) {
                scope.menu.menu.children[i].classList.remove('active_link');
            }
        }

        if (this.$store.state.interface.menu.isVisible === "false") {
            switch(this.$router.app._route.name){
                case 'projekty':
                    reset();
                    this.menu.menu.children[0].classList.add('active_link');
                break;

                case 'o mnie':
                    reset();
                    this.menu.menu.children[1].classList.add('active_link');
                break;

                case 'cv':
                    reset();
                    this.menu.menu.children[2].classList.add('active_link');
                break;
            }
        }
    },

    // menuAutoToggle(){
    //     if (this.menu.menuToggleTutorial === false) {
    //         this.menu.menuToggleTutorial = true;
    //         setTimeout(() => {
    //             this.menu.menu.style.left = '0px';
    //             setTimeout(() => {
    //                 this.menu.menu.style.left = `-${this.menu.menu.offsetWidth - 17}px`;
    //             }, 2000);
    //         }, 200);
    //     }
    // }

    // autoShowLeftSideMenu(){

    // }
  },

  created(){
    let menu = [];
    menu.push( this.$router.options.routes[0], this.$router.options.routes[2], this.$router.options.routes[3]);
    
    this.menu.routes = menu;
  },

  mounted () {
    this.menu.menu = document.querySelector('#menu');
    
    window.addEventListener('resize', () => {
        setTimeout(() => {
            // console.log(`${this.menu.menu.offsetWidth + 25}px`)
            this.$store.commit('set_menu_width', `${this.menu.menu.offsetWidth + 25}px` );
        }, 500);
    });
  }
}
</script>