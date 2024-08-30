<!-- child to parent props send
     Make a child component
     call a function on button click
     emit a event from function
     call parent component function with event emiter
     update Title   
-->
     <template>
      <button v-on:click="updateTitle()">update text data</button>
     </template>
     <script>
     export default {
        name:'childToParentProps',
        methods:{
            updateTitle(){
                this.$emit('changetitle' ,'update parent');
                //changetitle custom event
            }
        }
        
     }
    </script>