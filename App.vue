<script setup lang="ts">

import { onMounted } from 'vue';
import { useNews } from './composables/useNews';
import NewsCard from './components/NewsCard.vue';
import SearchBar from './components/SearchBar.vue';

const { 
  news, 
  status, 
  error, 
  loadNews,
  search,
} = useNews();

onMounted(loadNews);

let timer: number | undefined;

function onSearch(query: string) {
  clearTimeout(timer);
  timer = window.setTimeout(() => {
   if (query.trim() === '') {
    loadNews();
   }
   else {
   search(query)   
  }
  }, 400);
}
 
  
</script>

<template>
 <div class="page">
 <header> 
    <div class="hTechNews">
        <h1>
          Tech News
        </h1>
    </div>
 </header>

 <SearchBar @search="onSearch" />


 <p v-if="status === 'Загрузка'">
  Загрузка...
 </p>

<div v-else-if = "status === 'Ошибка'">
  {{ error }}
<button @click="loadNews">
  Перезагрузить
</button>
</div>

<p v-else-if="status === 'Нет новостей'"> 
  Здесь пока пусто 
</p>
 
<ul v-else class="list">
  <li v-for="Item in news" :key="Item.objectID">
    <NewsCard :article="Item" />
  </li>
</ul>
  

 </div>
</template>

<style scoped>
.page {
 
  background: #f5f1e8;
  font-family: Georgia, 'Times New Roman', Times, serif;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px 32px;
}
.list {
  color: #8b857a;
  list-style: none;
  padding: 0;
  
}
header {
  color: #f2f7f7;
  text-align: center;
  align-items: center;           
  padding: 16px 0;
  border-bottom: 2px solid #e87639;  
  margin-bottom: 24px;
  background-color: black;
}
</style>

<style>
body {
background: #f5f1e8;
}
</style>

