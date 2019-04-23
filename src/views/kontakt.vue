<template>
    <div class="view view--projekty" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="Kontakt"></ViewHeader>
    </div>
</template>

<script>
import ViewHeader from '../components/ViewHeader';

export default {
  name: 'kontakt',
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
//   .article{
//     &--about-me{
//       .header{
//         display: flex;
//         align-items: center;
//         margin-bottom: 3rem;

//         .img{
//           width: 4rem;
//           margin-bottom: -1rem;
//           animation-name: icon;
//           animation-duration: 3s;
//           animation-iteration-count: infinite;
//         }

//         @keyframes icon {
//           0%{
//             transform: rotateY(0)
//           }
//           100%{
//             transform: rotateY(360deg)
//           }
//         }
//       }

//       .content{
//         div{
//           background-color: aquamarine;
//         }
//       }
//     }
//   }
</style>
