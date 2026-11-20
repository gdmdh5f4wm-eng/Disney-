import { categories } from '@utils/http/constants'

export const fetchHomePageData = async ({ signal }) => {
	const fetchCategoryData = async () => {
		const categoryData = await Promise.all(
			categories.map(async category => {
				try {
					const response = await fetch(category.path, { signal })
					if (!response.ok) {
						throw new Error('Failed to fetch data.')
					}
					const data = await response.json()
					const results = Array.isArray(data?.results)
						? data.results.filter(item => item.poster_path)
						: []
					return { ...category, data: { ...data, results } }
				} catch (error) {
					if (error?.name === 'AbortError' || signal?.aborted) {
						throw error
					}
					console.error(`Si è verificato un errore durante il caricamento di ${category.title}. Riprova più tardi.`)
					return { ...category }
				}
			})
		)
		return categoryData
	}

	return fetchCategoryData()
}
