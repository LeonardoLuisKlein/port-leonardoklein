<template>
  <div>
    <img src="@/assets/github.png"/>
    <Texts text="Github"/>
  </div>
</template>

<script>
import Texts from '../texts/Texts.vue';
export default {
    name: "skillCards",
    components: { Texts }
}
</script>

<style scoped lang="scss">
@import './skillCards.scss';
</style>