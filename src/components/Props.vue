<!--  parent to child
   Props in vue js
   What is Props
   Make A Compoent
   Define Props
   Pass props
   Access Props 
-->
   <template>
    <div>
        <h1>props component</h1>
        <h3 >{{name}}</h3>
        <h4 v-for="user in users" :key="user.name">
                {{ user.name }} -- {{ user.email }}

        </h4>
    </div>
   </template>
   <script>
   export default {
    name:'Props',
    props:['users']
   }
</script>