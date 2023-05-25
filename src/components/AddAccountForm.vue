<template>
    <form action="" class="add-account-form">
        <input type="text" v-model="accountType" placeholder="Account Type" />
        <div>
            <Btn @click="$emit('submit', accountType)" type="submit" :disabled="isLoading" class="btn"><Spinner v-if="isLoading"></Spinner><span v-else>Add Account</span></Btn>
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

const accountType = ref("");
const id = ref(null);


</script>

<style scoped>
.add-account-form {
    display: flex;
    justify-content: space-between;

}

.add-account-form input {
    width: 80%;
    border: solid 2px var(--accent-color);
}

.btn {
    height: 50px;
}
</style>