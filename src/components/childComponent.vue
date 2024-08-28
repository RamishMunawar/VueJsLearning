<template>
    <div class="component-color">

        <h1>component and child</h1>
        <userComponent />
        <secondComponent />
    </div>
</template>
<script>
import UserComponent from './userComponent.vue'
import secondComponent from './secondComponent.vue'
export default{
  name:'childComponent',
    components : {
        UserComponent,
        secondComponent
    }
}
</script>

<style>
.component-color{
    background: #e3d8d8;
    padding: 1px;

}

</style>