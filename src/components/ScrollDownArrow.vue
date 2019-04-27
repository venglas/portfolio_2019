<template>
  <img src="../assets/img/icons/arrow.png" alt="scroll down arrow" class="scroll-down-button" v-on:click="scrollDown">
</template>

<script>

export default {
  name: 'ScrollDownArrow',
  data: () => {
    return {
      value: 0
    }
  },
  mounted(){
  },

  methods: {
    scrollDown(){
        this.$el.parentElement.scrollTop = this.$el.parentElement.scrollHeight;
    }
  }
}
</script>

<style>
.scroll-down-button{
    position: absolute;
    bottom: 5rem;
    right: 5rem;
    transform: rotate(-90deg);
    filter: brightness(0) invert(1);
    animation-name: jumpingArrow;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    cursor: pointer;
}
@keyframes jumpingArrow {
    100%{
        transform: rotate(-90deg) translateX(-5px)
    }
}
</style>
