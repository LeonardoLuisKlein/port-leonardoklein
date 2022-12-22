<template>
    <div id="pageProjetos">
    <leftBar />
    <Projetos />
  </div>
</template>

<script>
import leftBar from '../leftBar/leftBar.vue'
import Projetos from '../projetos/Projetos.vue'
export default {
    // eslint-disable-next-line
    name: "paginaProjetos",
    components: {
        leftBar, Projetos
    }
}
</script>

<style scoped lang="scss">
@import './paginaProjetos.scss';
</style>