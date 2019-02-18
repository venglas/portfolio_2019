<template>
    <div>
        <!-- <div class="player">
            <img src="../assets/img/icons/play-button.png" alt="play button" class="img" v-show="isRun">
            <img src="../assets/img/icons/pause-button.png" alt="pause button" class="img" v-show="!isRun">
        </div> -->

        <ul class="content__slider" v-on:click="toggleSlider">
            <li><img v-bind:src="img1" alt="zrzut ekranu 1" class="img project-img"></li>
            <li><img v-bind:src="img2" alt="zrzut ekranu 2" class="img project-img"></li>
            <li><img v-bind:src="img3" alt="zrzut ekranu 3" class="img project-img"></li>
            <li><img v-bind:src="img4" alt="zrzut ekranu 4" class="img project-img"></li>
            <li><img v-bind:src="img5" alt="zrzut ekranu 5" class="img project-img"></li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'ProjectSlider',
  props: ['img1', 'img2', 'img3', 'img4', 'img5'],
  data: () => {
    return {
        slider:{
            counter: 0,
            slider_instance: null,
            slider_length: 0,
            time_space: 3000,
            isRun: true
        }
    }
  },
  mounted(){
    this.startSlider();
  },

  methods: {
    startSlider(){
        const slides = document.querySelector('.content__slider').children;
        this.slider.slider_length = slides.length;

        setTimeout(()=>{
            this.slider.slider_instance = setInterval(() => {

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

        }, 150);
    },

    toggleSlider(){
        if ( this.slider.isRun === true ){
            clearInterval( this.slider.slider_instance );
            this.slider.isRun = false;
        } else if ( this.slider.isRun === false ){
            this.startSlider();
            this.slider.isRun = true;
        }
    }
  }
}
</script>