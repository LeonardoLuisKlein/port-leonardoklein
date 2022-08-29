<template>
  <a v-if="type === 'Github'" href="https://github.com/LeonardoLuisKlein">
    <img src="@/assets/github.png"/>
  </a>

  <a v-else-if="type === 'Insta'" href="https://www.instagram.com/leonardoluis.klein/">
    <img src="@/assets/insta.png"/>
  </a>

  <a v-else-if="type === 'Linkedin'" href="https://www.linkedin.com/in/leonardo-luis-klein-00857b237/">
    <img src="@/assets/linkedin.png"/>
  </a>
</template>

<script>
export default {
    name: "skillCards",
    props:{
        type: String
    }
}
</script>

<style scoped lang="scss">
@import './skillCards.scss';
</style>