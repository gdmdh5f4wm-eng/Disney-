import PropTypes from 'prop-types'
import styled from 'styled-components'
import { OpacityMotionContainer } from '@components/ui/MotionContainer'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ onClick, videoUrl }) => {
	return (
		<VideoWrapper onClick={onClick} role='dialog' aria-modal='true' aria-label='Riproduzione trailer'>
			<OpacityMotionContainer>
				<PlayerContent onClick={e => e.stopPropagation()}>
					<CloseButton type='button' onClick={onClick} aria-label='Chiudi lettore'>
						&times;
					</CloseButton>
					{videoUrl && (
						<AspectFrame>
							<ReactPlayer width='100%' height='100%' url={videoUrl} controls={true} />
						</AspectFrame>
					)}
					{!videoUrl && (
						<EmptyMessage>Spiacenti, nessun trailer disponibile per questo titolo.</EmptyMessage>
					)}
				</PlayerContent>
			</OpacityMotionContainer>
		</VideoWrapper>
	)
}

VideoPlayer.propTypes = {
	onClick: PropTypes.func,
	videoUrl: PropTypes.string,
}

export default VideoPlayer

const VideoWrapper = styled.div`
	position: fixed;
	inset: 0;
	padding: 20px;
	background-color: rgba(0, 0, 0, 0.86);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1300;
`

const PlayerContent = styled.div`
	position: relative;
	width: min(92vw, 960px);
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 10px;
`

const CloseButton = styled.button`
	width: 44px;
	height: 44px;
	font-size: 20px;
	line-height: 1;
	color: #ffffff;
	background-color: rgba(255, 255, 255, 0.14);
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-radius: 50%;
	cursor: pointer;
	transition: background-color 0.2s ease;

	@media (min-width: 700px) {
		width: 40px;
		height: 40px;
		font-size: 26px;
	}

	&:hover {
		background-color: rgba(255, 255, 255, 0.28);
	}
`

const AspectFrame = styled.div`
	width: 100%;
	aspect-ratio: 16 / 9;
	background-color: #000;
	border-radius: 10px;
	overflow: hidden;
`

const EmptyMessage = styled.p`
	width: 100%;
	padding: 28px 20px;
	margin: 0;
	text-align: center;
	background-color: rgba(16, 24, 52, 0.9);
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 12px;
`
