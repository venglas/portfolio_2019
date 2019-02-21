<template>
    <article class="view view--project" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="Odkurza-czary.pl"></ViewHeader>

      <GoBackButton></GoBackButton>

      <article class="section section--project">
        <header class="header">
            Odkurza-czary.pl jest to strona prezentująca cennik i usługi firmy odkurza-czary, która zajmuje się profesjonalnym czyszczeniem samochodów oraz różnych powierzchni.
        </header>

        <section class="content">

            <ProjectSlider
                img1="../../static/img/projects/odkurza-czary/slide1.png"
                img2="../../static/img/projects/odkurza-czary/slide2.png"
                img3="../../static/img/projects/odkurza-czary/slide3.png"
                img4="../../static/img/projects/odkurza-czary/slide4.png"
                :img5="false"
            >
            </ProjectSlider>

            <div class="content__description">
                <p class="text">
                    Projekt powstał na bazie wcześniej przygotowanego projektu graficznego. Na stronie możemy zobaczyć wachlarz usług firmy odkurza-czary jak i cennik wypoyczalni sprzętu Karcher.
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
                        <a href="https://vuejs.org/" target="_blank">Vue.js</a>
                        <img src="../../assets/img/icons/vue.png" alt="vue icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://cli.vuejs.org/" target="_blank">Vue CLI</a>
                        <img src="../../assets/img/icons/vue.png" alt="vue icon" class="img icon">
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
  name: 'odkurzaCzary',
  components: {ViewHeader, ProjectSlider, GoBackButton},
  data: () => {
    return {
        margin_left: '180px',
    }
  },
  mounted(){
  },

  methods: {
  }
}
</script>