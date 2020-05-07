<template>
  <article
    class="view view--projekty"
    v-bind:style="{marginLeft: margin_left}"
    v-on:scroll="setScrollPosition"
  >
    <ViewHeader text="projekty"></ViewHeader>

    <section class="section section--projects">
      <SingleProject
        project_name="PRO8L3M virtual CD"
        project_description="PO8L3M virtual CD jest to projekt inspirowany krąkiem muzycznym 'Ground zero' duetu PRO8L3M."
        img_1="../../static/img/projects/problem-virtual-cd/slide2.jpg"
        img_2="../../static/img/projects/problem-virtual-cd/slide1.jpg"
        project_route="/problem-virtual-cd"
        project_live_link="https://venglas.github.io/PRO8L3eM/dist/index.html"
        project_code_link="https://github.com/venglas/PRO8L3eM"
      >
        <ProjectTag type="finished">Finished</ProjectTag>
      </SingleProject>

      <SingleProject
        project_name="Odkurza-czary.pl"
        project_description="Odkurza-czary.pl jest to strona prezentująca cennik i usługi firmy odkurza-czary."
        img_1="../../static/img/projects/odkurza-czary/slide1.jpg"
        img_2="../../static/img/projects/odkurza-czary/slide2.jpg"
        project_route="/odkurza-czary"
        project_live_link="http://odkurza-czary.pl/"
        project_code_link="https://github.com/venglas/odkurzacze"
      >
        <ProjectTag type="finished">Finished</ProjectTag>
      </SingleProject>

      <SingleProject
        project_name="Canvas pong game"
        project_description="Canvas pong game jest prostą grą napisaną w javaScript."
        img_1="../../static/img/projects/canvas-pong-game/slide1.jpg"
        img_2="../../static/img/projects/canvas-pong-game/slide2.jpg"
        project_route="/canvas-pong-game"
        project_live_link="https://venglas.github.io/canvas_pong_game/"
        project_code_link="https://github.com/venglas/canvas_pong_game"
      >
        <ProjectTag type="finished">Finished</ProjectTag>
      </SingleProject>

      <SingleProject
        project_name="Margonem Multi Bot"
        project_description="Margonem Multi Bot jest to projekt exp bota do gry internetowej margonem. Projekt jest realizowany jako rozszerzenie do przeglądarki chrome."
        img_1="../../static/img/projects/margonem-multi-bot/slide4.jpg"
        img_2="../../static/img/projects/margonem-multi-bot/slide1.jpg"
        project_route="/margonem-multi-bot"
        project_live_link="https://margonembot.wordpress.com/"
        project_code_link="https://github.com/venglas/margonem-bot"
      >
        <ProjectTag type="closed">desolate</ProjectTag>
      </SingleProject>

      <SingleProject
        project_name="Badoo spam bot"
        project_description="Jest to swego rodzaju spam bot jak i match bot pozwalający odfiltrować osoby, z którymi nie chcemy zostać połączeni."
        img_1="../../static/img/projects/badoo-spam-bot/slide4.jpg"
        img_2="../../static/img/projects/badoo-spam-bot/slide1.jpg"
        project_route="/badoo-spam-bot"
        project_live_link="https://github.com/venglas/badoo_bot"
        project_code_link="https://github.com/venglas/badoo_bot"
      >
        <ProjectTag type="closed">desolate</ProjectTag>
      </SingleProject>

      <SingleProject
        project_name="NBA Hall Of Hate"
        project_description="Aplikacja webowa mająca na celu zbieranie opini, oraz w pewnym sensie gra społeczna jak i sieć łącząca fanów NBA :)"
        img_1="../../static/img/projects/nba-hall-of-hate/slide1.jpg"
        img_2="../../static/img/projects/nba-hall-of-hate/slide2.jpg"
        project_route="/nba-hall-of-hate"
        project_live_link="https://lucid-wright-54f76e.netlify.com"
        project_code_link="https://github.com/venglas/nba-hall-of-hate-front"
        project_code_link2="https://github.com/venglas/nba-hall-of-hate"
      >
        <ProjectTag type="inProgress">in progress</ProjectTag>
      </SingleProject>

      <SingleProject
        project_name="IG Helper Tool"
        project_description="IG Helper Tool to narzędzie, które pozwoli Ci łatwiej zarządzać Twoim profilem na portalu instagram oraz zdobyć większą ilość osób, które obserwują Twój profil."
        img_1="../../static/img/projects/ig-helper-tool/slide1.jpg"
        img_2="../../static/img/projects/ig-helper-tool/slide2.jpg"
        project_route="/ig-helper-tool"
        project_live_link="https://github.com/venglas/ig-helper"
        project_code_link="https://github.com/venglas/ig-helper"
      >
        <ProjectTag type="inProgress">in progress</ProjectTag>
      </SingleProject>

      <!-- todo: add project refactorized and rewritied recrutation map application, new application based on map -->
    </section>

    <ScrollDownArrow v-show="this.$store.state.interface.scroll_arrow_info"></ScrollDownArrow>
  </article>
</template>

<script>
import ViewHeader from "../components/ViewHeader";
import SingleProject from "../components/SingleProject";
import ScrollDownArrow from "../components/ScrollDownArrow";
import ProjectTag from "../components/projectTag";
import { debounce } from "lodash";

export default {
  name: "projekty",
  components: { ViewHeader, SingleProject, ScrollDownArrow, ProjectTag },
  data: () => {
    return {
      margin_left: "180px",

      projects: []
    };
  },

  mounted() {
    if (this.$el.scrollHeight > this.$el.clientHeight) {
      this.$store.commit("show_scroll_arrow");
    }

    if (window.outerWidth <= 768) {
      this.margin_left = 0;
    }

    // window.addEventListener('resize', () => {
    //   setTimeout(() => {
    //     this.margin_left = `${this.$store.state.interface.menu_width}`;
    //   }, 200);
    // })
  },

  methods: {
    setScrollPosition: debounce(function() {
      this.$store.commit("setScrollPosition", this.$el.scrollTop);
      this.checkScrollPosition();
    }, 500),

    checkScrollPosition() {
      if (this.$store.state.interface.scroll_position <= 20) {
        this.$store.commit("show_scroll_arrow");
      } else {
        this.$store.commit("hide_scroll_arrow");
      }
    }
  }
};
</script>