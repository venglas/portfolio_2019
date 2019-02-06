<template>
    <div class="logo">
        <div class="logo-border"></div>
        <span class="letter">
            P
        </span>
    </div>
</template>

<script>
export default {
  name: 'Logo',

  data: () => {
    return {
      
    }
  },

  methods: {
  },

  mounted () {
  }
}
</script>

<style>
    .logo{
        margin: 2rem;
        font-size: 2.5rem;
        position: absolute;
    }
    .logo-border{
        border: 2px solid #fff;
        position: absolute;
        width: 3.7rem;
        height: 3.7rem;
        box-shadow: 2px 2px 5px rgba(255, 255, 255, .6);
        transition: all ease 1000ms;
    }
    .logo-border:hover{
        border-radius: 50%;
        transition: all ease 1000ms;
        transform: rotate(180deg);
    }
    .letter{
        display: block;
        margin: .8rem .8rem;
        text-shadow: 2px 2px 7px rgba(255, 0, 0, 1);
    }
</style>
