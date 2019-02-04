<template>
    <canvas ></canvas>
</template>

<script>
export default {
  name: 'Background',
  data: () => {
    return {
        test: "hello"
    }
  },
  methods: {
  },
  mounted () {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    c.beginPath();
    c.arc(200, 200, 30, Math.PI*2, false);
    c.stroke();

  }
}
</script>

<style>
    canvas{
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
