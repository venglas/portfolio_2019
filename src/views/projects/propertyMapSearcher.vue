<template>
    <article class="view view--project" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="Property Map Searcher"></ViewHeader>

      <GoBackButton></GoBackButton>

      <article class="section section--project">
        <header class="header">
            Property Map Searcher to aplikacja PWA powstała na bazie nuxt, vuetify oraz mapboxgl. Słuy do szukania mieszkan umiejscowionych na mapie, oraz filtry do szukania.
        </header>

        <section class="content">

            <ProjectSlider
                img1="../../static/img/projects/property-map-searcher/slide1.jpg"
                img2="../../static/img/projects/property-map-searcher/slide2.jpg"
                img3="../../static/img/projects/property-map-searcher/slide3.jpg"
                img4="../../static/img/projects/property-map-searcher/slide4.jpg"
                :img5="false"
            >
            </ProjectSlider>

            <div class="content__video">
                <header class="header">
                    Poniej znajduje się krótki film przedstawiający działanie Property Map Searchera. Jest to film demonstracyjny. Szczegóły na temat działania znajdują się ponizej.
                </header>
                
                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/lqgx3PNEpJM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="content__description">
                <p class="text">
                    <header class="text__header">
                        Property Map Searcher
                    </header>

                    <hr>

                    <ul class="description-list">
                        <div class="description-list__title">
                            {{description.list.title}}
                        </div>

                        <li class="description-list__item" v-for="(item, i) in description.list.items" :key="i">
                            <span class="title">{{item.title}}</span> - <span class="description">{{item.description}}</span>
                        </li>
                    </ul>
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
                        <a href="https://webpack.js.org/" target="_blank">Webpack</a>
                        <img src="../../assets/img/icons/webpack.png" alt="Webpack icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://vuejs.org/" target="_blank">Vue.js</a>
                        <img src="../../assets/img/icons/vue.png" alt="vue icon" class="img icon" />
                    </li>

                    <li class="list__item">
                        <a href="https://nuxtjs.org/" target="_blank">Nuxt</a>
                        <img src="../../assets/img/icons/nuxt-icon.png" alt="nuxt icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://docs.mapbox.com/mapbox-gl-js/api/" target="_blank">MapBoxGL js</a>
                        <img src="../../assets/img/icons/mapbox-icon.png" alt="mapbox gl icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://vuetifyjs.com/" target="_blank">Vuetify</a>
                        <img src="../../assets/img/icons/vuetify.png" alt="Vuetify icon" class="img icon">
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
  name: 'propertyMapSearcher',
  components: {ViewHeader, ProjectSlider, GoBackButton},
  data: () => {
    return {
        margin_left: '180px',
        
        description: {
            list: {
                title: "Opis funkcji:",
                items: [
                    {title: "Map badges", description: "Pokazuje ceny mieszkan na mapie przypięte do lokalizacji."},
                    {title: "Search List", description: "Umozliwia szukanie mieszkan na podstawie filtrów, oraz po nazwie."},
                    {title: "szukanie po cenie", description: "malejąco, rosnąco"},
                    {title: "szukanie po il. pokojów / łazienek", description: ""},
                    {title: "Szukanie po policies", description: "Umozliwia odfiltrowanie mieszkan, w których dozwolone jest palenie, zwierzęta etc."},
                    {title: "Przenoszenie do mieszkania na mapie", description: "Po kliknięciu w mieszkanie z listy przeniesie nas do jego lokalizacji na mapie"},
                ]
            }
        }
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

<style lang="scss" scoped>    
.text__header {
    padding: 0 0 1.5rem 0;
    font-size: 2rem;
    text-align: center;
}

.description-list {
    &__title {
        padding: 1.5rem 0;
        font-size: 1.7rem;
        font-weight: 600;
    }
    &__item {
        padding: .4rem .3rem .4rem 0;

        .title {
            font-weight: 600;
        }
        .description {
            line-height: 1.5;
        }
    }
}
</style>