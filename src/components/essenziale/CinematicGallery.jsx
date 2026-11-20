import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import ZoomOutMapRoundedIcon from '@mui/icons-material/ZoomOutMapRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined'

const CinematicGallery = ({ items, aspectRatio = '16 / 10', showCaptions = true }) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [lightboxOpen, setLightboxOpen] = useState(false)
	const [brokenImages, setBrokenImages] = useState({})
	const touchStartXRef = useRef(null)

	const total = items.length
	const currentItem = items[activeIndex] || items[0]

	const goPrev = () => {
		setActiveIndex(prev => (prev - 1 + total) % total)
	}

	const goNext = () => {
		setActiveIndex(prev => (prev + 1) % total)
	}

	const handleTouchStart = event => {
		if (event.touches && event.touches.length > 0) {
			touchStartXRef.current = event.touches[0].clientX
		}
	}

	const handleTouchEnd = event => {
		if (touchStartXRef.current === null || !event.changedTouches || event.changedTouches.length === 0) {
			return
		}
		const deltaX = event.changedTouches[0].clientX - touchStartXRef.current
		touchStartXRef.current = null
		if (Math.abs(deltaX) > 40) {
			if (deltaX < 0) {
				goNext()
			} else {
				goPrev()
			}
		}
	}

	const handleImageError = src => {
		setBrokenImages(prev => ({ ...prev, [src]: true }))
	}

	useEffect(() => {
		if (!lightboxOpen) {
			return undefined
		}

		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				setLightboxOpen(false)
			} else if (event.key === 'ArrowRight') {
				setActiveIndex(prev => (prev + 1) % total)
			} else if (event.key === 'ArrowLeft') {
				setActiveIndex(prev => (prev - 1 + total) % total)
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [lightboxOpen, total])

	if (!items || items.length === 0) {
		return null
	}

	const isBroken = Boolean(brokenImages[currentItem.src])

	return (
		<GalleryRoot>
			<StageWrapper
				$aspectRatio={aspectRatio}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
			>
				{isBroken ? (
					<ImageFallback>
						<BrokenImageOutlinedIcon fontSize='large' />
						<span>Immagine non disponibile al momento</span>
					</ImageFallback>
				) : (
					<StageImage
						src={currentItem.src}
						alt={currentItem.title}
						onClick={() => setLightboxOpen(true)}
						onError={() => handleImageError(currentItem.src)}
					/>
				)}

				<StageGradient />

				<TopControls>
					<CounterBadge>
						{activeIndex + 1} / {total}
					</CounterBadge>
					<ZoomButton
						type='button'
						onClick={() => setLightboxOpen(true)}
						aria-label={`Ingrandisci ${currentItem.title}`}
					>
						<ZoomOutMapRoundedIcon fontSize='small' />
						<span>Ingrandisci</span>
					</ZoomButton>
				</TopControls>

				{total > 1 && (
					<>
						<NavArrow
							type='button'
							$position='left'
							onClick={goPrev}
							aria-label='Immagine precedente'
						>
							<ArrowBackIosNewRoundedIcon fontSize='small' />
						</NavArrow>
						<NavArrow
							type='button'
							$position='right'
							onClick={goNext}
							aria-label='Immagine successiva'
						>
							<ArrowForwardIosRoundedIcon fontSize='small' />
						</NavArrow>
					</>
				)}

				{showCaptions && (
					<CaptionOverlay>
						{currentItem.subtitle && <CaptionSubtitle>{currentItem.subtitle}</CaptionSubtitle>}
						<CaptionTitle>{currentItem.title}</CaptionTitle>
						{currentItem.description && <CaptionText>{currentItem.description}</CaptionText>}
					</CaptionOverlay>
				)}
			</StageWrapper>

			{total > 1 && (
				<ControlsFooter>
					<DotsRow role='tablist' aria-label='Indicatori galleria'>
						{items.map((item, idx) => (
							<DotButton
								key={item.src + idx}
								type='button'
								$active={idx === activeIndex}
								onClick={() => setActiveIndex(idx)}
								aria-label={`Vai a ${item.title}`}
								aria-selected={idx === activeIndex}
							/>
						))}
					</DotsRow>

					<ThumbnailsStrip>
						{items.map((item, idx) => (
							<ThumbButton
								key={item.src}
								type='button'
								$active={idx === activeIndex}
								onClick={() => setActiveIndex(idx)}
								aria-label={`Seleziona ${item.title}`}
							>
								<img
									src={item.src}
									alt={item.title}
									onError={() => handleImageError(item.src)}
								/>
							</ThumbButton>
						))}
					</ThumbnailsStrip>
				</ControlsFooter>
			)}

			{lightboxOpen && (
				<LightboxOverlay
					role='dialog'
					aria-modal='true'
					aria-label={currentItem.title}
					onClick={() => setLightboxOpen(false)}
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
				>
					<LightboxCard onClick={event => event.stopPropagation()}>
						<LightboxClose
							type='button'
							onClick={() => setLightboxOpen(false)}
							aria-label='Chiudi anteprima ingrandita'
						>
							<CloseRoundedIcon />
						</LightboxClose>

						{total > 1 && (
							<>
								<LightboxArrow
									type='button'
									$position='left'
									onClick={goPrev}
									aria-label='Immagine precedente'
								>
									<ArrowBackIosNewRoundedIcon />
								</LightboxArrow>
								<LightboxArrow
									type='button'
									$position='right'
									onClick={goNext}
									aria-label='Immagine successiva'
								>
									<ArrowForwardIosRoundedIcon />
								</LightboxArrow>
							</>
						)}

						<LightboxImageWrap>
							{isBroken ? (
								<ImageFallback>
									<BrokenImageOutlinedIcon fontSize='large' />
									<span>Immagine non disponibile al momento</span>
								</ImageFallback>
							) : (
								<LightboxImage src={currentItem.src} alt={currentItem.title} />
							)}
						</LightboxImageWrap>

						<LightboxCaption>
							<LightboxTitle>
								{currentItem.title} ({activeIndex + 1}/{total})
							</LightboxTitle>
							{currentItem.description && <LightboxDesc>{currentItem.description}</LightboxDesc>}
						</LightboxCaption>
					</LightboxCard>
				</LightboxOverlay>
			)}
		</GalleryRoot>
	)
}

CinematicGallery.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			subtitle: PropTypes.string,
			description: PropTypes.string,
		})
	).isRequired,
	aspectRatio: PropTypes.string,
	showCaptions: PropTypes.bool,
}

export default CinematicGallery

const GalleryRoot = styled.div`
	width: 100%;
	max-width: 100%;
`

const StageWrapper = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: ${props => props.$aspectRatio || '16 / 10'};
	min-height: 280px;
	max-height: 540px;
	border-radius: 14px;
	overflow: hidden;
	border: 1px solid rgba(249, 249, 249, 0.16);
	background: #070b18;
	box-shadow: 0 24px 45px -16px rgba(0, 0, 0, 0.85);
	touch-action: pan-y;

	@media (max-width: 600px) {
		aspect-ratio: 4 / 5;
		min-height: 320px;
		max-height: 460px;
	}
`

const StageImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	cursor: zoom-in;
	transition: transform 0.55s ease;

	&:hover {
		transform: scale(1.02);
	}
`

const StageGradient = styled.div`
	position: absolute;
	inset: 0;
	pointer-events: none;
	background: linear-gradient(
		180deg,
		rgba(4, 7, 20, 0.45) 0%,
		rgba(4, 7, 20, 0.06) 38%,
		rgba(4, 7, 20, 0.72) 76%,
		rgba(4, 7, 20, 0.94) 100%
	);
`

const TopControls = styled.div`
	position: absolute;
	top: 14px;
	left: 14px;
	right: 14px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	z-index: 2;
	pointer-events: none;
`

const CounterBadge = styled.span`
	display: inline-flex;
	align-items: center;
	padding: 5px 12px;
	border-radius: 999px;
	background: rgba(4, 7, 20, 0.72);
	border: 1px solid rgba(249, 249, 249, 0.22);
	backdrop-filter: blur(8px);
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 0.08em;
	color: #f9f9f9;
`

const ZoomButton = styled.button`
	pointer-events: auto;
	display: inline-flex;
	align-items: center;
	gap: 6px;
	min-height: 36px;
	padding: 6px 12px;
	border-radius: 999px;
	border: 1px solid rgba(249, 249, 249, 0.28);
	background: rgba(4, 7, 20, 0.74);
	backdrop-filter: blur(8px);
	color: #f9f9f9;
	font-size: 12px;
	font-weight: 500;
	cursor: pointer;
	transition: background-color 0.25s ease, border-color 0.25s ease;

	&& svg {
		font-size: 16px;
	}

	@media (min-width: 700px) {
		&& svg {
			font-size: 19px;
		}
	}

	&:hover {
		background: rgba(0, 114, 210, 0.75);
		border-color: rgba(249, 249, 249, 0.7);
	}
`

const NavArrow = styled.button`
	position: absolute;
	top: 50%;
	${props => (props.$position === 'left' ? 'left: 4px;' : 'right: 4px;')}
	transform: translateY(-50%);
	z-index: 3;
	width: 44px;
	height: 44px;
	padding: 0;
	border: none;
	background: transparent;
	color: #f9f9f9;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: transform 0.25s ease;

	&::before {
		content: '';
		position: absolute;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1px solid rgba(249, 249, 249, 0.28);
		background: rgba(4, 7, 20, 0.72);
		backdrop-filter: blur(8px);
		transition: background-color 0.25s ease, border-color 0.25s ease;
	}

	&& svg {
		position: relative;
		z-index: 1;
		font-size: 18px;
	}

	&:hover {
		transform: translateY(-50%) scale(1.06);

		&::before {
			background: rgba(0, 114, 210, 0.85);
			border-color: #f9f9f9;
		}
	}

	@media (min-width: 700px) {
		${props => (props.$position === 'left' ? 'left: 12px;' : 'right: 12px;')}
		width: 40px;
		height: 40px;

		&::before {
			width: 40px;
			height: 40px;
		}

		&& svg {
			font-size: 20px;
		}
	}
`

const CaptionOverlay = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 20px 22px;
	z-index: 2;
	pointer-events: none;

	@media (max-width: 600px) {
		padding: 16px;
	}
`

const CaptionSubtitle = styled.div`
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: #7cc4ff;
	margin-bottom: 4px;
`

const CaptionTitle = styled.h4`
	margin: 0 0 6px;
	font-size: 20px;
	line-height: 1.25;
	font-weight: 700;
	color: #ffffff;

	@media (max-width: 600px) {
		font-size: 18px;
	}
`

const CaptionText = styled.p`
	margin: 0;
	max-width: 68ch;
	font-size: 14px;
	line-height: 1.5;
	color: rgba(249, 249, 249, 0.88);

	@media (max-width: 600px) {
		font-size: 13px;
	}
`

const ControlsFooter = styled.div`
	margin-top: 14px;
	display: flex;
	flex-direction: column;
	gap: 12px;
`

const DotsRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	flex-wrap: wrap;
`

const DotButton = styled.button`
	width: ${props => (props.$active ? '26px' : '9px')};
	height: 9px;
	padding: 0;
	border: none;
	border-radius: 999px;
	background: ${props => (props.$active ? '#3ea6ff' : 'rgba(249, 249, 249, 0.28)')};
	cursor: pointer;
	transition: all 0.25s ease;

	&:hover {
		background: ${props => (props.$active ? '#3ea6ff' : 'rgba(249, 249, 249, 0.55)')};
	}
`

const ThumbnailsStrip = styled.div`
	display: flex;
	gap: 10px;
	overflow-x: auto;
	padding: 4px 2px 6px;
	max-width: 100%;
	scrollbar-width: thin;
	scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
`

const ThumbButton = styled.button`
	flex: 0 0 auto;
	width: 82px;
	height: 54px;
	padding: 0;
	border-radius: 8px;
	overflow: hidden;
	border: 2px solid ${props => (props.$active ? '#3ea6ff' : 'rgba(249, 249, 249, 0.14)')};
	opacity: ${props => (props.$active ? 1 : 0.58)};
	background: #0b1021;
	cursor: pointer;
	transition: all 0.2s ease;

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&:hover {
		opacity: 1;
	}

	@media (max-width: 600px) {
		width: 70px;
		height: 48px;
	}
`

const ImageFallback = styled.div`
	width: 100%;
	height: 100%;
	min-height: 240px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	color: rgba(249, 249, 249, 0.72);
	font-size: 14px;

	@media (max-width: 600px) {
		&& svg {
			font-size: 24px;
		}
	}
`

const LightboxOverlay = styled.div`
	position: fixed;
	inset: 0;
	z-index: 1500;
	background: rgba(3, 5, 14, 0.94);
	backdrop-filter: blur(10px);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	box-sizing: border-box;

	@media (max-width: 480px) {
		padding: 14px;
	}
`

const LightboxCard = styled.div`
	position: relative;
	width: 100%;
	max-width: 980px;
	max-height: 92vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 14px;
`

const LightboxClose = styled.button`
	position: absolute;
	top: 4px;
	right: 4px;
	z-index: 5;
	width: 44px;
	height: 44px;
	padding: 0;
	border: none;
	background: transparent;
	color: #f9f9f9;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		width: 34px;
		height: 34px;
		border-radius: 50%;
		border: 1px solid rgba(249, 249, 249, 0.35);
		background: rgba(10, 15, 34, 0.9);
		transition: background-color 0.2s ease;
	}

	&& svg {
		position: relative;
		z-index: 1;
		font-size: 19px;
	}

	@media (min-width: 700px) {
		top: 8px;
		right: 8px;

		&::before {
			width: 44px;
			height: 44px;
		}

		&& svg {
			font-size: 24px;
		}
	}

	&:hover::before {
		background: #0072d2;
	}
`

const LightboxArrow = styled.button`
	position: absolute;
	top: 46%;
	${props => (props.$position === 'left' ? 'left: 4px;' : 'right: 4px;')}
	transform: translateY(-50%);
	z-index: 5;
	width: 44px;
	height: 44px;
	padding: 0;
	border: none;
	background: transparent;
	color: #f9f9f9;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		width: 34px;
		height: 34px;
		border-radius: 50%;
		border: 1px solid rgba(249, 249, 249, 0.3);
		background: rgba(10, 15, 34, 0.85);
		transition: background-color 0.2s ease;
	}

	&& svg {
		position: relative;
		z-index: 1;
		font-size: 18px;
	}

	@media (min-width: 700px) {
		${props => (props.$position === 'left' ? 'left: 8px;' : 'right: 8px;')}

		&::before {
			width: 44px;
			height: 44px;
		}

		&& svg {
			font-size: 24px;
		}
	}

	&:hover::before {
		background: #0072d2;
	}
`

const LightboxImageWrap = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	max-height: 75vh;
	border-radius: 12px;
	overflow: hidden;
`

const LightboxImage = styled.img`
	max-width: 100%;
	max-height: 74vh;
	width: auto;
	height: auto;
	object-fit: contain;
	border-radius: 10px;
	box-shadow: 0 24px 60px rgba(0, 0, 0, 0.85);
`

const LightboxCaption = styled.div`
	text-align: center;
	max-width: 680px;
	padding: 0 12px;
`

const LightboxTitle = styled.div`
	font-size: 17px;
	font-weight: 700;
	color: #ffffff;
	margin-bottom: 4px;
`

const LightboxDesc = styled.p`
	margin: 0;
	font-size: 14px;
	line-height: 1.5;
	color: rgba(249, 249, 249, 0.82);
`
