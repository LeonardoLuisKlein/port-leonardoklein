<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
html,
body,
#app {
  width: 100vw;
  height: 100vh;
}
* {
  margin: 0;
  padding: 0;
  border: 0px;
  outline: 0px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  user-select: none;
  -webkit-user-drag: none;
}
</style>
