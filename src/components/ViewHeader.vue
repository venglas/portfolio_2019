<template>
    <header class="view__header">
        <h2 v-show="!prop.text">
            {{text}}
        </h2>

        <h2 v-show="prop.text">
            <span v-for="letter in prop.text" class="header-letter" v-on:click="change_color">
                {{letter}}
            </span>
        </h2>
    </header>
</template>

<script>
export default {
  name: 'ViewHeader',
  props: ['text'],
  data: () => {
    return {
      prop: {
        text: false
      }
    }
  },

  created(){
    let letters = [];
    const scope = this;

    for (let i = 0; i < this.text.length; i++){
        letters.push(this.text[i]);
    }

    this.prop.text = letters;
  },

  methods: {
      change_color(event){
        event.target.classList.toggle('anim');
      }
  },

  mounted(){}
}
</script>