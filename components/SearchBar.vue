<script setup lang="ts">

import { ref } from 'vue';

const emit = defineEmits(['search']);
const query = ref('');

function onInput() {
    emit('search', query.value);
}

</script>

<template>
    
    <label for="search">Поиск новостей</label>
    <input id="search" type="search" v-model="query" @input="onInput" />
   
</template>

<style scoped>

label {
    display: block;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

input {
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 16px;
}
</style>