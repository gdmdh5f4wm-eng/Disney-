import styled from 'styled-components'

import loaderIntro from '@videos/loader-video.mp4'

const PreLoader = () => {
	return (
		<Wrapper>
			<LoaderVideoContainer>
				<LoaderVideo autoPlay loop muted playsInline src={loaderIntro} type='video/mp4' />
			</LoaderVideoContainer>
		</Wrapper>
	)
}

export default PreLoader

const Wrapper = styled.section`
	position: fixed;
	inset: 0;
	z-index: 1400;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	height: 100dvh;
	width: 100%;
	background-color: #040b3e;
`

const LoaderVideoContainer = styled.div`
	width: 300px;
	height: 150px;
	overflow: hidden;
`

const LoaderVideo = styled.video`
	width: 100%;
	height: auto;
	object-fit: cover;
`
