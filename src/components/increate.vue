<!--
beforeCreate and created life cycle hooks
how they work
how to use them 
  -->

  <template>
 <div>
    <h1>{{ name }}</h1>
 </div>
  </template>
  <script>
export default{
    name:'increate',

    data(){
      return{
        name:"Ramish munawar"
      }
    },
    created(){
      

      console.log("Create",this.name)
    },
    beforeCreate(){
      this.name="ra"
      console.log("before Create", this.name)
    }

}
</script>