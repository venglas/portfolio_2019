<template>
    <div class="view" v-bind:style="{marginLeft: margin_left}">
      <h1 style="color: red">PROJEKTY</h1>
      <h1 style="color: red">PROJEKTY</h1>
      <h1 style="color: red">PROJEKTY</h1>
      <h1 style="color: red">PROJEKTY</h1>
      <h1 style="color: red">PROJEKTY</h1>
      <h1 style="color: red">PROJEKTY</h1>
      <h1 style="color: red">PROJEKTY</h1>
      <h1 style="color: red">PROJEKTY</h1>
      <h1 style="color: red">PROJEKTY</h1>
    </div>
</template>

<script>
export default {
  name: 'projekty',
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

<style>
.view{
  position: absolute;
  top: 0;
  left: 0;
}
</style>
