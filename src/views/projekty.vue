<template>
    <article class="view view--projekty" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="projekty"></ViewHeader>
      
      <section class="section section--projects">
        <SingleProject></SingleProject>
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