import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import Title from '@components/ui/Title'
import { MotionContainer } from '@components/ui/MotionContainer'
import ItemContainer from '@components/ui/ItemContainer'

const Essential = forwardRef(({ isHighlighted = false, isOpening = false }, ref) => {
	return (
		<Wrapper id='essenziale-section' ref={ref}>
			<MotionContainer delay={1}>
				<div>
					<StyledTitle $highlighted={isHighlighted}>Essenziale</StyledTitle>
					<CardTrack>
						<CardSlide>
							<Link to='/essenziale' aria-label='Apri la pagina Essenziale'>
								<DataContainer
									data-essential-card='true'
									$highlighted={isHighlighted}
									$opening={isOpening}
								>
									<img src='/image/eiffel-tower-..jpg' alt='Torre Eiffel' />
									{isHighlighted && <HighlightSweep aria-hidden='true' />}
								</DataContainer>
							</Link>
						</CardSlide>
					</CardTrack>
				</div>
			</MotionContainer>
		</Wrapper>
	)
})

Essential.displayName = 'Essential'

Essential.propTypes = {
	isHighlighted: PropTypes.bool,
	isOpening: PropTypes.bool,
}

export default Essential

const sheenSweep = keyframes`
	0% {
		transform: translateX(-140%) skewX(-18deg);
		opacity: 0;
	}
	30% {
		opacity: 0.75;
	}
	100% {
		transform: translateX(220%) skewX(-18deg);
		opacity: 0;
	}
`

const pulseHalo = keyframes`
	0% {
		box-shadow: 0 0 0 0 rgba(94, 184, 255, 0.7), 0px 25px 30px -10px rgba(0, 0, 0, 0.7);
	}
	60% {
		box-shadow: 0 0 38px 10px rgba(94, 184, 255, 0.52), 0px 28px 36px -10px rgba(0, 0, 0, 0.82);
	}
	100% {
		box-shadow: 0 0 28px 6px rgba(94, 184, 255, 0.45), 0px 28px 36px -10px rgba(0, 0, 0, 0.82);
	}
`

const Wrapper = styled.section`
	margin: 40px 0 0;

	@media (min-width: 700px) {
		margin: 60px 0 0;
	}
`

const StyledTitle = styled(Title)`
	margin: 0 20px 10px;
	transition: color 0.4s ease, text-shadow 0.4s ease;
	color: ${props => (props.$highlighted ? '#d8efff' : 'inherit')};
	text-shadow: ${props => (props.$highlighted ? '0 0 18px rgba(94, 184, 255, 0.65)' : 'none')};

	@media (min-width: 700px) {
		margin: 0 60px 10px;
	}
`

const CardTrack = styled.div`
	width: 100%;
	padding: 10px 5% 0;
	box-sizing: border-box;
`

const CardSlide = styled.div`
	width: 100%;
	padding: 0 10px;
	box-sizing: border-box;

	@media (min-width: 401px) {
		width: 50%;
	}

	@media (min-width: 601px) {
		width: 33.3333%;
	}

	@media (min-width: 901px) {
		width: 25%;
	}

	@media (min-width: 1101px) {
		width: 20%;
	}
`

const DataContainer = styled(ItemContainer)`
	aspect-ratio: 2 / 3;
	transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease,
		box-shadow 0.45s ease, filter 0.3s ease;

	img {
		object-fit: cover;
	}

	&:hover {
		box-shadow: 0px 25px 30px -10px rgba(0, 0, 0, 0.7);
		transform: scale(1.05);
	}

	${props =>
		props.$highlighted &&
		css`
			border-color: rgba(143, 208, 255, 0.95);
			transform: scale(1.05);
			animation: ${pulseHalo} 0.75s ease forwards;
		`}

	${props =>
		props.$opening &&
		css`
			border-color: #ffffff;
			transform: scale(1.09);
			filter: brightness(1.14);
			box-shadow: 0 0 46px 12px rgba(124, 196, 255, 0.68), 0px 30px 42px -10px rgba(0, 0, 0, 0.9);
		`}
`

const HighlightSweep = styled.span`
	position: absolute;
	inset: 0;
	width: 45%;
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(215, 238, 255, 0.45) 50%,
		rgba(255, 255, 255, 0) 100%
	);
	pointer-events: none;
	animation: ${sheenSweep} 0.8s ease-out forwards;
`
