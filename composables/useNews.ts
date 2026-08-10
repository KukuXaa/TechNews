import { ref } from "vue";
import { fetchLatestNews } from "../api/hnapi";
import {searchNews} from '../api/hnapi';

  export interface Story {
   objectID: string;
   title: string | null;
   author: string;
   created_at: string;
   num_comments: number;
   url: string | null;
   points: number;
  };

export function useNews() {
  const news = ref<Story[]>([]);
  const status = ref("Загрузка");
  const error = ref('');

async function loadNews () {
    status.value = 'Загрузка...';
    error.value = '';
    try {
        const items = await fetchLatestNews();
        news.value = items; 
        status.value = items.length > 0 ? 'Успешно' : 'Нет новостей';
    }
    catch {
        news.value = [];
        status.value = 'Ошибка';
        error.value = 'Не удалось получить новости';
}
}


async function search (query: string) {
     status.value = 'Загрузка...';
    error.value = '';
    try {
        const items = await searchNews(query);
        news.value = items; 
        status.value = items.length > 0 ? 'Успешно' : 'Нет новостей';
    }
    catch {
        status.value = 'Ошибка';
        error.value = 'Не удалось найти новости';
}
}
return {
    news,
    status,
    error,
    loadNews,
    search
};
}




