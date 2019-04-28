<template>
    <div class="contact-item">
        <span class="contact-item__name">e-mail: </span> <span>bartek.bober@gmail.com</span>
    </div>
</template>

<script>

export default {
  name: 'SingleContactItem',
//   props: ["ability_name", "ability_value", "description"],
  data: () => {
    return {
      value: 0
    }
  },
  mounted(){
    // if (this.description === '') {
    //   console.log(this.$el.style.after)
    // }

    // setTimeout(() => {
    //   this.value = this.ability_value;
    // }, 1000);
  },

  methods: {}
}
</script>