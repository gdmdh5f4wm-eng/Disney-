import { BASE_URL, API_KEY } from '@utils/http/constants'

export const fetchDataFromQuery = async ({ signal, query }) => {
	if (!API_KEY) {
		throw new Error('Chiave API TMDB mancante. Configura VITE_TMDB_API_KEY o VITE_API_KEY.')
	}

	try {
		const response = await fetch(
			`${BASE_URL}/search/multi?query=${encodeURIComponent(query)}&language=it-IT&api_key=${API_KEY}`,
			{ signal }
		)

		if (!response.ok) {
			if (response.status === 401 || response.status === 403) {
				throw new Error('Chiave API TMDB non valida o non autorizzata.')
			}
			if (response.status === 429) {
				throw new Error('Limite di richieste TMDB raggiunto. Riprova tra qualche istante.')
			}
			throw new Error(`Errore HTTP ${response.status} durante la ricerca. Riprova più tardi.`)
		}

		const data = await response.json()
		const rawResults = Array.isArray(data?.results) ? data.results : []

		const filteredData = rawResults
			.filter(item => (item.media_type === 'movie' || item.media_type === 'tv') && item.poster_path)
			.map(item => ({
				...item,
				media_type: item.media_type === 'movie' ? 'movie' : 'series',
			}))

		return filteredData
	} catch (error) {
		if (error?.name === 'AbortError' || signal?.aborted) {
			throw error
		}
		if (error instanceof TypeError) {
			throw new Error('Errore di connessione durante la ricerca. Verifica la rete e riprova.')
		}
		throw error
	}
}
