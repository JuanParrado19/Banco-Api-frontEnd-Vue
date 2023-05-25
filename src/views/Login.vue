<template>
    <Alert :show="alert.show" :message="alert.message" @close="alert.show = false" :variant="alert.variant" />
    <UserLogin :isLoading="isLogin" @submit="login" v-if="loginAccepted" />
    <UserRegister :isLoading="isLogin" @submit="register" v-if="loginAccepted" />
</template>

<script setup>
import UserRegister from "../components/UserRegister.vue"
import { ref, reactive } from 'vue';
import UserLogin from '../components/UserLogin.vue';
import axios from 'axios';
import Alert from '../components/Alert.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loginAccepted = ref(true);
const isLogin = ref(false);

const alert = reactive({
    show: false,
    message: "",
    variant: "danger"
})
function showAlert(message, variant = "danger") {
    alert.show = true;
    alert.message = message;
    alert.variant = variant;
}

function register(loginId){
    router.push(`home/${loginId}`);
}


function login(UserName, LastName,loginId) {
    isLogin.value = true;
    
    const formdata = {
        "document": loginId,
        "name": UserName,
        "last_name": LastName
    }
    axios.post('/api/usuario/creacion', formdata)
    isLogin.value = true;

    showAlert("Login Complete","info");

    loginAccepted.value=false;
    router.push(`home/${loginId}`);
    return {loginId};

}

</script>