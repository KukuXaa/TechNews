# TechNews

Одностраничное приложение для просмотра и поиска новостей Hacker News.
Тестовое задание на позицию Junior Frontend Developer (Vue 3).

## Стек

- Vue 3 (Composition API, `<script setup>`)
- TypeScript
- Vite
- Scoped CSS

## Запуск проекта

```bash
npm install
npm run dev
```

Приложение откроется по адресу http://localhost:5173

## Структура проекта

```
src/
├── api/
│   └── hnapi.ts         
├── composables/
│   └── useNews.ts       
├── components/
│   ├── NewsCard.vue      
│   └── SearchBar.vue     
├── App.vue              
└── main.ts
```

## Архитектура

- **api/hnapi.ts** — вся работа с сетью в отдельном модуле. Компоненты не знают про `fetch`, а просто вызывают `fetchLatestNews()` и `searchNews(query)`.
- **composables/useNews.ts** — хранит состояние: список новостей, статус (`Загрузка` / `Успешно` / `Нет новостей` / `Ошибка`) и текст ошибки. Вынесен из компонента, чтобы не смешивать логику и разметку.
- **components/NewsCard.vue** — компонент только отображает новость, полученную через props. Ссылка открывается в новой вкладке; если внешней ссылки нет — ведёт на обсуждение HN.
- **components/SearchBar.vue** — отвечает только за поле ввода и передаёт запрос наверх через emit. Debounce (400 мс) сделан в App.vue.

