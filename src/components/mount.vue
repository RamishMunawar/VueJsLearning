<!-- 
   beforeMount and mounted life cycle Hooks
   when they work
   how they work
   how to use them
   Example
  -->
   <template>
   <h1 id="demo">mounted</h1>
   </template>
   <script>
    export default{
        name:'mount',
        beforeMount(){
            console.log("beformount",document.getElementById('demo'))
        },
        mounted(){
            console.log("mounted",document.getElementById('demo'))
            
        }

    }
    </script>