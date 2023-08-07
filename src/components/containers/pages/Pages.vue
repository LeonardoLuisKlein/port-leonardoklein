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
    <br/>
    <Titles :type="h2" title="Oração para São Cipriano" nameClass="titleCenter"/>
    <br/>
    <Texts nameClass="centerText" text="Pelos poderes de São Cipriano, eu (diga seu nome) vou conseguir de imediato um emprego bom durante o dia e com um ótimo ordenado.

São Cipriano fazei pois que este pedido se realize de imediato e o emprego bom e com um bom salário surja agora sem demora pelos poderes de São Cipriano.


Eu (diga seu nome) vou agora ter um emprego fixo em uma boa empresa ou outra oportunidade e agora em minhas mãos amarrado para nunca mais fugir de mim.

Irei publicar de imediato essa oração para seu nome ser lembrado, reconhecido e respeitado, em troca de conseguir um bom emprego e um bom ordenado, que me dê o meu bom salário para eu me sustentar, para pagar todas as despesas fixas e dividas e eventuais, que ainda sobre para o meu lazer e também para poupar e manter uma reserva segura no banco, para nunca mais passar nenhuma dificuldade. De imediato durante esse momento, o emprego urgente peço, suplico urgente as treze entidades e as três almas que acompanham São Cipriano, que me atendam o mais rápido e urgente, que eu tenha esse emprego ainda essa semana e nunca mais fique desempregado, e a partir de agora em nome de São Cipriano, das treze entidades e das três almas que vigiam São Cipriano, que a partir da hora que eu fizer essa oração e que eu publicar, aconteça e assim seja! E assim será! E assim está feito! Amém."/>
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