import PropTypes from 'prop-types'
import styled from 'styled-components'

import Title from '@components/ui/Title'
import { Grid } from '@mui/material'
import ItemContainer from '@components/ui/ItemContainer'

const GridContainer = ({ movies, title }) => {
	return (
		<>
			{title && <Title>{title}</Title>}
			<Grid container spacing={2} columns={12} alignItems='center'>
				{movies.map((movie, index) => (
					<Grid
						item
						key={`${movie.media_type || 'res'}-${movie.id || movie.detailsId || index}-${index}`}
						xs={12}
						sm={4}
						md={3}
						lg={2}
					>
						<VisualItemContainer>
							<img
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.path}`}
								alt={movie.title || movie.name}
							/>
						</VisualItemContainer>
					</Grid>
				))}
			</Grid>
		</>
	)
}

GridContainer.propTypes = {
	movies: PropTypes.array,
	title: PropTypes.string,
	path: PropTypes.string,
}

export default GridContainer

const VisualItemContainer = styled(ItemContainer)`
	cursor: default;
`
