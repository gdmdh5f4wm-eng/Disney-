import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import styled from 'styled-components'
import { fetchCollectionResources } from '@utils/http/fetch-collection-resources'
import { collectionInfo } from '@utils/resources/collection-info'

import Container from '@components/ui/Container'
import { OpacityMotionContainer } from '@components/ui/MotionContainer'
import GridContainer from '@components/ui/GridContainer'
import Loader from '@components/ui/Loader'
import ErrorBlock from '@components/ui/ErrorBlock'
import ErrorPage from '@pages/Error'

const CollectionResourcesPage = () => {
	const params = useParams()
	const collection = collectionInfo[params.id]

	const { data, isPending, isError } = useQuery({
		queryKey: ['collection-data', params.id],
		queryFn: ({ signal }) => fetchCollectionResources({ signal, fetchQuery: collection.fetchQuery }),
		enabled: Boolean(collection),
	})

	if (!collection) {
		return <ErrorPage />
	}

	return (
		<StyledContainer>
			{isPending && <Loader />}
			{isError && <ErrorBlock message='Si è verificato un errore. Riprova più tardi.' />}
			{data && (
				<OpacityMotionContainer>
					<GridContainer movies={data} path={collection.mediaType} title={collection.collectionHeader} />
				</OpacityMotionContainer>
			)}
		</StyledContainer>
	)
}

export default CollectionResourcesPage

const StyledContainer = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	padding: 24px 20px 60px;
	text-align: center;

	@media (min-width: 700px) {
		margin-top: 30px;
		padding: 60px;
	}
`
