<template>
  <nav>
    <div id="socialContainer">
      <br />
      <img draggable="false" src="@/assets/leonardoluisk.png" id="myImage" />
    </div>
    <p>Leonardo Klein</p>
    <div id="navContainer">
      <div id="navDiv">
        <a class="socialText" v-on:click="pushToSocial">Social</a>
        <div class="bars"></div>
        <a class="socialText" v-on:click="pushToProjects">Projetos</a>
        <div class="bars"></div>
        <a class="socialText" v-on:click="pushToSkills">Habilidades</a>
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
import skillCards from "@/components/micro/skillCards/skillCards.vue";

export default {
  name: "leftBar",
  components: {
    skillCards,
  },
  methods: {
    pushToSocial() {
      this.$router.push("/");
    },

    pushToProjects() {
      this.$router.push("/projetos");
    },
    pushToSkills() {
      this.$router.push("/skills");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./leftBar.scss";
</style>