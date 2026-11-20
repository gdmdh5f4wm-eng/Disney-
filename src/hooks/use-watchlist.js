import { useMemo } from 'react'
import { useSelector } from 'react-redux'

const useWatchList = () => {
	const watchList = useSelector(state => state.watchList)
	const userId = useSelector(state => state.user.user?.uid)

	return useMemo(() => {
		if (!userId) {
			return []
		}
		return watchList.resources.filter(resource => resource.userId === userId)
	}, [watchList.resources, userId])
}

export default useWatchList
