<template>
    <div class="Title-Container">
        <h2>Iniciar Sesión</h2>
    </div>
    <form action="" class="add-account-form">
        <input type="text" v-model="UserName" placeholder="Usuario" />
        <input type="text" v-model="LastName" placeholder="Contraseña" />
        <div class="Btn-Container">
            <Btn @click="$emit('submit', UserName,LastName)" type="submit" :disabled="isLoading" class="btn"><Spinner v-if="isLoading"></Spinner><span v-else>Ingresar</span></Btn>
            <Btn class="btn">Registrarse</Btn>
        </div>
    </form>
    <div class="Addinfo-Container">
        <p class="Addinfo-text">¿ Has olvidado tus datos ?<a> Ingresa a este enlace</a></p>
    </div>
    <div class="Addinfo-Logos">

        <img src="../assets/linkedin.svg" alt="linkedin logo" height="50">
        <img src="../assets/facebook.svg" alt="facebook logo"  height="50">
        <img src="../assets/instagram.svg" alt="instagram logo" height="50">
        <img src="../assets/x-logo.svg" alt="x logo" height="50">
        
    </div>
</template>

<script setup>
import {ref} from 'vue'
import Btn from './Btn.vue';
import Spinner from './Spinner.vue';

defineProps({
    isLoading:{ 
        default:false,
        type:Boolean
    },
});

defineEmits(['submit']);

const UserName = ref("");
const LastName = ref("");


</script>

<style scoped>
.Title-Container{
    margin-top: 1em;
    display: flex;
    justify-content: center;
    
}

.Btn-Container{
    margin-top: 2em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    
}
.add-account-form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

}

.add-account-form input {
    width: 50%;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    margin-bottom: 1em;
    border: solid 2px var(--accent-color);
}

.btn {
    height: 50px;
    display: flex;
    margin-right: 2em;
    margin-left: 2em;
}

.Addinfo-Container{
    display: flex;
    justify-content: center;

}

.Addinfo-text a{
    font-weight: bold;
}

.Addinfo-text a:hover{
    text-decoration: underline;
}

.Addinfo-Logos{
    display: flex;
    align-items: center;
    justify-content: center;
}
.Addinfo-Logos img{
    margin-left: 1em;
}

</style>