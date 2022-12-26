<template>
  <div id="projects">
    <Titles type="h1" title="Projetos Web" nameClass="firstName" />
    <projectCard 
    cardText="Certificate Additions" 
    description="Projeto web manuseando formulários utilizando Vue.js" 
    link="https://lustrous-fenglisu-bcbc28.netlify.app/#/" 
    linkRep="https://github.com/LeonardoLuisKlein/desafioCompass_SquadGreen"
    picture_src="certAdd.png"/>
    <!-- <projectCard cardText="Compass Logon" description="Projeto web consumindo API's utilizando Vue.js" link="https://lustrous-fenglisu-bcbc28.netlify.app/#/" picture_src="reactWether.png"/> -->
    <projectCard 
    cardText="Weather App" 
    description="Projeto web consumindo API's utilizando React.js" 
    link="https://dulcet-granita-671b0d.netlify.app/" 
    linkRep="https://github.com/LeonardoLuisKlein/reactWeatherApp"
    picture_src="reactWether.png"/>
    <projectCard 
    cardText="Calculadora IMC"
    description="Projeto web utilizando React.js" 
    link="https://effulgent-croissant-fdd404.netlify.app/" 
    linkRep="https://github.com/LeonardoLuisKlein/react_test"
    picture_src="calculadoraImc.png"/>
  </div>
</template>

<script>
import projectCard from '../../micro/projectCard/projectCard.vue'
import Titles from '@/components/micro/titles/Titles.vue'

export default {
// eslint-disable-next-line
name: "Projetos",
components: {
  projectCard, Titles
}
}
</script>

<style scoped lang="scss">
@import 'Projetos.scss';
</style>