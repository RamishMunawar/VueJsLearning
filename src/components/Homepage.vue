<template>
    <div>
    <!-- <h1>Home components</h1> -->
    <!-- <h2>{{data}}</h2>
    <h2>{{msg}}</h2> -->
    <!-- <button v-on:click="hello('vue js')">Click Me!</button> -->
     <!-- <h1 v-if="show">condition if</h1>
     <h1 v-else>condition else</h1>
      <button v-on:click="display" >toggle text</button> -->
      <h1>for loop vue js</h1>
      <table border="1px">
        <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
        <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name}}</td>
            <td>{{ user.email }}</td>
        </tr>
      </table>
</div>
</template>

<script>
export default {
    name:'Homepage',
    props:{
        data:String,
        msg:String
    },
    // methods:{
    //     hello(data){
    //         alert(data)
    //     }
    // }
    // data(){
    //     return {show:true}
    // },
    // methods:{
    //     display(){
    //         this.show=!this.show
    //     }    
    // }
    data(){
         return{
            users: [
            {id:1,name:'ramish',email:'ramishmunawar199@gmail.com'},
            {id:2,name:'umair',email:'umair@gmail.com'},
            {id:3,name:'uzair',email:'uzair@gmail.com'},
            {id:3,name:'uzair',email:'uzair@gmail.com'},
            {id:3,name:'uzair',email:'uzair@gmail.com'},
            {id:3,name:'uzair',email:'uzair@gmail.com'},
        ]   
         }
     
    }
}
</script>