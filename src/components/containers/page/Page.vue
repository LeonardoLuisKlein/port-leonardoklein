<template>
  <div id="page">
    <leftBar />
    <Tab />
  </div>
</template>

<script>
import leftBar from '../leftBar/leftBar.vue'
import Tab from '../tab/Tab.vue'
export default {
    // eslint-disable-next-line
    name: 'Page',
    components: {
        leftBar, Tab
    }
}
</script>

<style scoped lang="scss">
@import './Page.scss';
</style>