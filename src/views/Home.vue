<template>
    <Alert :show="alert.show" :message="alert.message" @close="alert.show = false" :variant="alert.variant" />
    <section>
        <AddAccountForm :isLoading="isPostingAccount" @submit="addAccount" />
    </section>
    <section>
        <Spinner class="spinner" v-if="isLoading" />
        <div v-else>
            <Account v-for="account in accounts" :key="account.id" :tipo="account.tipo" :saldo="account.saldo" :id="account.id" @delete="removeAccount(account.id)"
                @edit="($router.push(`/accounts/${account.id}/transfer`))" @deposit="$router.push(`/about/${account.id}/deposit`)" />
        </div>
    </section>
</template>
  
<script setup>
import AddAccountForm from '@/components/AddAccountForm.vue';
import Alert from '@/components/Alert.vue';
import Account from '@/components/Account.vue';
import axios from 'axios'
import Spinner from '@/components/Spinner.vue'
import { reactive, ref } from "vue"
import { useFetch } from '@/composables/fetch'

const props = defineProps(['loginId'])

const alert = reactive({
    show: false,
    message: "",
    variant: "danger"
})
const isPostingAccount = ref(false);

const { data: accounts, isLoading } = useFetch("/api/cuenta/mostrar",props.loginId, {
    onError: () => showAlert("Failed loading Accounts")
});

function showAlert(message, variant = "danger") {
    alert.show = true;
    alert.message = message;
    alert.variant = variant;
}


async function addAccount(tipo) {
    if (tipo === "") {
        showAlert("Account type is required");
        return;
    }
    const formdata = {
        "documento_usuario": props.loginId,
        "tipo": tipo
    }

    isPostingAccount.value = true;
    try{
        const res = await axios.post('/api/cuenta/creacion', formdata)
        accounts.value.push(res.data);
    }catch (e){
        showAlert("Can't have more than 3 Accounts","danger");
    }

    isPostingAccount.value = false;

    

}

async function removeAccount(id) {
    isLoading.value = true;
    await axios.delete(`/api/cuenta/eliminacion/${id}`);

    isLoading.value = false;
    accounts.value = accounts.value.filter((account) => account.id !== id);
}

</script>
  
<style scoped>
.spinner {
    margin: auto;
    margin-top: 30px;
}
</style>
  