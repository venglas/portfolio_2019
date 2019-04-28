<template>
    <ul class="list list-social">
        <li class="list-social__item">
            <a href="https://www.linkedin.com/in/bartek-bober-71b785151" target="_blank">
                <img src="../assets/img/icons/linkedin.png" alt="linkedin icon" class="img">
            </a>
        </li>

        <li class="list-social__item">
            <a href="https://github.com/venglas" target="_blank">
                <img src="../assets/img/icons/github.png" alt="github icon" class="img">
            </a>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'SocialBar',

  data: () => {
    return {
       social_bar_style: {
           position: 'absolute'
       }
    }
  },

  methods: {

  },

  created(){
   
  },

  mounted () {
    
  }
}
</script>