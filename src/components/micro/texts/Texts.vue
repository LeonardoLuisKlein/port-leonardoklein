<template>
  <p :class="nameClass">{{ text }}</p>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Texts',
    props:{
    nameClass: String,
    text: {
        type: String,
        default: 'text'
    }
    }
}
</script>

<style scoped lang="scss">
@import './Texts.scss';
</style>