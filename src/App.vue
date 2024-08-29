<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Props in vue js"/>
  <!-- <Homepage data="Ramish Munawar" msg="new"/>  -->
  <!-- <childComponent /> -->
   <Templates />
   <!-- <htmlStyle /> -->
    <!-- <DataBinding /> -->
     <Props v-bind:users='users'/>
</div>
</template>

<script>
// import childComponent from './components/childComponent.vue'
import HelloWorld from './components/HelloWorld.vue'
// import Homepage from './components/Homepage.vue'
// import Templates from './components/Templates.vue'
// import htmlStyle  from './components/htmlStyle.vue'
// import DataBinding from './components/DataBinding.vue'
import Props from './components/Props.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    // Homepage,
    // childComponent,
    // Templates,
    // htmlStyle
    // DataBinding
    Props
  },
  data(){
    return{
      users:[
        {name:'Ramish',email:'ramishworld@gmail.com'},
        {name:'uzair',email:'Uzairworld@gmail.com'},
        {name:'umair',email:'umairworld@gmail.com'},
        {name:'Danish',email:'danishworld@gmail.com'}
      ]
    }
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
