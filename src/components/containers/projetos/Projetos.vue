<template>
  <div id="projects">
    <Titles type="h1" title="Projetos Web" nameClass="firstName" />
    <projectCard 
    cardText="Certificate Additions" 
    description="Projeto web manuseando formulários utilizando Vue.js" 
    link="https://lustrous-fenglisu-bcbc28.netlify.app/#/" 
    linkRep="https://github.com/LeonardoLuisKlein/desafioCompass_SquadGreen"
    picture_src="certAdd.png"/>
    <projectCard 
    cardText="Compass Logon" 
    description="Projeto web consumindo API's utilizando Vue.js (usuário-admin.admin senha-1234567)" 
    link="https://desafio-vue-squad-red.web.app/" 
    linkRep="https://github.com/eduardonowa/desafioCompass_SquadRed"
    picture_src="logonCompass.png"/>
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
    <projectCard 
    cardText="GitHub finder"
    description="Projeto web utilizando React.js com API'S e TypeScript" 
    link="https://symphonious-paprenjak-a99d8c.netlify.app/" 
    linkRep="https://github.com/LeonardoLuisKlein/GitHubFinder"
    picture_src="ghfinder.png"/>
    <projectCard 
    cardText="ToDo List"
    description="Projeto web utilizando React.js com TypeScript" 
    link="https://fascinating-halva-abefd1.netlify.app/" 
    linkRep="https://github.com/LeonardoLuisKlein/ToDoTS"
    picture_src="todots.png"/>
    <projectCard 
    cardText="Processador de imagens"
    description="Processador de imagens desktop windows form utilizando C#" 
    link="https://portifolio-leonardo.netlify.app/#/" 
    linkRep="https://github.com/LeonardoLuisKlein/ProcessadorDeImagens"
    picture_src="proc.png"/>
    <projectCard 
    cardText="Formulário JS"
    description="Formulário com validações Regex usando React.js" 
    link="https://portifolio-leonardo.netlify.app/#/" 
    linkRep="https://github.com/LeonardoLuisKlein/internReactForm"
    picture_src="intern.png"/>
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