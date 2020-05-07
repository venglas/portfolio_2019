<template>
  <article class="view view--project" v-bind:style="{marginLeft: margin_left}">
    <ViewHeader text="Canvas pong game"></ViewHeader>

    <GoBackButton></GoBackButton>

    <article class="section section--project">
      <header class="header">Badoo spamm bot jest rozbudowanym spam botem jak i match botem.</header>

      <section class="content">
        <ProjectSlider
          img1="../../static/img/projects/badoo-spam-bot/slide1.jpg"
          img2="../../static/img/projects/badoo-spam-bot/slide2.jpg"
          img3="../../static/img/projects/badoo-spam-bot/slide3.jpg"
          img4="../../static/img/projects/badoo-spam-bot/slide4.jpg"
          :img5="false"
        ></ProjectSlider>

        <div class="content__description">
          Technologie jakie zostały użyte w projekcie to m.in:
          <ul class="list">
            <li class="list__item">
              <a href="https://www.w3.org/TR/html52/" target="_blank">HTML5</a>
              <img src="../../assets/img/icons/html5.png" alt="html5 icon" class="img icon" />
            </li>

            <li class="list__item">
              <a href="https://www.ecma-international.org/ecma-262/6.0/" target="_blank">ES6</a>
              <img src="../../assets/img/icons/js.png" alt="javascript icon" class="img icon" />
            </li>

            <li class="list__item">
              <a href="https://sass-lang.com/" target="_blank">SCSS</a>
              <img src="../../assets/img/icons/sass.png" alt="scss icon" class="img icon" />
            </li>

            <li class="list__item">
              <a href="https://developer.chrome.com/extensions" target="_blank">Chrome Extension</a>
              <img src="../../assets/img/icons/chrome.png" alt="Chrome icon" class="img icon" />
            </li>

            <li class="list__item">
              <a href="https://webpack.js.org/" target="_blank">Webpack</a>
              <img src="../../assets/img/icons/webpack.png" alt="Webpack icon" class="img icon" />
            </li>

            <li class="list__item">
              <a href="https://babeljs.io/" target="_blank">Babel</a>
              <img src="../../assets/img/icons/babel.png" alt="Babel icon" class="img icon" />
            </li>

            <li class="list__item">
              <a href="https://vuejs.org/" target="_blank">Vue.js</a>
              <img src="../../assets/img/icons/vue.png" alt="vue icon" class="img icon" />
            </li>
          </ul>
        </div>
      </section>
    </article>
  </article>
</template>

<script>
import ViewHeader from "../../components/ViewHeader";
import ProjectSlider from "../../components/ProjectSlider";
import GoBackButton from "../../components/GoBackButton";

export default {
  name: "problemVirtualCd",
  components: { ViewHeader, ProjectSlider, GoBackButton },
  data: () => {
    return {
      margin_left: "180px"
    };
  },
  mounted() {
    if (window.outerWidth <= 768) {
      this.margin_left = 0;
    }
  },

  methods: {}
};
</script>