import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@utils/routes/router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@utils/query-client/query-client'
import { useSelector, useDispatch } from 'react-redux'
import { sendWatchListData } from '@store/actions/watchlist-actions'
import useIdle from '@hooks/use-idle'
import useAuthState from '@hooks/use-authstate'
import useLocalStorageCleanup from '@hooks/use-cleanup'

import PreLoader from '@components/layout/preloader/PreLoader'
import {
	scrollToTopInstant,
	enableManualScrollRestoration,
} from '@utils/scroll/scroll-to-top'

let isInitial = true

const App = () => {
	const user = useSelector(state => state.user.user)
	const [isLoading, setIsLoading] = useState(Boolean(user))
	const dispatch = useDispatch()
	const watchlist = useSelector(state => state.watchList)

	useIdle()
	useAuthState()
	useLocalStorageCleanup()

	useEffect(() => {
		enableManualScrollRestoration()
		scrollToTopInstant()
	}, [])

	useEffect(() => {
		if (isInitial) {
			isInitial = false
			return
		}

		if (user?.uid && watchlist.changed) {
			dispatch(sendWatchListData({ watchlist, user: user.uid }))
		}
	}, [watchlist, dispatch, user?.uid])

	useEffect(() => {
		if (!isLoading) {
			scrollToTopInstant()
			return
		}
		const preloading = setTimeout(() => {
			setIsLoading(false)
			scrollToTopInstant()
		}, 1800)

		return () => clearTimeout(preloading)
	}, [isLoading])

	return (
		<QueryClientProvider client={queryClient}>
			{isLoading && <PreLoader />}
			{!isLoading && <RouterProvider router={router} />}
		</QueryClientProvider>
	)
}

export default App
