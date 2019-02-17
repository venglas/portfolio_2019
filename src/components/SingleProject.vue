<template>
    <div class="single-project" v-on:click="show_details">
        <header class="single-project__header">
            <div class="control-panel">
                <button class="button__control-panel button__control-panel--red"></button>
                <button class="button__control-panel button__control-panel--yellow"></button>
                <button class="button__control-panel button__control-panel--green"></button>

                <span class="control-panel__title">
                    {{project_name}}
                </span>
            </div>
        </header>

        <div class="single-project__img-holder">
            <div class="overlay">
              <header class="overlay__header">
                <h5 class="header">
                  {{project_description}}
                </h5>
                <router-link class="read-more" v-bind:to="project_route">Czytaj więcej...</router-link>
              </header>

              <article class="link-section">
                <a href="" class="link">Zobacz projekt</a>
                <a href="" class="link">Zobacz kod projektu</a>
                <a href="" class="link">Dodaj do ulubionych</a>
              </article>

            </div>

            <img v-bind:src="img_1" alt="project img" class="img img--1">
            <img v-bind:src="img_2" alt="project img" class="img img--2">
        </div>
    </div>
</template>

<script>

export default {
  name: 'SingleProject',
  props: ["project_name", "project_description", "img_1", "img_2", "project_route"],
  data: () => {
    return {
    }
  },
  mounted(){
  },

  methods: {
   
  }
}
</script>