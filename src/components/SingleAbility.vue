<template>
  <div class="single-ability">
    <label for="ability" class="single-ability__name">{{ability_name}}</label>
    <progress id="ability" max="100" v-bind:value="value" class="single-ability__progress-bar"> {{value}}% </progress>
  </div>
</template>

<script>

export default {
  name: 'SingleAbility',
  props: ["ability_name", "ability_value"],
  data: () => {
    return {
      value: 0
    }
  },
  mounted(){
    setTimeout(() => {
      this.value = this.ability_value;
    }, 1000);
  },

  methods: {}
}
</script>