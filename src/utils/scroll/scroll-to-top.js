export const scrollToTopInstant = () => {
	if (typeof window === 'undefined') {
		return
	}

	try {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
	} catch {
		window.scrollTo(0, 0)
	}

	if (document.documentElement) {
		document.documentElement.scrollTop = 0
	}
	if (document.body) {
		document.body.scrollTop = 0
	}

	const rootEl = document.getElementById('root')
	if (rootEl && rootEl.scrollTop !== 0) {
		rootEl.scrollTop = 0
	}

	const mainEl = document.querySelector('main')
	if (mainEl && mainEl.scrollTop !== 0) {
		mainEl.scrollTop = 0
	}
}

export const enableManualScrollRestoration = () => {
	if (
		typeof window !== 'undefined' &&
		'history' in window &&
		'scrollRestoration' in window.history
	) {
		window.history.scrollRestoration = 'manual'
	}
}
