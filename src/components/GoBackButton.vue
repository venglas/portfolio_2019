<template>
    <button v-on:click="$router.go(-1)" class="button button--go-back">
        <img src="../assets/img/icons/arrow.png" alt="back arrow" title="wróc" class="img">
    </button>

</template>

<script>

export default {
  name: 'GoBackButton'
}
</script>