<template>
    <article class="view view--projekty" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="PRO8L3M Virtual CD"></ViewHeader>
      
      <article class="section section--project">
        <header class="header">
            PO8L3M virtual CD jest to projekt inspirowany krąkiem muzycznym "Ground zero" duetu PRO8L3M.
        </header>

        <section class="content">

            <ul class="content__slider">
                <li><img src="../../../static/img/projects/problem_virtual_cd_2.png" alt="zrzut ekranu 1" class="img project-img"></li>
                <li><img src="../../../static/img/projects/problem_virtual_cd_1.png" alt="zrzut ekranu 2" class="img project-img"></li>
                <li><img src="../../../static/img/projects/slide1.png" alt="zrzut ekranu 2" class="img project-img"></li>
                <li><img src="../../../static/img/projects/slide2.png" alt="zrzut ekranu 2" class="img project-img"></li>
                <li><img src="../../../static/img/projects/slide3.png" alt="zrzut ekranu 2" class="img project-img"></li>
            </ul>

        </section>
      </article>
    </article>
</template>

<script>
import ViewHeader from '../../components/ViewHeader';
import { setInterval } from 'timers';
import { constants } from 'fs';

export default {
  name: 'problemVirtualCd',
  components: {ViewHeader},
  data: () => {
    return {
        margin_left: '180px',
        slider:{
            counter: 0,
            slider_instance: null,
            time_space: 5000
        }
    }
  },
  mounted(){
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.margin_left = `${this.$store.state.interface.menu_width}`;
      }, 200);
    });

    const slides = document.querySelector('.content__slider').children;

    setTimeout(()=>{
        this.slider_instance = setInterval(() => {

            if ( this.slider.counter < slides.length - 1) {
                slides[this.slider.counter + 1].style.transform = `translateX(-${101*(this.slider.counter+1)}%)`;
            }
            slides[this.slider.counter].style.opacity = "0";

            this.slider.counter++;

            if ( this.slider.counter >= slides.length ) {
                this.slider.counter = 0;

                for (let i = 0; i <= slides.length-1; i++) {
                    slides[i].style.transform = "translateX(0)";
                    slides[i].style.opacity = "1";
                }
            }

        }, this.slider.time_space);
    }, 500);

  },

  methods: {
  }
}
</script>