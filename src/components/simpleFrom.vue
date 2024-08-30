<!--
     How to make form in vue js
     Make 2 input field
     Define Property for form
     Bind input field with property
     Submit Form 
  -->
     <template>
       <div>
           <input type="text" v-model="loginfrom.username" name="username" placeholder="enter your name" id=""><br><br>
           <input type="password" v-model="loginfrom.password" name="password" placeholder="enter your password" id=""><br><br>
            <button v-on:click="loginData">Login</button>
        </div>
     </template>
     <script>
export default{
    name:'simpleFom',
    methods:{
        loginData(){
            console.log("Ramish",this.loginfrom)
        }
    },
    data(){
        return{
            loginfrom:{
              username:null,
              password:null
            }
        }
    }

}
    </script>