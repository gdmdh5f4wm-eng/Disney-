import { BASE_URL, API_KEY } from '@utils/http/constants'

export const fetchCollectionResources = async ({ signal, fetchQuery }) => {
	try {
		const response = await fetch(`${BASE_URL}/${fetchQuery}&language=it-IT&api_key=${API_KEY}`, { signal })

		if (!response.ok) {
			throw new Error('Impossibile recuperare i contenuti della collezione.')
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
		console.error('Si è verificato un errore durante il caricamento della collezione. Riprova più tardi.')
		return null
	}
}
