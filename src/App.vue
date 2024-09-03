<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld />
  <!-- <h1>From with checkbox and radio button in vue js</h1> -->
  <!-- <h1>simple From in vue js</h1> -->
  <h1>validation From in vue js</h1>
  <!-- <h1>{{ title }}</h1> -->
  <!-- <Homepage data="Ramish Munawar" msg="new"/>  -->
  <!-- <childComponent /> -->
   <Templates />
   <!-- <htmlStyle /> -->
    <!-- <DataBinding /> -->
     <!-- <Props v-bind:users='users'/> -->
      <!-- <childToParentProps v-on:changetitle="updateTitle($event)"/> -->
       <!-- <signUp /> -->
        <!-- <simpleFrom /> -->
         <formValidation />
</div>
</template>

<script>
// import childComponent from './components/childComponent.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Homepage from './components/Homepage.vue'
// import Templates from './components/Templates.vue'
// import htmlStyle  from './components/htmlStyle.vue'
// import DataBinding from './components/DataBinding.vue'
// import Props from './components/Props.vue'
// import childToParentProps from './components/childToParentProps.vue'
// import signUp  from './components/signUp.vue'
// import simpleFrom from './components/simpleFrom.vue'
import formValidation from './components/formValidation.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Homepage,
    // childComponent,
    // Templates,
    // htmlStyle
    // DataBinding
    // Props
    // childToParentProps,
    // signUp
    // simpleFrom
    formValidation

    
   
  },
  data(){
        return{
          title:"props parent"
        }
    },
    methods:{
      updateTitle(title){
        this.title=title;
      }
    }
  // data(){
  //   return{
  //     users:[
  //       {name:'Ramish',email:'ramishworld@gmail.com'},
  //       {name:'uzair',email:'Uzairworld@gmail.com'},
  //       {name:'umair',email:'umairworld@gmail.com'},
  //       {name:'Danish',email:'danishworld@gmail.com'}
  //     ]
  //   }
  // }
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
