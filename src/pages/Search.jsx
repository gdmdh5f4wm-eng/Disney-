import { useQuery } from '@tanstack/react-query'
import useSearchQuery from '@hooks/use-searchquery'
import { fetchDataFromQuery } from '@utils/http/fetch-data-from-query'

import styled from 'styled-components'
import Container from '@components/ui/Container'
import SearchInput from '@components/ui/SearchInput'
import SearchResults from '@components/SearchResults'
import ExploreAllResources from '@components/ExploreAllResources'

const SearchPage = () => {
	const { query, apiQuery, isInitial, queryIsValid, onChangeHandler } = useSearchQuery()

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['search-data', apiQuery],
		queryFn: ({ signal }) => fetchDataFromQuery({ signal, query: apiQuery }),
		enabled: !isInitial && queryIsValid,
		retry: 1,
	})

	return (
		<StyledContainer>
			<SearchInput onChange={onChangeHandler} query={query} />
			<Wrapper>
				{!isInitial && (
					<SearchResults query={query} data={data} isLoading={isLoading} isError={isError} error={error} />
				)}
				{isInitial && <ExploreAllResources />}
			</Wrapper>
		</StyledContainer>
	)
}

export default SearchPage

const StyledContainer = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: start;
`

const Wrapper = styled.section`
	padding: 0 20px 60px;
	width: 100%;
	text-align: center;

	@media (min-width: 700px) {
		padding: 0 60px 60px;
	}
`
