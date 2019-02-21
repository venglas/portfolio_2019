<template>
    <div class="view view--projekty" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="o mnie"></ViewHeader>

      <article class="article article--about-me">
        <header class="header">
          Zajmuję się kodowaniem stron internetowych oraz aplikacji. <br>
          Główną biblioteką z której korzystam przy tworzeniu stron i aplikacji to Vue.js
          <img src="../assets/img/icons/vue.png" alt="vue js icon" class="img">
        </header>

        <section class="content">
          
        </section>
      </article>
    </div>
</template>

<script>
import ViewHeader from '../components/ViewHeader';

export default {
  name: 'oMnie',
  components: {ViewHeader},
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

<style lang="scss">
  .article{
    &--about-me{
      .header{
        display: flex;
        align-items: center;

        .img{
          width: 4rem;
          margin-bottom: -1rem;
          animation-name: icon;
          animation-duration: 3s;
          animation-iteration-count: infinite;
        }

        @keyframes icon {
          0%{
            transform: rotateY(0)
          }
          100%{
            transform: rotateY(360deg)
          }
        }
      }
    }
  }
</style>
