<template>
    <nav id="bar">
        <div><br>
            <img draggable="false" src="@/assets/leonardoluisk.png" id="myImage" />
        </div>
        <div id="socialContainer"><br>
            <p id="socialBar">Social</p><br>
            <skillCards type="Github" />
            <skillCards type="Insta" />
            <skillCards type="Linkedin" />
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