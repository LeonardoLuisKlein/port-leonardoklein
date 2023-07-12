<template>
  <div id="pageSkills">
    <leftBar />
    <Skills />
  </div>
</template>

<script>
import leftBar from "@/components/containers/leftBar/leftBar.vue";
import Skills from "@/components/containers/skills/Skills.vue";

export default {
    components: {
        leftBar, Skills
  },
}
</script>

<style lang="scss" scoped>
@import './paginaSkills.scss';
</style>