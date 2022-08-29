<template>
  <div>
    <Titles type="h1" />
    <Texts text="Teste" />
  </div>
</template>

<script>
import Titles from '@/components/micro/titles/Titles.vue';
import Texts from '@/components/micro/texts/Texts.vue'

export default {
    // eslint-disable-next-line
    name: 'Tab',
    components: {
        Titles, Texts
    }
}
</script>

<style scoped lang="scss">

</style>