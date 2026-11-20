import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
	scrollToTopInstant,
	enableManualScrollRestoration,
} from '@utils/scroll/scroll-to-top'

const ScrollManager = () => {
	const { pathname, search, key } = useLocation()

	useLayoutEffect(() => {
		enableManualScrollRestoration()
		scrollToTopInstant()

		const rafId = window.requestAnimationFrame(() => {
			scrollToTopInstant()
		})

		return () => {
			window.cancelAnimationFrame(rafId)
		}
	}, [pathname, search, key])

	useEffect(() => {
		enableManualScrollRestoration()

		const handleReset = () => {
			scrollToTopInstant()
			window.requestAnimationFrame(() => {
				scrollToTopInstant()
			})
		}

		window.addEventListener('pageshow', handleReset)
		window.addEventListener('popstate', handleReset)

		return () => {
			window.removeEventListener('pageshow', handleReset)
			window.removeEventListener('popstate', handleReset)
		}
	}, [])

	return null
}

export default ScrollManager
