<template>
    <article class="view view--project" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="Canvas pong game"></ViewHeader>

      <GoBackButton></GoBackButton>

      <article class="section section--project">
        <header class="header">
            Canvas pong game jest prostą grą napisaną w javaScript przy uyciu canvas.
        </header>

        <section class="content">

            <ProjectSlider
                img1="../../static/img/projects/canvas-pong-game/slide1.png"
                img2="../../static/img/projects/canvas-pong-game/slide2.png"
                :img3="false"
                :img4="false"
                :img5="false"
            >
            </ProjectSlider>

            <div class="content__description">
                Technologie jakie zostały użyte w projekcie to m.in: 
                <ul class="list">
                    <li class="list__item">
                        <a href="https://www.w3.org/TR/html52/" target="_blank">HTML5</a>
                        <img src="../../assets/img/icons/html5.png" alt="html5 icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://www.ecma-international.org/ecma-262/6.0/" target="_blank">ES6</a>
                        <img src="../../assets/img/icons/js.png" alt="javascript icon" class="img icon">
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
  name: 'problemVirtualCd',
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