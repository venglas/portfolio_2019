<template>
  <div id="app">
    <Background></Background>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Background from './components/Background';

export default {
  name: 'App',
  components: {Background}
}
</script>