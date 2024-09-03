<!-- 
    How to make form in vue js
    Make a component and import in app.vue file
    Make some fields
    Make function for submit a function
    add error validation
    -->
    <template>
<div>
  <p v-if="error.length">
    <b>Please correct the following errors</b>
    <ul>
      <li v-for="e in error" v-bind:key="e.id">
        {{ e }}
      </li>
    </ul>


  </p>
    <form  @submit="logindata" >
    <input type="text" placeholder="enter your name" name="" id="" v-model="username"><br><br>
    <input type="password" placeholder="enter your password" name="" id="" v-model="password"><br><br>
    <button type="submit">Login</button>
</form>
</div>
    </template>
    <script>
    export default {
  name:'fromValidation',

  data(){
       return{
                error:[],
                username:null,
                password:null,
              
       }
  },
  methods:{
    logindata(e){
        this.error=[];
         if(this.username && this.password){

            console.log("no error")
         }
         if(!this.username){
            this.error.push("this username field required")
         }
         if(!this.password){
            this.error.push("this password field required")
         }
        console.log("hello",this.error)
        e.preventDefault();
    }
  }
    }
</script>