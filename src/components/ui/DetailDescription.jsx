import PropTypes from 'prop-types'
import styled from 'styled-components'

const DetailDescription = ({ overview }) => {
	return <DescriptionParagraph>{overview}</DescriptionParagraph>
}

DetailDescription.propTypes = {
	overview: PropTypes.string,
}

export default DetailDescription

const DescriptionParagraph = styled.p`
	margin: 0;
	line-height: 1.8;
	text-align: left;

	@media (min-width: 800px) {
		font-size: 16px;
		line-height: 2;
	}

	@media (min-width: 1000px) {
		font-size: 18px;
		max-width: 780px;
	}
`
