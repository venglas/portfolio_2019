<template>
    <article class="view view--projekty" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="projekty"></ViewHeader>
      
      <section class="section section--projects">
        <div class="single-project" v-on:click="show_details">
          <header>
            <p>
              nazwa projektu: troche kodu
            </p>
            <p>
              data: 21.12.2018
            </p>
          </header>

          <div class="overlay">
            kliknij po więcej szczegółów
          </div>

          <img src="../assets/sample.png" alt="project img" class="img img--project">

          <footer>
            11.11.2018
          </footer>
        </div>
      </section>
    </article>
</template>

<script>
import ViewHeader from '../components/ViewHeader';

export default {
  name: 'projekty',
  components: {ViewHeader},
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

<style lang="scss">
  .single-project{
    width: 30rem;
    height: auto;
    position: relative;

    footer{
      position: absolute;
      right: 0;
      bottom: 0;
      font-family: 'Libre Barcode 39 Text';
      opacity: 0;
      transition: all ease-in-out 400ms;
      transform: scale(0);
    }

    header{
      position: absolute;
      top: 2rem;
      left: 1rem;
      opacity: 1
    }

    .img:hover ~ footer{
      opacity: 1;
      transform: scale(1)
    }

    .overlay:hover{
      opacity: 1;
    }

    .overlay{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
    }

    .img{
      transition: transform ease-in-out 500ms;
      transition: opacity ease-in-out 600ms;
      opacity: 0.5;
      border: 1px solid white;

       &:hover{
        transform: scale(1.1);
        opacity: 1;
      }
    }

   
  }
</style>
