<template>
    <div class="view view--cv" v-bind:style="{marginLeft: margin_left}" v-on:scroll="setScrollPosition">
      <ViewHeader text="Curriculum vitae"></ViewHeader>

      <article class="article-cv">
        <header class="article-cv__header">
          <h3 class="name">
            Bartłomiej Bober
          </h3>

          <h4 class="role">
            Junior Front-end developer
          </h4>

          <section class="basics-info">
            <div class="basics-info__item">
              <span class="name">e-mail:</span> bartek.bober97@gmail.com
            </div>

            <div class="basics-info__item">
              <span class="name">Github:</span> <a class="link" href="https://github.com/venglas">github.com/venglas</a>
            </div>
          </section>
        </header>

        <section class="article-cv__info-block article-cv__info-block--experience">
          <header class="header">
            <h4>
              Doświadczenie
            </h4>
          </header>

          <div class="item">
            <h4 class="item__firm-name">
              Life in Mobile:
            </h4>

            <span class="item__work-time">(2018-01 / 2018-10)</span>
            
            <p class="item__position-name">
              Junior front-end developer
            </p>
            
            <p class="item__description">
              Strony konkursów promocyjnych takich produktów jak: Pepsi, Mountain Dew, Heineken, Mentos Webowa i mobilna aplikacja hybrydowa oparta na Vue CLI oraz cordovie.
            </p>
          </div>

        </section>
        
        <section class="article-cv__info-block rticle-cv__info-block--abilities">
          <header class="header">
            <h4>
              Umiejętności
            </h4>
          </header>

          <SingleAbility
          ability_name="HTML"
          ability_value="70"
          description="Pisanie semantycznego kodu HTML nie stanowi dla mnie większych problemów."
          ></SingleAbility>

          <SingleAbility
          ability_name="CSS (SCSS)"
          ability_value="60"
          description="Korzystanie z mixinów, zmiennych, zagnieżdżania, animacji. Metodologia BEM, architektura 7-1."
          ></SingleAbility>
          
          <SingleAbility
          ability_name="FLEXBOX"
          ability_value="40"
          ></SingleAbility>

          <SingleAbility
          ability_name="RWD"
          ability_value="60"
          description="Dostosowywanie kodu, wyglądu pod każde urządzenie."
          ></SingleAbility>

          <SingleAbility
          ability_name="bootstrap"
          ability_value="40"
          ></SingleAbility>

          <SingleAbility
          ability_name="javascript"
          ability_value="35"
          description="Podstawowe zagadnienia umożliwiające swobodne tworzenie mniej skomplikowanych rozwiązań."
          ></SingleAbility>

          <SingleAbility
          ability_name="jQuery"
          ability_value="30"
          ></SingleAbility>

          <SingleAbility
          ability_name="vue (CLI)"
          ability_value="40"
          description="Samodzielne postawienie i rozwijanie projektów opartych na CLI. Korzystanie z Vue Router oraz Vuex."
          ></SingleAbility>

          <SingleAbility
          ability_name="axios"
          ability_value="30"
          description="Wykonywanie prostych zapytań do API."
          ></SingleAbility>

          <SingleAbility
          ability_name="react"
          ability_value="10"
          description="Opanowane podstawowe zagadnienia pozwalające, na szybszy start nauki."
          ></SingleAbility>

          <SingleAbility
          ability_name="google extension"
          ability_value="40"
          description="Postawienie i utrzymanie projektu."
          ></SingleAbility>

          <SingleAbility
          ability_name="nightwatch"
          ability_value="10"
          description="konfiguracja."
          ></SingleAbility>

          <SingleAbility
          ability_name="parcel"
          ability_value="50"
          description="Konfiguracja oraz utrzymanie prostego projektu."
          ></SingleAbility>

          <SingleAbility
          ability_name="gulp"
          ability_value="30"
          description="Podstawowa konfiguracja pozwalająca na utrzymanie prostego projektu."
          ></SingleAbility>

          <SingleAbility
          ability_name="c++"
          ability_value="10"
          description="Podstawowe zagadnienia."
          ></SingleAbility>

        </section>

        <section class="article-cv__download-section">
          <h4 class="info">Pobierz pełną wersję CV<span class="download-info">(.pdf)</span></h4>
          <a href="../static/cv-file/bartlomiej-bober-cv.pdf" class="button" download>pobierz</a>
        </section>
      </article>

      <ScrollDownArrow v-show="this.$store.state.interface.scroll_arrow_info"></ScrollDownArrow>
    </div>
</template>

<script>
import ViewHeader from '../components/ViewHeader';
import SingleAbility from '../components/SingleAbility';
import ScrollDownArrow from '../components/ScrollDownArrow';
import {debounce} from 'lodash';

export default {
  name: 'cv',
  components: {ViewHeader, SingleAbility, ScrollDownArrow},
  data: () => {
    return {
      margin_left: '180px'
    }
  },

  methods: {
    setScrollPosition: debounce( function() {
      this.$store.commit('setScrollPosition', this.$el.scrollTop);

      this.checkScrollPosition();
    }, 500),

    checkScrollPosition(){
      if (this.$store.state.interface.scroll_position <= 20) {
        this.$store.commit('show_scroll_arrow')
      } else {
        this.$store.commit('hide_scroll_arrow')
      }
    }
  },

  mounted(){
    this.checkScrollPosition();

    if (window.outerWidth <= 768){
      this.margin_left = 0;
    }

    window.addEventListener('resize', () => {
      setTimeout(() => {
        // this.margin_left = `${this.$store.state.interface.menu_width}`;
      }, 200);
    })
  }
}
</script>