import PropTypes from 'prop-types'
import styled from 'styled-components'

const DetailBackgroundImage = ({ backdropUrl, title }) => {
	return (
		<Background>
			<img src={backdropUrl} alt={`Immagine di sfondo di ${title}`} />
		</Background>
	)
}

DetailBackgroundImage.propTypes = {
	backdropUrl: PropTypes.string,
	title: PropTypes.string,
}

export default DetailBackgroundImage

const Background = styled.div`
	position: fixed;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0.5;
	z-index: -1;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
