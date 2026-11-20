import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWatchListData } from '@store/actions/watchlist-actions'

const useAuthState = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user.user)

	useEffect(() => {
		if (user?.uid) {
			dispatch(fetchWatchListData({ user: user.uid }))
		}
	}, [dispatch, user?.uid])
}

export default useAuthState
