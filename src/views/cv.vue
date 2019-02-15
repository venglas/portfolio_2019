<template>
    <div class="view view--projekty" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="cv"></ViewHeader>
    </div>
</template>

<script>
import ViewHeader from '../components/ViewHeader';

export default {
  name: 'cv',
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