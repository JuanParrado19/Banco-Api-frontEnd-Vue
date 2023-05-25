<template>
    <form action="" class="add-account-form">
        <input type="text" v-model="UserName" placeholder="User" />
        <input type="text" v-model="LastName" placeholder="Last Name" />
        <input type="text" v-model="loginId" placeholder="id" />
        <div>
            <Btn @click="$emit('submit', UserName,LastName, loginId)" type="submit" :disabled="isLoading" class="btn"><Spinner v-if="isLoading"></Spinner><span v-else>Register</span></Btn>
        </div>
    </form>
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
const loginId = ref(null);


</script>

<style scoped>
.add-account-form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

}

.add-account-form input {
    width: 80%;
    border: solid 2px var(--accent-color);
}

.btn {
    height: 50px;
    display: flex;
}
</style>