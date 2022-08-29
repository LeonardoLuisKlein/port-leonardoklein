<template>
  <div id="tab">
    <div id="principal"><br>
      <div id="name">
      <Titles type="h1" title="Leonardo" nameClass="firstName"/>
      <Titles type="h1" title="Klein" nameClass="lastName"/>
      </div>
      <Texts text="Três Arroios - RS" />
      <Texts text="leonardoluis.klein@outlook.com" />
    </div>
    <div id="sobre"><br>
      <Titles type="h2" title="Sobre:" />
      <Texts
        text="Natural de Três Arroios, apaixonado por tecnologia e programação. Cursando Ciência da Computação na URI Erechim" />
    </div>
    <div id="experiencias"><br>
      <Titles type="h2" title="Experiências:" />
      <Texts text="Programa de bolsas Vue.js com AEM na empresa Compass.uol" />
      <Texts text="23/05 - 21/08" />
    </div>
    <div id="skills"><br>
      <Titles type="h2" title="Skills:" />
      <img alt="Leo-Js" height="30" width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
      <img alt="Leo-Ts" height="30" width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
      <img alt="Leo-Vue" height="30" width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg">
      <img alt="Leo-HTML" height="30" width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
      <img alt="Leo-CSS" height="30" width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
      <img alt="Leo-SAAS" height="30" width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg">
    </div>

  </div>
</template>

<script>
import Titles from '@/components/micro/titles/Titles.vue';
import Texts from '@/components/micro/texts/Texts.vue'

export default {
  // eslint-disable-next-line
  name: 'Tab',
  components: {
    Titles, Texts,
  }
}
</script>

<style scoped lang="scss">
@import './Tab.scss';
</style>