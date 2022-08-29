<template>
  <div>
    <Titles type="h1" />
    <Texts text="Teste" />
    <skillCards />
  </div>
</template>

<script>
import Titles from '@/components/micro/titles/Titles.vue';
import Texts from '@/components/micro/texts/Texts.vue'
import  skillCards from '@/components/micro/skillCards/skillCards.vue'

export default {
    // eslint-disable-next-line
    name: 'Tab',
    components: {
        Titles, Texts, skillCards
    }
}
</script>

<style scoped lang="scss">

</style>