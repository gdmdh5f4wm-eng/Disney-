import styled from 'styled-components'

import disneyLogo from '@images/disney-logo.svg'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<StyledFooter>
			<Wrapper>
				<StyledLogo src={disneyLogo} alt='Logo Disney+'></StyledLogo>
				<StyledParagraph>
					&copy; {currentYear} MISSIONE: PARIGI 2027 &bull; realizzato da{' '}
					<a href='https://github.com/mkwiecien00'>Małgorzata Kwiecień</a>
				</StyledParagraph>
			</Wrapper>
		</StyledFooter>
	)
}

export default Footer

const StyledFooter = styled.footer`
	width: 100%;
	min-height: 100px;
	position: absolute;
	bottom: 0;
`

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px 16px;
	background-color: #030408;
`

const StyledLogo = styled.img`
	height: 50px;

	@media (max-width: 600px) {
		height: 36px;
	}
`

const StyledParagraph = styled.p`
	margin: 5px 0;
	font-size: 12px;
	text-align: center;
	line-height: 1.4;
`
