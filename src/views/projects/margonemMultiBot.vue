<template>
    <article class="view view--project" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="Margonem Multi Bot"></ViewHeader>

      <GoBackButton></GoBackButton>

      <article class="section section--project">
        <header class="header">
            Margonem Multi Bot jest to projekt exp bota do gry internetowej margonem. Projekt jest realizowany jako rozszerzenie do przeglądarki chrome.
        </header>

        <section class="content">

            <ProjectSlider
                img1="../../static/img/projects/margonem-multi-bot/slide1.png"
                img2="../../static/img/projects/margonem-multi-bot/slide2.png"
                img3="../../static/img/projects/margonem-multi-bot/slide3.png"
                img4="../../static/img/projects/margonem-multi-bot/slide4.png"
                :img5="false"
            >
            </ProjectSlider>

            <div class="content__video">
                <header class="header">
                    Poniej znajduje się krótki film przedstawiający działanie exp bota.
                </header>
                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/qiHix06F5wc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="content__description">
                <p class="text">
                    Margonem Multi Bot jest botem wykonującym czynności za gracza w celu uzyskania punktów doświadczenia, kolejnych poziomów oraz przedmiotów. 
                    Bot posiada również kilka ulepszeń do gry takich jak zmienione okno walki, czy dodanie lepszego wyglądu czatu obsługa emotikon, powiadomienia dźwiękowe o prywatnych wiadomościach,
                    oraz ulepszenie minimapy.
                </p>
                
                Technologie jakie zostały użyte w projekcie to m.in: 
                <ul class="list">
                    <li class="list__item">
                        <a href="https://www.w3.org/TR/html52/" target="_blank">HTML5</a>
                        <img src="../../assets/img/icons/html5.png" alt="html5 icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://sass-lang.com/" target="_blank">SCSS</a>
                        <img src="../../assets/img/icons/sass.png" alt="scss icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://www.ecma-international.org/ecma-262/6.0/" target="_blank">ES6</a>
                        <img src="../../assets/img/icons/js.png" alt="javascript icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://wordpress.com/" target="_blank">Wordpress</a>
                        <img src="../../assets/img/icons/wordpress.png" alt="wordpress icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://developer.chrome.com/extensions" target="_blank">Chrome Extension</a>
                        <img src="../../assets/img/icons/chrome.png" alt="Chrome icon" class="img icon">
                    </li>

                </ul>
            </div>

        </section>
      </article>
    </article>
</template>

<script>
import ViewHeader from '../../components/ViewHeader';
import ProjectSlider from '../../components/ProjectSlider';
import GoBackButton from '../../components/GoBackButton';

export default {
  name: 'margonemMultiBot',
  components: {ViewHeader, ProjectSlider, GoBackButton},
  data: () => {
    return {
        margin_left: '180px',
    }
  },
  mounted(){
    if (window.outerWidth <= 768){
      this.margin_left = 0;
    }
  },

  methods: {
  }
}
</script>