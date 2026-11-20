import PropTypes from 'prop-types'
import { OpacityMotionContainer } from '@components/ui/MotionContainer'
import GridContainer from '@components/ui/GridContainer'
import Title from '@components/ui/Title'
import Loader from '@components/ui/Loader'
import ErrorBlock from '@components/ui/ErrorBlock'

const SearchResults = ({ query, data, isLoading, isError, error }) => {
	return (
		<OpacityMotionContainer>
			<>
				<Title>Risultati di ricerca per &ldquo;{query}&rdquo;</Title>
				{isLoading && <Loader />}
				{isError && (
					<ErrorBlock message={error?.message || 'Si è verificato un errore durante la ricerca. Riprova più tardi.'} />
				)}
				{!isError && data?.length > 0 && (
					<OpacityMotionContainer>
						<GridContainer movies={data} />
					</OpacityMotionContainer>
				)}
				{!isError && !isLoading && Array.isArray(data) && data.length === 0 && (
					<p>Nessun film o serie TV trovato per la tua ricerca.</p>
				)}
			</>
		</OpacityMotionContainer>
	)
}

SearchResults.propTypes = {
	query: PropTypes.string,
	data: PropTypes.array,
	isLoading: PropTypes.bool,
	isError: PropTypes.bool,
	error: PropTypes.shape({
		message: PropTypes.string,
	}),
}

export default SearchResults
