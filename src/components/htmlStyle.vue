<!-- Class and Style Bindings
     How to use Class
     How to use Style
     Class with object
     Class with array
     Class with condition
     style with property
-->
<template>
    <div>
        <h1 class="textStyle">class and style binding</h1>
        <h1 v-bind:style="{color:'blue'}">class and style binding</h1>
        <h1 v-bind:class="{display:show,displayColor:show}">class binding with object</h1>
        <h1 v-bind:class="[aclass]">class binding with array</h1>
    </div>
    </template>
    <script>
    export default {
        name:'htmlStyle',
        data(){
            return{
                show:true,
                aclass:'arrayClass'
                
            }
        }
    }
    </script>
    
    
    <style>
    .textStyle{
        color:orange;
        
    }
    .display{
        background-color: red;
    }
    .displayColor:hover{
        color:orange;
    }
    .arrayClass{
        background-color: cornflowerblue;
    }
    </style>