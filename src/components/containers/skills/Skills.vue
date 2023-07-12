<template>
  <div id="skills">
      <Titles type="h1" title="Skills" nameClass="Title" />
      <div id="skillsWrap">
      <div class="skillContainer">
          <Titles type="h3" title="FrontEnd" nameClass="subTitles" />
            <Texts text="HTML"/>
            <Texts text="CSS"/>
            <Texts text="SAAS"/>
            <Texts text="JavaScipt"/>
            <Texts text="Vue.js"/>
            <Texts text="React.js"/>
      </div>
      <div class="skillContainer">
          <Titles type="h3" title="BackEnd" nameClass="subTitles" />
          <Texts text="Jax-RS"/>
          <Texts text="SpringBoot"/>
          <Texts text="Banco de dados PostGres"/>
      </div>
      <div class="skillContainer">
        <Titles type="h3" title="Lógicas" nameClass="subTitles" />
        <Texts text="C#"/>
        <Texts text="Java"/>
        <Texts text="Python"/>
      </div>
      <div class="skillContainer">
        <Titles type="h3" title="Frameworks" nameClass="subTitles" />
        <Texts text="Axios"/>
        <Texts text="Bootstrap"/>
        <Texts text="Styled-components"/>
      </div>
      <div class="skillContainer">
        <Titles type="h3" title="DevOps" nameClass="subTitles" />
        <Texts text="Git"/>
        <Texts text="GitFlow"/>
      </div>
      <div class="skillContainer">
        <Titles type="h3" title="UX/UI" nameClass="subTitles" />
        <Texts text="Adobe Experience Manager (AEM)"/>
        <Texts text="Figma"/>
        <Texts text="Canva"/>
        <Texts text="Adobe Photoshop"/>
      </div>
      <div class="skillContainer">
        <Titles type="h3" title="Gestão" nameClass="subTitles" />
        <Texts text="Scrum"/>
        <Texts text="Kanban"/>
      </div>
    </div>
  </div>
</template>

<script>
import Titles from "@/components/micro/titles/Titles.vue"
import Texts from "@/components/micro/texts/Texts.vue"

export default {
// eslint-disable-next-line
name: "Skills",
components: {
    Titles , Texts
} 
}
</script>

<style lang="scss" scoped>
@import './Skills.scss';
</style>