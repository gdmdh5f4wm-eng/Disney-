import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Grid from '@mui/material/Grid'
import ItemContainer from '@components/ui/ItemContainer'

const CollectionGridItem = ({ item, onBabiClick }) => {
	const videoRef = useRef(null)
	const [isHovered, setIsHovered] = useState(false)
	const [supportsHover, setSupportsHover] = useState(false)

	useEffect(() => {
		if (typeof window === 'undefined' || !window.matchMedia) {
			return undefined
		}
		const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
		setSupportsHover(mediaQuery.matches)

		const handleChange = event => {
			setSupportsHover(event.matches)
			if (!event.matches) {
				setIsHovered(false)
			}
		}

		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener('change', handleChange)
			return () => mediaQuery.removeEventListener('change', handleChange)
		}
		mediaQuery.addListener(handleChange)
		return () => mediaQuery.removeListener(handleChange)
	}, [])

	const handleBabiMouseEnter = () => {
		if (!supportsHover || !item.isBabi) {
			return
		}
		setIsHovered(true)
		const videoEl = videoRef.current
		if (videoEl) {
			videoEl.currentTime = 0
			const playPromise = videoEl.play()
			if (playPromise && typeof playPromise.catch === 'function') {
				playPromise.catch(() => {})
			}
		}
	}

	const handleBabiMouseLeave = () => {
		if (!item.isBabi) {
			return
		}
		setIsHovered(false)
		const videoEl = videoRef.current
		if (videoEl) {
			videoEl.pause()
			videoEl.currentTime = 0
		}
	}

	if (item.isBabi) {
		return (
			<Grid item xs={3} md={1}>
				<BabiButton
					type='button'
					onClick={onBabiClick}
					onMouseEnter={handleBabiMouseEnter}
					onMouseLeave={handleBabiMouseLeave}
					aria-label='BABI — Vai alla sezione Essenziale'
				>
					<BabiItemContainer $isHovered={isHovered}>
						<BabiStaticCover $hidden={isHovered}>
							<BabiTitle>BABI</BabiTitle>
						</BabiStaticCover>
						<BabiVideo
							ref={videoRef}
							loop
							muted
							playsInline
							preload='none'
							$visible={isHovered}
							aria-hidden='true'
						>
							<source src={item.video} type='video/mp4' />
						</BabiVideo>
					</BabiItemContainer>
				</BabiButton>
			</Grid>
		)
	}

	return (
		<Grid item xs={3} md={1}>
			<VisualItemContainer>
				<img src={item.img} alt={item.title} loading='lazy' />
				<video autoPlay loop muted playsInline>
					<source src={item.video} type='video/mp4' />
				</video>
			</VisualItemContainer>
		</Grid>
	)
}

CollectionGridItem.propTypes = {
	item: PropTypes.shape({
		img: PropTypes.string,
		video: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		query: PropTypes.string.isRequired,
		isBabi: PropTypes.bool,
	}).isRequired,
	onBabiClick: PropTypes.func,
}

export default CollectionGridItem

const VisualItemContainer = styled(ItemContainer)`
	cursor: default;
	aspect-ratio: 600 / 337;

	img {
		z-index: 1;
		object-fit: cover;
	}

	video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		z-index: 0;
		border-radius: 10px;
	}

	&:hover {
		box-shadow: 0px 40px 58px -10px rgba(0, 0, 0, 0.7);
		transform: scale(1.05);

		video {
			opacity: 1;
		}
	}
`

const BabiButton = styled.button`
	display: block;
	width: 100%;
	padding: 0;
	border: none;
	background: transparent;
	cursor: pointer;
	text-align: inherit;
`

const BabiItemContainer = styled(ItemContainer)`
	aspect-ratio: 600 / 337;
	cursor: pointer;
	background: linear-gradient(180deg, rgba(48, 52, 74, 0.35) 0%, rgba(18, 22, 38, 0.6) 100%);

	&:hover {
		box-shadow: 0px 40px 58px -10px rgba(0, 0, 0, 0.7);
		transform: scale(1.05);
	}
`

const BabiStaticCover = styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	background: radial-gradient(circle at 50% 35%, rgba(72, 108, 178, 0.22) 0%, rgba(10, 14, 30, 0.45) 100%);
	transition: opacity 0.35s ease;
	opacity: ${props => (props.$hidden ? 0.18 : 1)};
`

const BabiTitle = styled.span`
	font-size: clamp(20px, 2.2vw, 30px);
	font-weight: 800;
	letter-spacing: 0.22em;
	text-indent: 0.22em;
	color: #f9f9f9;
	text-shadow: 0 4px 18px rgba(0, 0, 0, 0.65);
`

const BabiVideo = styled.video`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 10px;
	z-index: 0;
	pointer-events: none;
	opacity: ${props => (props.$visible ? 1 : 0)};
	transition: opacity 0.35s ease;
`
