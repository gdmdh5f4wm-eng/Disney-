import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '@store/slices/user-slice'
import { fetchWatchListData } from '@store/actions/watchlist-actions'
import { authenticateWithCredentials } from '@utils/auth/auth-service'

const useAuthentication = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [error, setError] = useState(null)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const clearError = () => {
		if (error) {
			setError(null)
		}
	}

	const signIn = async data => {
		setIsSubmitting(true)
		setError(null)
		try {
			const result = await authenticateWithCredentials({
				email: data.email,
				password: data.password,
			})

			if (!result.ok) {
				setError(result.error)
				return
			}

			dispatch(userActions.signInUser(result.user))
			dispatch(fetchWatchListData({ user: result.user.uid }))
			navigate('/', { replace: true })
		} catch {
			setError('Si è verificato un errore durante l’accesso. Riprova.')
		} finally {
			setIsSubmitting(false)
		}
	}

	return { signIn, error, clearError, isSubmitting }
}

export default useAuthentication
