<template>
    <div id="pages">
        <leftBar />
    <div id="tab">
        <Titles type="h1" title="SALMOS 37" nameClass="titleCenter"/>
    <br />
    <Texts nameClass="centerText" text="5: Entrega o teu caminho ao Senhor; confia nele, e ele o fará."/>
    <br/>
    <Texts nameClass="centerText" text="6: E ele fará sobressair a tua justiça como a luz, e o teu juízo, como o meio-dia."/>
    <br/>
    <Texts nameClass="centerText" text="7: Descansa no Senhor, e espera nele; não te indignes por causa daquele que prospera em seu caminho, por causa do homem que executa astutos intentos."/>
    <br/>
    <Texts nameClass="centerText" text="8: Deixa a ira, e abandona o furor; não te indignes, porque isso só leva ao mal."/>
</div>
</div>
  </template>
  
  <script>
  import leftBar from '../leftBar/leftBar.vue'
  import Titles from "@/components/micro/titles/Titles.vue";
  import Texts from "@/components/micro/texts/Texts.vue";
  
  export default {
    // eslint-disable-next-line
    name: "Pages",
    components: {
      Titles,
      Texts,
      leftBar
  },
  };
  </script>
  
  <style scoped lang="scss">
  @import "./Pages.scss";
  </style>