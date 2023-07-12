<template>
  <div id="tab">
    <div id="principal">
      <br />
      <div id="name">
        <Titles type="h1" title="Leonardo" nameClass="firstName" />
        <Titles type="h1" title="Klein" nameClass="lastName" />
      </div>
      <Texts text="Três Arroios - RS" />
      <Texts text="leonardoluis.klein@outlook.com" />
    </div>
    <div id="sobre">
      <br />
      <Titles type="h2" title="Sobre:" nameClass="subTitles" />
      <Texts
        text="Natural de Três Arroios, apaixonado por tecnologia e programação."
      />
      <Texts
        text="Sempre buscando evoluir e aprimorar meus conhecimentos."
      />
    </div>
    <div id="experiencias">
      <br />
      <Titles type="h2" title="Experiências:" nameClass="subTitles" />
      <Texts text="Programa de bolsas Vue.js com AEM - Compass.uol" />
      <Texts text="23/05 - 21/08" />
    </div>
    <div id="skills">
      <br />
      <Titles type="h2" title="Formação:" nameClass="subTitles" />
      <Texts text="Ciência da Computação - Universidade Regional Do Alto Uruguai e das Missões URI Erechim" />
      <Texts text="2021 - 2024" />
    </div>
    <div id="linguagem">
      <br />
      <Titles type="h2" title="Idioma:" nameClass="subTitles" />
      <Texts text="Português - Nativo" />
      <Texts text="Inglês - Avançado" />
    </div>
  </div>
</template>

<script>
import Titles from "@/components/micro/titles/Titles.vue";
import Texts from "@/components/micro/texts/Texts.vue";

export default {
  // eslint-disable-next-line
  name: "Tab",
  components: {
    Titles,
    Texts
},
};
</script>

<style scoped lang="scss">
@import "./Tab.scss";
</style>