import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import Carousel from '@components/ui/Carousel'

import Title from '@components/ui/Title'
import Loader from '@components/ui/Loader'
import ErrorBlock from '@components/ui/ErrorBlock'
import { MotionContainer } from '@components/ui/MotionContainer'
import ItemContainer from '@components/ui/ItemContainer'

const ResourcesCarousel = ({ data, isPending, isError }) => {
	const [slidesToShow, setSlidesToShow] = useState(2)

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth
			let slidesAmount

			switch (true) {
				case width <= 400:
					slidesAmount = 1
					break
				case width <= 600:
					slidesAmount = 2
					break
				case width <= 900:
					slidesAmount = 3
					break
				case width <= 1100:
					slidesAmount = 4
					break
				default:
					slidesAmount = 5
					break
			}

			setSlidesToShow(slidesAmount)
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const sliderSettings = {
		slidesToShow: slidesToShow,
	}

	return (
		<Wrapper>
			<MotionContainer delay={1}>
				<>
					{isPending && <Loader />}
					{isError && <ErrorBlock message='Si è verificato un errore. Riprova più tardi.' />}
					{data &&
						data.map(category => {
							return (
								<div key={category.category}>
									<StyledTitle>{category.title}</StyledTitle>
									{category.data && (
										<StyledCarousel additionalSettings={sliderSettings}>
											{category.data.results.map((item, index) => (
												<DataContainer key={item.id || index}>
													<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title || item.name} />
												</DataContainer>
											))}
										</StyledCarousel>
									)}
									{!category.data && <ErrorBlock message={`Impossibile caricare "${category.title}". Riprova più tardi.`} />}
								</div>
							)
						})}
				</>
			</MotionContainer>
		</Wrapper>
	)
}

ResourcesCarousel.propTypes = {
	data: PropTypes.array,
	isPending: PropTypes.bool,
	isError: PropTypes.bool,
}

export default ResourcesCarousel

const Wrapper = styled.section`
	margin: 40px 0 10px;

	@media (min-width: 700px) {
		margin: 60px 0 10px;
	}
`

const StyledTitle = styled(Title)`
	margin: 0 20px 10px;

	@media (min-width: 700px) {
		margin: 0 60px 10px;
	}
`

const StyledCarousel = styled(Carousel)`
	.slick-track {
		padding: 10px 0 40px;
	}
`

const DataContainer = styled(ItemContainer)`
	cursor: default;

	&:hover {
		box-shadow: 0px 25px 30px -10px rgba(0, 0, 0, 0.7);
		transform: scale(1.05);
	}
`
