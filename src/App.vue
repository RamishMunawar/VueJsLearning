<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <Homepage data="Ramish Munawar" msg="new"/>  -->
  <!-- <childComponent /> -->
   <Templates />
   <htmlStyle />
</div>
</template>

<script>
// import childComponent from './components/childComponent.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Homepage from './components/Homepage.vue'
// import Templates from './components/Templates.vue'
import htmlStyle  from './components/htmlStyle.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Homepage,
    // childComponent,
    // Templates,
    htmlStyle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
