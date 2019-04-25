<template>
    <div class="view view--cv" v-bind:style="{marginLeft: margin_left}">
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
          ></SingleAbility>

          <SingleAbility
          ability_name="CSS (SCSS)"
          ability_value="60"
          ></SingleAbility>

          <SingleAbility
          ability_name="RWD"
          ability_value="60"
          ></SingleAbility>

          <SingleAbility
          ability_name="FLEXBOX"
          ability_value="50"
          ></SingleAbility>

          <SingleAbility
          ability_name="bootstrap"
          ability_value="40"
          ></SingleAbility>

          <SingleAbility
          ability_name="javascript"
          ability_value="40"
          ></SingleAbility>

          <SingleAbility
          ability_name="jQuery"
          ability_value="40"
          ></SingleAbility>

          <SingleAbility
          ability_name="vue"
          ability_value="40"
          ></SingleAbility>

          <SingleAbility
          ability_name="react"
          ability_value="10"
          ></SingleAbility>

          <SingleAbility
          ability_name="gulp"
          ability_value="30"
          ></SingleAbility>

          <SingleAbility
          ability_name="c++"
          ability_value="10"
          ></SingleAbility>

          <SingleAbility
          ability_name="nightwatch"
          ability_value="10"
          ></SingleAbility>

          <SingleAbility
          ability_name="parcel"
          ability_value="50"
          ></SingleAbility>

          <SingleAbility
          ability_name="nightwatch"
          ability_value="10"
          ></SingleAbility>

          <SingleAbility
          ability_name="axios"
          ability_value="30"
          ></SingleAbility>

          <SingleAbility
          ability_name="google extension"
          ability_value="40"
          ></SingleAbility>

        </section>

        <section class="article-cv__download-section">
          <h4 class="info">Pobierz pełną wersję CV</h4>
          <button class="button">pobierz</button>
        </section>
      </article>
    </div>
</template>

<script>
import ViewHeader from '../components/ViewHeader';
import SingleAbility from '../components/SingleAbility';

export default {
  name: 'cv',
  components: {ViewHeader, SingleAbility},
  data: () => {
    return {
      margin_left: '180px'
    }
  },
  mounted(){
    window.addEventListener('resize', () => {
        setTimeout(() => {
            this.margin_left = `${this.$store.state.interface.menu_width}`;
        }, 200);
    })
  }
}
</script>