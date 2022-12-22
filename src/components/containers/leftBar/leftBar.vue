<template>
    <nav>
        <div><br>
            <img draggable="false" src="@/assets/leonardoluisk.png" id="myImage" />
        </div>
        <div id="navContainer">
            <div id="navDiv">
                <a class="socialText">Social</a>
                <a class="socialText">Projetos</a>
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
    }

}
</script>

<style>
@import './leftBar.scss';
</style>