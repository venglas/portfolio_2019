<template>
    <article class="view view--projekty" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="projekty"></ViewHeader>
      
      <section class="section section--projects">
        <SingleProject 
          project_name="PRO8L3M virtual CD"
          project_description='PO8L3M virtual CD jest to projekt inspirowany krąkiem muzycznym "Ground zero" duetu PRO8L3M.'
          img_1="../../static/img/projects/problem-virtual-cd/slide2.png"
          img_2="../../static/img/projects/problem-virtual-cd/slide1.png"
          project_route="/problem-virtual-cd"
          project_live_link="https://venglas.github.io/PRO8L3eM/dist/index.html"
          project_code_link="https://github.com/venglas/PRO8L3eM"
        ></SingleProject>

        <SingleProject 
          project_name="Odkurza-czary.pl"
          project_description='Odkurza-czary.pl jest to strona prezentująca cennik i usługi firmy odkurza-czary.'
          img_1="../../static/img/projects/odkurza-czary/slide1.png"
          img_2="../../static/img/projects/odkurza-czary/slide2.png"
          project_route="/odkurza-czary"
          project_live_link="http://odkurza-czary.pl/"
          project_code_link="https://github.com/venglas/odkurzacze"
        ></SingleProject>

        <SingleProject 
          project_name="Canvas pong game"
          project_description='Canvas pong game jest prostą grą napisaną w javaScript.'
          img_1="../../static/img/projects/canvas-pong-game/slide1.png"
          img_2="../../static/img/projects/canvas-pong-game/slide2.png"
          project_route="/canvas-pong-game"
          project_live_link="https://venglas.github.io/canvas_pong_game/"
          project_code_link="https://github.com/venglas/canvas_pong_game"
        ></SingleProject>

        <SingleProject 
          project_name="Margonem Multi Bot"
          project_description='Margonem Multi Bot jest to projekt exp bota do gry internetowej margonem. Projekt jest realizowany jako rozszerzenie do przeglądarki chrome.'
          img_1="../../static/img/projects/margonem-multi-bot/slide4.png"
          img_2="../../static/img/projects/margonem-multi-bot/slide1.png"
          project_route="/margonem-multi-bot"
          project_live_link="https://margonembot.wordpress.com/"
          project_code_link="https://github.com/venglas/margonem-bot"
        ></SingleProject>

      </section>
    </article>
</template>

<script>
import ViewHeader from '../components/ViewHeader';
import SingleProject from '../components/SingleProject';

export default {
  name: 'projekty',
  components: {ViewHeader, SingleProject},
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