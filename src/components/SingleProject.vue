<template>
  <div class="single-project" v-on:click="mobileGotoProject">
    <header class="single-project__header">
      <div class="control-panel">
        <button class="button__control-panel button__control-panel--red"></button>
        <button class="button__control-panel button__control-panel--yellow"></button>
        <button class="button__control-panel button__control-panel--green"></button>

        <span class="control-panel__title">{{project_name}}</span>

        <span class="favourite" v-show="isFavourite">
          <img src="../assets/img/icons/star.png" alt="ulubiony" title="Ulubiony projekt" />
        </span>
      </div>
    </header>

    <div class="single-project__img-holder">
      <div class="overlay">
        <header class="overlay__header">
          <h5 class="header">{{project_description}}</h5>
          <router-link class="read-more" v-bind:to="project_route">Czytaj więcej...</router-link>
        </header>

        <article class="link-section">
          <a v-bind:href="project_live_link" target="_blank" class="link">Zobacz projekt</a>
          <a v-bind:href="project_code_link" target="_blank" class="link">Zobacz kod projektu</a>

          <a class="link" v-on:click="favourite" v-show="!isFavourite">Dodaj do ulubionych</a>
          <a class="link" v-on:click="removeFavourite" v-show="isFavourite">Usuń z ulubionych</a>
        </article>
      </div>

      <img v-bind:src="img_1" alt="project img" class="img img--1" />
      <img v-bind:src="img_2" alt="project img" class="img img--2" />

      <slot></slot>
    </div>
  </div>
</template>

<script>
import projectTag from "./projectTag";
export default {
  name: "SingleProject",
  props: [
    "project_name",
    "project_description",
    "img_1",
    "img_2",
    "project_route",
    "project_live_link",
    "project_code_link"
  ],
  components: { ProjectTag: projectTag },
  data: () => {
    return {
      isFavourite: false
    };
  },
  mounted() {
    this.checkFavouriteAndAdd();
  },

  methods: {
    favourite() {
      if (localStorage.getItem("favourites") === null) {
        localStorage.setItem("favourites", JSON.stringify([this.project_name]));
      } else {
        let data = JSON.parse(localStorage.getItem("favourites"));

        data.push(this.project_name);
        let cleared = [...new Set(data)];

        localStorage.setItem("favourites", JSON.stringify(cleared));
      }

      this.checkFavouriteAndAdd();
    },

    checkFavouriteAndAdd() {
      const data = JSON.parse(localStorage.getItem("favourites"));
      if (data) {
        data.forEach(el => {
          if (el === this.project_name) {
            this.isFavourite = true;
          }
        });
      }
    },

    removeFavourite() {
      const data = JSON.parse(localStorage.getItem("favourites"));

      console.log(data);
      data.forEach((el, i) => {
        if (el === this.project_name) {
          data.splice(i, 1);
        }
      });

      this.isFavourite = false;
      localStorage.setItem("favourites", JSON.stringify(data));
    },

    mobileGotoProject() {
      if (window.outerWidth <= 620) {
        this.$router.push(this.project_route);
      }
    }
  }
};
</script>