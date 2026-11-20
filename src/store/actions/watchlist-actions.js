import { watchListActions } from '@store/slices/watchlist-slice'

const getWatchListKey = user => `mp2027_watchlist_${user}`

export const fetchWatchListData = ({ user }) => {
	return dispatch => {
		try {
			const raw = localStorage.getItem(getWatchListKey(user))
			const parsed = raw ? JSON.parse(raw) : null
			const resources = parsed && Array.isArray(parsed.resources) ? parsed.resources : []

			dispatch(
				watchListActions.replaceWatchList({
					resources,
				})
			)
		} catch {
			console.error('Si è verificato un errore durante il caricamento della tua lista.')
		}
	}
}

export const sendWatchListData =
	({ watchlist, user }) =>
	() => {
		try {
			localStorage.setItem(getWatchListKey(user), JSON.stringify({ resources: watchlist.resources }))
		} catch {
			console.error('Si è verificato un errore durante il salvataggio della tua lista.')
		}
	}
