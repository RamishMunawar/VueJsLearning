<!-- 
     Data Binding in Vue js
     what is Data binding
     Make A cpmponent
     Define Property
     Make data binding
     Data binding with multi-line 
-->
<template>
  <h1 style="white-space: pre-line;">{{ message }}</h1>
  <input type="text" v-model="message">
  <!-- <textarea type="text" v-model="message" /> -->
</template>
<script>
export default {
name:'DataBinding',
data(){
    return{

        message:'Hi!'
    }
}
}
</script>