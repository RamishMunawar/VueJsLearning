<!-- 
    How to make from in vue js
    Make a component and import in app.vue file
    Make input fields
    Add checkbox and radio button
    Define property for form
    Bind input field with property
    submit form
    -->
    <template>
        <div>
            <input type="text" name="" id="" placeholder="enter your name" v-model="signup.username"><br><br>
            <input type="password" name="" id="" placeholder="enter your password" v-model="signup.password"><br><br>
            <p>Chooese your Hobbies</p>
            <input type="checkbox"  id="cricket" value="cricket" v-model="signup.hobbies">
            <label for="cricket">Cricket</label>
            <input type="checkbox"  id="football" value="football" v-model="signup.hobbies">
            <label for="football">FootBall</label><br>
            <p>Chooese your gender</p>
            <input type="radio"  id="male" value="male" v-model="signup.gender">
            <label for="male">Male</label>
            <input type="radio"  id="female" value="female" v-model="signup.gender">
            <label for="female">Female</label><br><br>
            <button v-on:click="submitData()">Submit</button>
        </div>
    </template>
    <script>
     export default {
        name:'signUp',
        data(){
            return{
                signup:{
                username:null,
                password:null,
                hobbies:[],
                gender:null
            }
            }

          
        },
        methods:{
            submitData(){
                console.log(this.signup)
            }
        }
     }
</script>