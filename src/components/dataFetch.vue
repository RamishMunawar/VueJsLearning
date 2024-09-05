<!-- 
 Fetch Get API
 install axios and vue-axios
 Make Component
 use mounted life cycle hooks for call
 api fetch api with axios
 use v-if for show list of data
 api url http://dummy.restapiexample.com/api/v1/employees
 -->
 <template>
    <div>
        <h1>employees list</h1>
    </div>
 </template>

 <script>
 import Vue from 'vue';
 import  vueAxios from 'vue-axios';
 import axios from 'axios';
 Vue.use(vueAxios,axios)
  export default{
    name:'dataFetch',
    mounted(){
        Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(resp =>{
            console.log(resp)
        })
    }
  }
</script>