import PropTypes from 'prop-types'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'

import { MotionContainer } from '@components/ui/MotionContainer'
import { collectionItems } from '@utils/resources/collection-items'
import CollectionGridItem from '@components/ui/CollectionGridItem'

const Collections = ({ onBabiClick }) => {
	return (
		<Wrapper>
			<MotionContainer delay={0.5}>
				<Grid container spacing={2} columns={6}>
					{collectionItems.map(item => (
						<CollectionGridItem key={item.query} item={item} onBabiClick={onBabiClick} />
					))}
				</Grid>
			</MotionContainer>
		</Wrapper>
	)
}

Collections.propTypes = {
	onBabiClick: PropTypes.func,
}

export default Collections

const Wrapper = styled.section`
	padding: 0 20px;

	@media (min-width: 700px) {
		padding: 0 60px;
	}
`
