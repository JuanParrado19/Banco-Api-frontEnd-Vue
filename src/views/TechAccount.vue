<template>
    <div class="Account-Container">
        <SideMenu/>
        <RequestMenu/>
    </div>

</template>
<script setup>
import SideMenu from '../components/SideMenu.vue';
import RequestMenu from '../components/RequestMenu.vue';
</script>
<style scoped>
.Account-Container{
    display: flex;
}
</style>

