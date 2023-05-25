<template>
  <div class="account">
    <p>Tipo: {{ tipo }}</p>
    <p>Saldo: {{ saldo }}</p>
    <p>ID: {{ id }}</p>
    <div>
      <Btn circle variant="secondary" @click="$emit('edit')" class="btn edit-account-btn"><Pencil /></Btn>
      <Btn circle variant="secondary" @click="$emit('deposit')" class="btn edit-account-btn"><DepositIcon /></Btn>
      <Btn circle variant="danger" @click="$emit('delete')" class="btn">&times;</Btn>
    </div>
  </div>
</template>
<script setup>
import DepositIcon from './icons/DepositIcon.vue';
import Btn from './Btn.vue';
import Pencil from './icons/Pencil.vue';

defineProps({
  tipo: {
      required: true,
      type: String,
    }, 
  saldo:{
      required:true,
    
  },
  id:{
    required:true
  }   
});

defineEmits(["delete","edit","deposit"]);

</script>

<style scoped>
.account {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--accent-color);
  margin-top: 30px;
  padding: 0 20px 0 20px;
  border-radius: 10px;
}

.account > div{
  display: flex;
}

.edit-account-btn{
  margin-right: 5px;
}
.btn {
  height: 40px;
  width: 40px;
  font-size: 30px;
}
</style>