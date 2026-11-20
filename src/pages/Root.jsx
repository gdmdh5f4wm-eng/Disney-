import { Outlet } from 'react-router-dom'

import MainNavigation from '@components/layout/navigation/MainNavigation'
import ScrollManager from '@components/layout/ScrollManager'
import Footer from '@components/layout/footer/Footer'

const RootLayout = () => {
	return (
		<>
			<ScrollManager />
			<MainNavigation />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default RootLayout
