<template>
    <article class="view view--projekty" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="projekty"></ViewHeader>
      
      <section class="section section--projects">

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
            <!-- after hover there should be displaying other img of project -->
          </div>
          
          <!-- after hover on project square should diplaying lik for live project example, and basic technologies -->

          
        </div>

      </section>
    </article>
</template>

<script>
import ViewHeader from '../components/ViewHeader';

export default {
  name: 'projekty',
  components: {ViewHeader},
  data: () => {
    return {
      margin_left: '180px',
      projects: [],
    }
  },
  mounted(){
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.margin_left = `${this.$store.state.interface.menu_width}`;
      }, 200);
    })
  },

  methods: {
    show_details(){

    }
  }
}
</script>