 const BASE_URL = 'https://hn.algolia.com/api/v1/';


export async function fetchLatestNews() { 
    
    const url = `${BASE_URL}search_by_date?tags=story`;
    const response = await fetch(url);

if(!response.ok){
    throw new Error('Не удалось получить новости');

}
const data = await response.json();

return data.hits;
}

export async function searchNews(query: string) {
const params = new URLSearchParams({ 
    query, tags: 'story'
});
const url = `${BASE_URL}search?${params}`
const response = await fetch(url);

if(!response.ok){
     throw new Error('Не удалось найти новость');
}

const data = await response.json();
return data.hits;
} 

 