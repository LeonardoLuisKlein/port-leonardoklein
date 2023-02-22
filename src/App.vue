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

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-button {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  background: #a3a3a3;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #ffffff;
}
::-webkit-scrollbar-track:active {
  background: #ffffff;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
