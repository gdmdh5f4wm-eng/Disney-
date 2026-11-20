import { BASE_URL, API_KEY } from '@utils/http/constants'

export const fetchDetailsFromId = async ({ signal, detailsId, resourceType }) => {
	try {
		const response = await fetch(
			`${BASE_URL}/${resourceType}/${detailsId}?api_key=${API_KEY}&language=it-IT&include_image_language=it,en,null&include_video_language=it,en&append_to_response=videos,images`,
			{
				signal,
			}
		)

		if (!response.ok) {
			throw new Error('Impossibile recuperare i dettagli del titolo.')
		}

		const data = await response.json()

		let overview = data.overview
		let title = data.title || data.name

		if (!overview || !title) {
			const fallbackRes = await fetch(
				`${BASE_URL}/${resourceType}/${detailsId}?api_key=${API_KEY}&language=en-US`,
				{ signal }
			)
			if (fallbackRes.ok) {
				const fallbackData = await fallbackRes.json()
				overview = overview || fallbackData.overview
				title = title || fallbackData.title || fallbackData.name
			}
		}

		const filteredData = {
			releaseDate: data.release_date || data.first_air_date,
			genres: Array.isArray(data.genres) ? data.genres.map(genre => genre.name) : [],
			videoResults: Array.isArray(data.videos?.results) ? data.videos.results : [],
			logos: Array.isArray(data.images?.logos) ? data.images.logos : [],
			backdrops: data.images?.backdrops || data.backdrop_path,
			title,
			numberOfSeasons: data.number_of_seasons,
			overview,
			posterPath: data.poster_path,
		}

		if (Array.isArray(filteredData.backdrops) && filteredData.backdrops.length === 0) {
			filteredData.backdrops = data.backdrop_path || null
		}

		return filteredData
	} catch (error) {
		if (error?.name === 'AbortError' || signal?.aborted) {
			throw error
		}
		console.error('Si è verificato un errore durante il caricamento dei dettagli. Riprova più tardi.')
		return null
	}
}
