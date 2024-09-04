<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld />
  <!-- <h1>From with checkbox and radio button in vue js</h1> -->
  <!-- <h1>simple From in vue js</h1> -->
  <!-- <h1>validation From in vue js</h1> -->
   <!-- <h1>filter in vue js</h1> -->
    <!-- <h1>beforecreate life cycle</h1> -->
    <!-- <h1>mountd life cycle</h1> -->
     <h1 v-if="display">beforedestory and destory</h1>
     <button v-on:click="toggle">toggle</button>
   <!-- <h1>{{ name | uCase }}</h1> -->
  <!-- <h1>{{ title }}</h1> -->
  <!-- <Homepage data="Ramish Munawar" msg="new"/>  -->
  <!-- <childComponent /> -->
   <!-- <Templates /> -->
   <!-- <htmlStyle /> -->
    <!-- <DataBinding /> -->
     <!-- <Props v-bind:users='users'/> -->
      <!-- <childToParentProps v-on:changetitle="updateTitle($event)"/> -->
       <!-- <signUp /> -->
        <!-- <simpleFrom /> -->
         <!-- <formValidation /> -->
         <!-- <filterUse /> -->
          <!-- <increate /> -->
           <!-- <mount /> -->
            <destroyvue />
</div>

</template>

<script>
import destroyvue from './components/destroyvue.vue'
// import mount from './components/mount.vue'
// import increate from './components/increate.vue'
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
// import formValidation from './components/formValidation.vue'
// import filterUse   from './components/filterUse.vue'
// import increate from './components/increate.vue'
export default {
  name: 'App',
  components: {
    destroyvue
    // HelloWorld,
    // mount
    // increate  
     // Homepage,
    // childComponent,
    // Templates,
    // htmlStyle
    // DataBinding
    // Props
    // childToParentProps,
    // signUp
    // simpleFrom
    // formValidation
    //  filterUse
  
    
   
  },
  data(){
    return{
         display:true
    }
  },
  methods:{
    toggle(){
      this.display=!this.display;

    }
  }
  // data(){
  //   return{
  //        name:"ramish"
  //   }
  // }
  // data(){
  //       return{
  //         title:"props parent"
  //       }
  //   },
  //   methods:{
  //     updateTitle(title){
  //       this.title=title;
  //     }
  //   }
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
