<script setup lang="ts">
import type { Story } from "../composables/useNews";

const props = defineProps<{article: Story}>();
const link = props.article.url || `https://news.ycombinator.com/item?id=${props.article.objectID}`;
const date = new Date(props.article.created_at).toLocaleDateString('ru-RU',
    {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
);

</script>

<template>
    <article>
        <a :href="link" target="_blank" rel="noopener" class="NameNews">
            <strong>
                {{ article.title }}
            </strong>
        </a>

        <p>
        {{ article.author }} ·   
        {{ date }} ·
        {{ article.points }} ▲ · 
        {{ article.num_comments }} 💬    
        </p> 
    </article>
</template>
<style scoped>

.NameNews {
 text-decoration: none;
 color: #7d2f1f;
 
}
p {
    padding-top: 6px;
}
article {
    border-bottom: 2px solid #ccb4a8;
    padding-top: 24px;
}



</style>