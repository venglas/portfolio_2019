<template>
    <div class="single-project" v-on:click="show_details">
        <header class="single-project__header">
            <div class="control-panel">
                <button class="button__control-panel button__control-panel--red"></button>
                <button class="button__control-panel button__control-panel--yellow"></button>
                <button class="button__control-panel button__control-panel--green"></button>

                <span class="control-panel__title">
                projekt pierwszy nazwa
                </span>
            </div>
        </header>

        <div class="single-project__img-holder">
            <div class="overlay">
              <header class="overlay__header">
                <h5 class="header">
                  Projekt powstały we współpracy z firmą xyz oparty na technologiach takich jak vue, webpack czy babel.
                </h5>
                <router-link class="read-more" to="/link projektu">Czytaj więcej...</router-link>
              </header>

              <article class="link-section">
                <a href="" class="link">Zobacz projekt</a>
                <a href="" class="link">Zobacz kod projektu</a>
                <a href="" class="link">Dodaj do ulubionych</a>
              </article>

            </div>

            <img src="../assets/sample.png" alt="project img" class="img img--1">
            <img src="../assets/sample2.png" alt="project img" class="img img--2">
        </div>
    </div>
</template>

<script>

export default {
  name: 'SingleProject',
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