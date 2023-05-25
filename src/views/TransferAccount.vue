<template>
  <Spinner v-if="isLoading" />
  <Alert message="Failed loading Account" :show="error !== null" />
  <Alert :message="alert.message" :show="alert.show" />
  <div v-if="account !== null" class="form">
    <h1>Transfer Account Id: {{ props.id }}</h1>
    <form class="transfer-account-form">
      <div><label>Destination Account</label></div>
      <input type="text" v-model="destionationAccount" placeholder="Destination Account" />
      <div><label>Mount</label></div>
      <input type="text" v-model="mount" placeholder="Mount" />
    </form>
    <div class="submit">
      <Btn @click="submit">Submit</Btn>
      <Btn @click="back">back</Btn>
    </div>
  </div>
</template>

<script setup>
import { useFetchUnique } from "../composables/fetch"
import Btn from "../components/Btn.vue"
import Spinner from "../components/Spinner.vue";
import Alert from "../components/Alert.vue";
import { ref, reactive } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

const router = useRouter();

const transferComplete = ref(false);
const destionationAccount = ref(null);
const mount = ref(null);
const props = defineProps(['id'])
const { data: account,
  error,
  isLoading

} = useFetchUnique(`/api/cuenta/consulta/${props.id}`)
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

function back() {
    router.push(window.history.state.back);
}

async function submit() {
  isLoading.value = true;
  const formdata = {

    "origen": props.id,
    "destino": destionationAccount.value,
    "monto": mount.value

  }
  axios.post("/api/servicio/transferencia", formdata)
  isLoading.value =false;

  showAlert("Transfer Succesfull","info");
  transferComplete.value = true;

}


</script>

<style scoped>
.submit {
  margin-top: 20px;
  display: flex;
  justify-content: end;

}

.submit button {
  height: 50px;
  width: 80px;
  margin-right: 10px;
}

.form {
  background-color: var(--navbar-color);
  padding: 20px;
  border-radius: 10px;
}

.transfer-account-modal-footer {
  display: flex;
  justify-content: end;
  padding: 10px;
}

.transfer-account-sumbit-btn {
  margin-right: 5px;
}

.transfer-account-form>input {
  width: 100%;
  height: 30px;
  border: 1px solid var(--accent-color);

}
</style>