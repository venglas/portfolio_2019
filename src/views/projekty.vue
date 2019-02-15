<template>
    <article class="view view--projekty" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="projekty"></ViewHeader>
      
      <section class="section section--projects">
        <div class="single-project">
          
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
  }
}
</script>