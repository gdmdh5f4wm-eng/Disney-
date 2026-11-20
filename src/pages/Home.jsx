import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Container from '@components/ui/Container'
import ImageSlider from '@components/ImageSlider'
import Collections from '@components/Collections'
import Essential from '@components/Essential'
import Movies from '@components/Movies'

const easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

const HomePage = () => {
	const navigate = useNavigate()
	const essentialRef = useRef(null)
	const isTransitioningRef = useRef(false)
	const rafRef = useRef(null)
	const timersRef = useRef([])
	const [isEssentialHighlighted, setIsEssentialHighlighted] = useState(false)
	const [isEssentialOpening, setIsEssentialOpening] = useState(false)

	const clearPendingSequence = useCallback(() => {
		if (rafRef.current !== null) {
			cancelAnimationFrame(rafRef.current)
			rafRef.current = null
		}
		timersRef.current.forEach(timerId => clearTimeout(timerId))
		timersRef.current = []
	}, [])

	useEffect(() => {
		return () => {
			clearPendingSequence()
		}
	}, [clearPendingSequence])

	const runHighlightAndNavigate = useCallback(() => {
		setIsEssentialHighlighted(true)

		const openTimer = setTimeout(() => {
			setIsEssentialOpening(true)
			const navTimer = setTimeout(() => {
				isTransitioningRef.current = false
				navigate('/essenziale')
			}, 300)
			timersRef.current.push(navTimer)
		}, 750)

		timersRef.current.push(openTimer)
	}, [navigate])

	const startCinematicScroll = useCallback(
		targetElement => {
			const rect = targetElement.getBoundingClientRect()
			const headerOffset = 92
			const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
			const targetY = Math.min(maxScroll, Math.max(0, window.scrollY + rect.top - headerOffset))
			const startY = window.scrollY
			const delta = targetY - startY

			if (Math.abs(delta) < 12) {
				runHighlightAndNavigate()
				return
			}

			const duration = Math.min(1800, Math.max(1150, 950 + Math.abs(delta) * 0.45))
			let startTime = null

			const step = timestamp => {
				if (startTime === null) {
					startTime = timestamp
				}
				const elapsed = timestamp - startTime
				const progress = Math.min(1, elapsed / duration)
				const eased = easeInOutCubic(progress)
				const nextY = startY + delta * eased

				window.scrollTo({ top: nextY, behavior: 'instant' })

				if (progress < 1) {
					rafRef.current = requestAnimationFrame(step)
				} else {
					rafRef.current = null
					runHighlightAndNavigate()
				}
			}

			rafRef.current = requestAnimationFrame(step)
		},
		[runHighlightAndNavigate]
	)

	const handleBabiClick = useCallback(() => {
		if (isTransitioningRef.current) {
			return
		}
		isTransitioningRef.current = true
		clearPendingSequence()

		const waitStart = performance.now()
		const findAndScroll = () => {
			const targetElement =
				essentialRef.current || document.getElementById('essenziale-section')
			if (targetElement) {
				startCinematicScroll(targetElement)
				return
			}

			if (performance.now() - waitStart < 2000) {
				rafRef.current = requestAnimationFrame(findAndScroll)
			} else {
				isTransitioningRef.current = false
				navigate('/essenziale')
			}
		}

		findAndScroll()
	}, [clearPendingSequence, navigate, startCinematicScroll])

	return (
		<Container>
			<ImageSlider />
			<Collections onBabiClick={handleBabiClick} />
			<Essential
				ref={essentialRef}
				isHighlighted={isEssentialHighlighted}
				isOpening={isEssentialOpening}
			/>
			<Movies />
		</Container>
	)
}

export default HomePage
