<template>
    <header class="header header--page">
        <nav class="nav nav--page" v-show="menu.show">
            <ul class="list list--page-menu" id="menu">
                <li class="list__item" v-for="items in menu.items">
                    <h1>{{items}}</h1>
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
            items: ['start', 'projects', 'about', 'cv'],
            show: false
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
        }, 1500); // 1500 cuz it's animation time
    }
  },

  mounted () {

  }
}
</script>