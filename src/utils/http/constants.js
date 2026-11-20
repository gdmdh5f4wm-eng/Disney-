export const BASE_URL = 'https://api.themoviedb.org/3'
export const API_KEY = (
	import.meta.env.VITE_TMDB_API_KEY ||
	import.meta.env.VITE_API_KEY ||
	'35f3fea26d7c6bea37a8777ddbddbed3'
).trim()
export const categories = [
	{
		category: 'popular-movies',
		type: 'movie',
		title: 'Film popolari',
		path: `${BASE_URL}/discover/movie?with_watch_providers=337&watch_region=IT&language=it-IT&sort_by=popularity.desc&api_key=${API_KEY}`,
	},
	{
		category: 'popular-series',
		type: 'series',
		title: 'Serie TV popolari',
		path: `${BASE_URL}/discover/tv?with_watch_providers=337&watch_region=IT&language=it-IT&sort_by=popularity.desc&api_key=${API_KEY}`,
	},
	{
		category: 'upcoming-movies',
		type: 'movie',
		title: 'Prossime uscite',
		path: `${BASE_URL}/movie/upcoming?region=IT&language=it-IT&api_key=${API_KEY}`,
	},
	{
		category: 'top-rated-movies',
		type: 'movie',
		title: 'Film più votati',
		path: `${BASE_URL}/movie/top_rated?region=IT&language=it-IT&api_key=${API_KEY}`,
	},
	{
		category: 'top-rated-series',
		type: 'series',
		title: 'Serie TV più votate',
		path: `${BASE_URL}/tv/top_rated?language=it-IT&api_key=${API_KEY}`,
	},
]
