<template>
  <div id="cardContainer">
      <h3 id="titleCard">{{ cardText }}</h3>
      <p id="desciptionCard">{{ description }}</p>
    <img :src="resolve_img_url(picture_src)" id="imageCard" />
    <div id="buttonsContainer">
    <a :href="link"><button class="buttonCard">Visitar</button></a>
    <a :href="linkRep"><button class="buttonCard">Repositório</button></a>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "projectCard",
  props: {
    cardText: String,
    link: String,
    description: String,
    picture_src: String,
    linkRep: String,
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context('../../../assets/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    },
  }
}
</script>

<style scoped lang="scss">
@import './projectCard.scss';
</style>