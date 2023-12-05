<template>
    <Banner/>
    <TechContent/>
</template>
<script setup>
import Banner from "../components/Banner.vue"
import TechContent from "../components/TechContent.vue";
</script>
<style>
.Banner-Container{
    display: flex;
    justify-content: center;
    height: 1500px;
    background-image:url(../assets/banner.png);
    object-fit:fill;
}
.Image-Container{

}
.Banner-Image{
    object-fit:contain;
    height: 200%;
}
</style>