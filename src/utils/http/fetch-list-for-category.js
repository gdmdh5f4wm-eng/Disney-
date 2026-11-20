import { BASE_URL, API_KEY } from '@utils/http/constants'

export const fetchListForCategory = async ({ signal, resourceType, category }) => {
	try {
		const endpoint = resourceType === 'movie' ? 'discover/movie' : resourceType === 'series' ? 'discover/tv' : null

		if (!endpoint) {
			throw new Error('Tipo di risorsa non valido.')
		}

		const response = await fetch(
			`${BASE_URL}/${endpoint}?with_watch_providers=337&watch_region=IT&with_genres=${category}&language=it-IT&api_key=${API_KEY}`,
			{
				signal,
			}
		)

		if (!response.ok) {
			throw new Error('Impossibile recuperare i contenuti per la categoria selezionata.')
		}

		const data = await response.json()

		const filteredData = data.results
			.filter(item => item.poster_path)
			.map(item => ({
				...item,
			}))

		return filteredData
	} catch (error) {
		if (error?.name === 'AbortError' || signal?.aborted) {
			throw error
		}
		console.error('Si è verificato un errore durante il caricamento della categoria. Riprova più tardi.')
		return null
	}
}
