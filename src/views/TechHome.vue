<template>
    <Banner/>
</template>
<script setup>
import Banner from "../components/Banner.vue"
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