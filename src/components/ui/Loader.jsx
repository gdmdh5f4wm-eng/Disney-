import styled from 'styled-components'
import PulseLoader from 'react-spinners/PulseLoader'

const Loader = () => {
	return (
		<LoaderBlock role='status' aria-label='Caricamento...'>
			<PulseLoader color='rgba(255, 255, 255, 0.7)' margin={4} size={10} />
			<LoadingLabel>Caricamento...</LoadingLabel>
		</LoaderBlock>
	)
}
export default Loader

const LoaderBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	margin: 20px 20px 40px;

	@media (min-width: 700px) {
		margin: 20px 60px 50px;
	}
`

const LoadingLabel = styled.span`
	font-size: 13px;
	color: rgba(255, 255, 255, 0.72);
`
