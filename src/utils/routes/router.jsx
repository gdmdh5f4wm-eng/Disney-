import { createBrowserRouter, Navigate } from 'react-router-dom'
import {
	ProtectedRoutes,
	PublicAuthRoute,
	ProtectedErrorFallback,
} from '@utils/routes/protected-routes'

import RootLayout from '@pages/Root'
import ErrorContent from '@components/ErrorContent'
import HomePage from '@pages/Home'
import MovieDetailsPage from '@pages/MovieDetails'
import SeriesDetailsPage from '@pages/SeriesDetails'
import SearchPage from '@pages/Search'
import CollectionResourcesPage from '@components/CollectionResources'
import DiscoverMoviesPage from '@pages/DiscoverMovies'
import DiscoverSeriesPage from '@pages/DiscoverSeries'
import MyListPage from '@pages/MyList'
import EssenzialePage from '@pages/Essenziale'
import SignInPage from '@pages/SignIn'

export const router = createBrowserRouter([
	{
		element: <PublicAuthRoute />,
		errorElement: <ProtectedErrorFallback />,
		children: [
			{ path: '/signin', element: <SignInPage /> },
			{ path: '/signup', element: <Navigate to='/signin' replace /> },
		],
	},
	{
		element: <ProtectedRoutes />,
		errorElement: <ProtectedErrorFallback />,
		children: [
			{
				path: '/',
				element: <RootLayout />,
				errorElement: <ErrorContent />,
				children: [
					{ index: true, element: <HomePage /> },
					{
						path: 'essenziale',
						element: <EssenzialePage />,
					},
					{
						path: 'movie',
						children: [
							{ index: true, element: <DiscoverMoviesPage /> },
							{ path: ':id', element: <MovieDetailsPage /> },
						],
					},
					{
						path: 'series',
						children: [
							{ index: true, element: <DiscoverSeriesPage /> },
							{ path: ':id', element: <SeriesDetailsPage /> },
						],
					},
					{
						path: 'search',
						element: <SearchPage />,
					},
					{
						path: 'collection/:id',
						element: <CollectionResourcesPage />,
					},
					{
						path: 'mylist',
						element: <MyListPage />,
					},
					{
						path: '*',
						element: <ErrorContent />,
					},
				],
			},
		],
	},
	{
		path: '*',
		element: <Navigate to='/signin' replace />,
	},
])
