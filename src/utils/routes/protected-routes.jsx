import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ErrorPage from '@pages/Error'

export const ProtectedRoutes = () => {
	const user = useSelector(state => state.user.user)
	return user !== null ? <Outlet /> : <Navigate to='/signin' replace />
}

export const PublicAuthRoute = () => {
	const user = useSelector(state => state.user.user)
	return user !== null ? <Navigate to='/' replace /> : <Outlet />
}

export const ProtectedErrorFallback = () => {
	const user = useSelector(state => state.user.user)
	return user !== null ? <ErrorPage /> : <Navigate to='/signin' replace />
}
