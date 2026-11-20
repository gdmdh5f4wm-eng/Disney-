import { useDispatch } from 'react-redux'
import { useIdleTimer } from 'react-idle-timer'
import { userActions } from '@store/slices/user-slice'

const useIdle = () => {
	const dispatch = useDispatch()

	const onIdle = () => {
		dispatch(userActions.signOutUser())
	}

	useIdleTimer({
		onIdle,
		timeout: 5 * (60 * 1000),
	})
}

export default useIdle
