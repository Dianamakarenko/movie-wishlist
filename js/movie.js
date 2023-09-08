const API_KEY = '6c729cb6';
let title = new URLSearchParams(window.location.search).get('title')
if(title) {
fetchMovie().then(res => res.json()).then(json => console.log(json))
}

async function fetchMovie () {
    let fetchMovie = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`);
    let MovieResponse = await fetchMovie.json();

        
}

