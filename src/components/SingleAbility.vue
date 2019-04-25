<template>
  <div class="single-ability" v-bind:data-title="description">
    <label for="ability" class="single-ability__name">{{ability_name}}</label>
    <progress id="ability" max="100" v-bind:value="value" class="single-ability__progress-bar"> {{value}}% </progress>
  </div>
</template>

<script>

export default {
  name: 'SingleAbility',
  props: ["ability_name", "ability_value", "description"],
  data: () => {
    return {
      value: 0
    }
  },
  mounted(){
    if (this.description === '') {
      console.log(this.$el.style.after)
    }

    setTimeout(() => {
      this.value = this.ability_value;
    }, 1000);
  },

  methods: {}
}
</script>