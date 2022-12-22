<template>
    <nav>
        <div><br>
            <img draggable="false" src="@/assets/leonardoluisk.png" id="myImage" />
        </div>
        <div id="navContainer">
            <div id="navDiv">
                <a class="socialText" v-on:click="pushToSocial">Social</a>
                <a class="socialText" v-on:click="pushToProjects">Projetos</a>
            </div>
            <div id="cardsDiv">
                <skillCards type="Github" />
                <skillCards type="Insta" />
                <skillCards type="Linkedin" />
            </div>
        </div>
    </nav>
</template>

<script>
import skillCards from '@/components/micro/skillCards/skillCards.vue'

export default {
    name: 'leftBar',
    components: {
        skillCards
    },
    methods:{
        pushToSocial(){
            this.$router.push('/')
            console.log("Bombando")
        },

        pushToProjects(){
            this.$router.push('/projetos')
            console.log("Bombando2")
        } 
    }

}
</script>

<style>
@import './leftBar.scss';
</style>