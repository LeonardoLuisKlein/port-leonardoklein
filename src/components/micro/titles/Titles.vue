<template>
  <div>
    <h1 :class="nameClass" v-if="type === 'h1'">{{ title }}</h1>
    <h2 :class="nameClass" v-else-if="type === 'h2'">{{ title }}</h2>
    <h3 :class="nameClass" v-else-if="type === 'h3'">{{ title }}</h3>
    <h4 :class="nameClass" v-else-if="type === 'h4'">{{ title }}</h4>
    <h5 v-else-if="type === 'h5'">{{ title }}</h5>
    <h6 v-else-if="type === 'h6'">{{ title }}</h6>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "Titles",
    props:{
      type: {
            type: String,
            require: true,
        },
        nameClass: {
            type: String,
        },
        title:{
            type: String,
            default: 'null',
        },
    },
}
</script>

<style lang="scss" scoped>
@import "./Titles.scss"
</style>