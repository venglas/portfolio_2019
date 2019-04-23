<template>
  <div class="single-ability">
    <label for="ability" class="single-ability__name">{{ability_name}}</label>
    <progress id="ability" max="100" v-bind:value="ability_value" class="single-ability__value"> {{ability_value}}% </progress>
  </div>
</template>

<script>

export default {
  name: 'SingleAbility',
  props: ["ability_name", "ability_value"],
  data: () => {
    return {
    }
  },
  mounted(){
  },

  methods: {}
}
</script>