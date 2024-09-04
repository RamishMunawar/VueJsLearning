<!-- 
 beforedestory and destory life cycle method
 make toggle feature with button
 define beforeDestory and destory method and use them 
-->
 <template>
  <div>
    <h1>destory</h1>
  </div>
 </template>
 <script>
export default{
    name:'destroyvue',
    beforeUnmount(){
        alert("hello")
        console.log("beforedestory!")
    },
    unmounted(){
        alert("hello")
        console.log("destory")
    }
}
</script>