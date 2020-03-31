<template>
    <article class="view view--project" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="Margonem Multi Bot"></ViewHeader>

      <GoBackButton></GoBackButton>

      <article class="section section--project">
        <header class="header">
           Aplikacja webowa mająca na celu zbieranie opini, oraz w pewnym sensie gra społeczna jak i sieć łącząca fanów NBA. Na celu ma wyłonić najbardziej respektowanego jak i hejtowanego zawodnika sezonu :)
        </header>

        <section class="content">

            <ProjectSlider
                img1="../../static/img/projects/nba-hall-of-hate/slide1.jpg"
                img2="../../static/img/projects/nba-hall-of-hate/slide2.jpg"
                img3="../../static/img/projects/nba-hall-of-hate/slide3.jpg"
                img4="../../static/img/projects/nba-hall-of-hate/slide4.jpg"
                img5="../../static/img/projects/nba-hall-of-hate/slide4.jpg"
            >
            </ProjectSlider>

            <div class="content__description">
                <p class="text">
                     NBA Hall Of Hate jest aplikacją webową. W przyszłości te mobilną. 
                     Uytkownicy mogą oceniać zawodników zarówno pozytywnie jak i negatywnie. 
                     Jest to pewnego rodziaju gra, która ma na celu wyłonie najbardziej hejtowanego jak i najbardziej respektowanego zawodnika NBA danego sezonu.
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
                        <a href="https://wordpress.com/" target="_blank">Java 8</a>
                        <img src="../../assets/img/icons/wordpress.png" alt="wordpress icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://developer.chrome.com/extensions" target="_blank">Vue CLI3 (vuex, vue router)</a>
                        <img src="../../assets/img/icons/chrome.png" alt="Chrome icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://webpack.js.org/" target="_blank">hibernate</a>
                        <img src="../../assets/img/icons/webpack.png" alt="Webpack icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://babeljs.io/" target="_blank">SQL</a>
                        <img src="../../assets/img/icons/babel.png" alt="Babel icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://babeljs.io/" target="_blank">Axios</a>
                        <img src="../../assets/img/icons/babel.png" alt="Babel icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://babeljs.io/" target="_blank">Bootstrap material design</a>
                        <img src="../../assets/img/icons/babel.png" alt="Babel icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://babeljs.io/" target="_blank">Java rest api</a>
                        <img src="../../assets/img/icons/babel.png" alt="Babel icon" class="img icon">
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
  name: 'nbaHallOfHate',
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