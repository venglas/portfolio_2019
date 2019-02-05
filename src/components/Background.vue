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
    c.fillStyle = 'red';
    c.fillRect(0, 0, canvas.width, canvas.height);


    let cursor = {
        x: 0,
        y: 0
    }
    canvas.addEventListener('mousemove', (ev)=>{
        cursor.x = ev.clientX;
        cursor.y = ev.clientY;
    })

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
            xlength: randFromTo(-20, window.innerWidth + 20),
            ylength: randFromTo(-20, window.innerHeight + 20),
            xspeed: .2,
            yspeed: .3,
            // colors: ['#C7E9F3', '#B3D1DA', '#8FA7AE'],
            colors: ['rgba(0, 255, 255, 0.4)', 'rgba(0, 255, 197, 0.4)', 'rgba(0, 89, 197, 0.4)'],
            colorNumber: 0, // must be number of colors.length - 1
            howMuchLines: 80,
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
            
            el.x += el.xspeed;
            el.y += el.yspeed;
            
            if ( el.x >= window.innerWidth ) {
                el.colorNumber = randFromTo(0, 3)
                el.xspeed = -el.xspeed;
            } else if ( el.x <= 0 ) {
                el.colorNumber = randFromTo(0, 3)
                el.xspeed = -el.xspeed;
            }

            if ( el.y >= window.innerHeight ) {
                el.colorNumber = randFromTo(0, 3)
                el.yspeed = -el.yspeed;
            } else if ( el.y <= 0 ) {
                el.colorNumber = randFromTo(0, 3)
                el.yspeed = -el.yspeed;
            }
            

            c.beginPath();
            c.moveTo(el.x, el.y);

            c.lineTo(el.xlength, el.ylength);
            c.lineTo(el.xlength + 5, el.ylength + 30);
            c.lineTo(el.xlength + 55, el.ylength + 35);

            c.fillStyle = el.colors[el.colorNumber];
            c.strokeStyle = el.colors[el.colorNumber];
            c.fill();
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
        background-color: rgba(0, 65, 90, .8);
    }
</style>
