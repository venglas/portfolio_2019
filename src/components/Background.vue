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

  methods: {},

  mounted () {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const conf = {
        lineCounter: 200
    }

    function animate () {
        // requestAnimationFrame(animate);
        // c.clearRect(0, 0, window.innerWidth, window.innerHeight);

        // c.beginPath();
        // c.strokeStyle = "red";
        // c.moveTo(Math.random()*window.innerWidth, Math.random()*window.innerHeight);
        // c.lineTo(Math.random()*window.innerWidth, Math.random()*window.innerHeight);
        // c.stroke();

    }

    function rand(how) {
        return Math.random() * how;
    }

    function randFromTo(from, to){
        return Math.floor(Math.random() * to) + from;
    }

    function createLinesInfo () {
        let info = {
            x: rand(window.innerWidth),
            y: rand(window.innerHeight),
            xspeed: randFromTo(1, 200),
            yspeed: randFromTo(1, 200),
            colors: ['#C7E9F3', '#B3D1DA', '#8FA7AE'],
            colorNumber: 0, // must be number of colors.length - 1
            howMuchLines: 100,
        }
        return info;
    }

    let lines = [];
    for (let i = 0; i < createLinesInfo().howMuchLines; i++){
        let linesInfo = createLinesInfo();
        linesInfo.colorNumber = randFromTo(0, 3);
        lines.push(linesInfo);
    }


    function createLines() {
        requestAnimationFrame(createLines);
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        lines.forEach(el => {
            c.beginPath();
            c.strokeStyle = el.colors[el.colorNumber];
            c.moveTo(el.x, el.y);
            c.lineTo(el.xspeed, el.yspeed);
            c.stroke();
        })
    }

       

    createLines();
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
