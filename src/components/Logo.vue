<template>
    <transition name="fade">
        <div class="logo" v-show="$store.state.interface.is_on">
            <div class="logo-border"></div>
            <span class="letter">
                P
            </span>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'Logo',

  data: () => {
    return {}
  },

  methods: {},

  mounted () {}
}
</script>