<!-- Templates in vue 
     what is Templates
     Display normal property
     Make button click
     constant tag value
     operators
     add html as property
     Disable button
-->

<template>
    <div>
        <p v-html="rowHtml"></p>
        <!-- <h1>Templates in vue js </h1> -->
        <h3 v-once>{{ name }}</h3>
        <h3>{{ name }}</h3>
        <h3>{{ok?"Ramish" : "umiar"}}</h3>
        <button v-bind:disabled="disablebtn" v-on:click="updateText">Click Me!</button>
    </div>
</template>
<script>
export default {
    name: 'Templates',
    data(){
        return{

            name:'Ramish',
            a:20,
            b:50,
            ok:'Ramish',
            rowHtml: "<h1>Templates in vue js </h1>",
            disablebtn:false
        }
    },
    methods:{
        updateText(){
            this.ok=!this.ok
        }
    } 
};
</script>