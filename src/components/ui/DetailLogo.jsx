import PropTypes from 'prop-types'
import styled from 'styled-components'

const DetailLogo = ({ data, logo }) => {
	return <Logo>{logo ? <img src={logo} alt={`Logo di ${data.title}`} /> : <h1>{data.title}</h1>}</Logo>
}

DetailLogo.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
	}).isRequired,
	logo: PropTypes.string,
}

export default DetailLogo

const Logo = styled.div`
	display: flex;
	margin-bottom: 24px;
	max-width: 100%;

	img {
		min-height: 70px;
		max-height: 220px;
		min-width: 160px;
		max-width: min(450px, 85vw);
		width: auto;
		object-fit: contain;
	}

	h1 {
		font-size: 28px;
		text-align: left;
		margin: 0;

		@media (min-width: 600px) {
			font-size: 35px;
		}
	}

	@media (min-width: 1000px) {
		margin-bottom: 40px;
	}
`
