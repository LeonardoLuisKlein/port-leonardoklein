<template>
  <div v-if="type === 'Github'" href="github.com/LeonardoLuisKlein">
    <img src="@/assets/github.png"/>
    <Texts text="Github"/>
  </div>

  <div v-else-if="type === 'Insta'" href="https://www.instagram.com/leonardoluis.klein/">
    <img src="@/assets/insta.png"/>
    <Texts text="Instagram"/>
  </div>

  <div v-else-if="type === 'Linkedin'" href="https://www.linkedin.com/in/leonardo-luis-klein-00857b237/">
    <img src="@/assets/linkedin.png"/>
    <Texts text="Linkedin"/>
  </div>
</template>

<script>
import Texts from '../texts/Texts.vue';
export default {
    name: "skillCards",
    components: { Texts },
    props:{
        type: String
    }
}
</script>

<style scoped lang="scss">
@import './skillCards.scss';
</style>