import { useEffect, useLayoutEffect, useCallback } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'

import Container from '@components/ui/Container'
import Section01Destination from '@components/essenziale/Section01Destination'
import Section02Flights from '@components/essenziale/Section02Flights'
import Section03Packing from '@components/essenziale/Section03Packing'
import Section04Disneyland from '@components/essenziale/Section04Disneyland'
import Section05Surprise from '@components/essenziale/Section05Surprise'
import { ESSENZIALE_SECTIONS } from '@utils/resources/essenziale-data'
import {
	scrollToTopInstant,
	enableManualScrollRestoration,
} from '@utils/scroll/scroll-to-top'

const VALID_SECTION_IDS = ESSENZIALE_SECTIONS.map(section => section.id)

const EssenzialePage = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const paramSection = searchParams.get('sezione')
	const activeId = VALID_SECTION_IDS.includes(paramSection) ? paramSection : ESSENZIALE_SECTIONS[0].id
	const activeIndex = ESSENZIALE_SECTIONS.findIndex(section => section.id === activeId)

	const forceScrollTop = useCallback(() => {
		scrollToTopInstant()
	}, [])

	useLayoutEffect(() => {
		enableManualScrollRestoration()
		forceScrollTop()
		const rafId = window.requestAnimationFrame(() => {
			forceScrollTop()
		})
		return () => {
			window.cancelAnimationFrame(rafId)
		}
	}, [activeId, forceScrollTop])

	useEffect(() => {
		enableManualScrollRestoration()
		forceScrollTop()
	}, [forceScrollTop])

	const selectSection = sectionId => {
		forceScrollTop()
		setSearchParams({ sezione: sectionId })
		window.requestAnimationFrame(() => {
			forceScrollTop()
		})
	}

	const prevSection = activeIndex > 0 ? ESSENZIALE_SECTIONS[activeIndex - 1] : null
	const nextSection =
		activeIndex < ESSENZIALE_SECTIONS.length - 1 ? ESSENZIALE_SECTIONS[activeIndex + 1] : null

	const renderActiveSection = () => {
		switch (activeId) {
			case 'voli':
				return <Section02Flights />
			case 'valigia':
				return <Section03Packing />
			case 'disneyland':
				return <Section04Disneyland />
			case 'regalo':
				return <Section05Surprise />
			case 'destinazione':
			default:
				return <Section01Destination />
		}
	}

	return (
		<PageContainer>
			<PageInner>
				<TopBar>
					<BackHomeLink to='/'>
						<ArrowBackIosNewRoundedIcon fontSize='small' />
						<span>Torna alla Home</span>
					</BackHomeLink>

					<MissionTag>MISSIONE: PARIGI 2027 • 1 – 5 LUGLIO 2027</MissionTag>
				</TopBar>

				<PageHeroHeader>
					<PageTitle>ESSENZIALE</PageTitle>
					<PageSubtitle>
						La guida interattiva privata del nostro viaggio a Parigi: esplora tutte e cinque le sezioni preparate per noi.
					</PageSubtitle>
				</PageHeroHeader>

				<TabsGrid role='tablist' aria-label='Sezioni della pagina Essenziale'>
					{ESSENZIALE_SECTIONS.map((section, idx) => {
						const isActive = section.id === activeId
						return (
							<SectionTab
								key={section.id}
								type='button'
								role='tab'
								aria-selected={isActive}
								$active={isActive}
								$isSecret={Boolean(section.isSecret)}
								$isLastOdd={idx === ESSENZIALE_SECTIONS.length - 1}
								onClick={() => selectSection(section.id)}
							>
								<TabTop>
									<TabNumber $active={isActive} $isSecret={Boolean(section.isSecret)}>
										{section.number}
									</TabNumber>
									<TabStatus $active={isActive}>
										{isActive ? 'Attiva' : 'Apri'}
									</TabStatus>
								</TabTop>
								<TabTitle>{section.shortTitle}</TabTitle>
								<TabSubtitle>{section.subtitle}</TabSubtitle>
							</SectionTab>
						)
					})}
				</TabsGrid>

				<AnimatePresence mode='wait' onExitComplete={forceScrollTop}>
					<MotionSectionWrap
						key={activeId}
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.22 }}
					>
						{renderActiveSection()}
					</MotionSectionWrap>
				</AnimatePresence>

				<BottomPager>
					<div>
						{prevSection && (
							<PagerButton type='button' onClick={() => selectSection(prevSection.id)}>
								<ArrowBackIosNewRoundedIcon fontSize='small' />
								<span>
									{prevSection.number}. {prevSection.shortTitle}
								</span>
							</PagerButton>
						)}
					</div>
					<div>
						{nextSection && (
							<PagerButton
								type='button'
								$highlight={Boolean(nextSection.isSecret)}
								onClick={() => selectSection(nextSection.id)}
							>
								<span>
									{nextSection.number}. {nextSection.shortTitle}
								</span>
								<ArrowForwardIosRoundedIcon fontSize='small' />
							</PagerButton>
						)}
					</div>
				</BottomPager>
			</PageInner>
		</PageContainer>
	)
}

export default EssenzialePage

const PageContainer = styled(Container)`
	background: radial-gradient(circle at top center, rgba(16, 28, 68, 0.55) 0%, transparent 55%);
`

const PageInner = styled.div`
	width: 100%;
	max-width: 1240px;
	margin: 0 auto;
	padding: 24px 18px 56px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 24px;

	@media (max-width: 380px) {
		padding: 20px 14px 48px;
		gap: 20px;
	}

	@media (min-width: 700px) {
		padding: 36px 48px 80px;
		gap: 28px;
	}
`

const TopBar = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
`

const BackHomeLink = styled(Link)`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	min-height: 44px;
	padding: 8px 14px;
	border-radius: 10px;
	background: rgba(9, 13, 28, 0.85);
	border: 1px solid rgba(249, 249, 249, 0.2);
	color: #f9f9f9;
	font-size: 13px;
	font-weight: 600;
	transition: all 0.25s ease;

	&& svg {
		font-size: 16px;
	}

	@media (min-width: 700px) {
		gap: 8px;
		&& svg {
			font-size: 18px;
		}
	}

	&:hover {
		background: rgba(0, 114, 210, 0.28);
		border-color: rgba(124, 196, 255, 0.7);
	}
`

const MissionTag = styled.div`
	padding: 7px 14px;
	border-radius: 999px;
	background: rgba(0, 114, 210, 0.16);
	border: 1px solid rgba(94, 184, 255, 0.38);
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.14em;
	color: #9dd4ff;

	@media (max-width: 420px) {
		padding: 6px 10px;
		font-size: 10px;
		letter-spacing: 0.08em;
	}
`

const PageHeroHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

const PageTitle = styled.h1`
	margin: 0;
	font-size: clamp(30px, 4.5vw, 48px);
	line-height: 1.08;
	font-weight: 900;
	letter-spacing: 0.08em;
	color: #ffffff;
`

const PageSubtitle = styled.p`
	margin: 0;
	max-width: 70ch;
	font-size: 15px;
	line-height: 1.55;
	color: rgba(249, 249, 249, 0.76);
`

const TabsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 12px;

	@media (min-width: 680px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	@media (min-width: 1020px) {
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}
`

const SectionTab = styled.button`
	text-align: left;
	min-height: 44px;
	padding: 14px;
	border-radius: 14px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	gap: 6px;
	transition: all 0.25s ease;
	grid-column: ${props => (props.$isLastOdd ? 'span 2' : 'span 1')};

	@media (max-width: 380px) {
		padding: 12px 10px;
		gap: 4px;
	}

	@media (min-width: 680px) {
		grid-column: span 1;
	}

	border: 1px solid
		${props => {
			if (props.$isSecret && props.$active) {
				return 'rgba(243, 207, 122, 0.9)'
			}
			if (props.$isSecret) {
				return 'rgba(243, 207, 122, 0.32)'
			}
			if (props.$active) {
				return 'rgba(124, 196, 255, 0.85)'
			}
			return 'rgba(249, 249, 249, 0.14)'
		}};

	background: ${props => {
		if (props.$isSecret && props.$active) {
			return 'linear-gradient(150deg, rgba(46, 36, 16, 0.85) 0%, rgba(14, 18, 42, 0.95) 100%)'
		}
		if (props.$active) {
			return 'linear-gradient(150deg, rgba(0, 114, 210, 0.34) 0%, rgba(12, 20, 48, 0.96) 100%)'
		}
		return 'rgba(9, 13, 28, 0.82)'
	}};

	box-shadow: ${props =>
		props.$active ? '0 14px 30px -14px rgba(0, 114, 210, 0.55)' : '0 8px 20px -14px rgba(0, 0, 0, 0.7)'};

	&:hover {
		transform: translateY(-2px);
		border-color: ${props =>
			props.$isSecret ? 'rgba(243, 207, 122, 0.85)' : 'rgba(124, 196, 255, 0.72)'};
	}
`

const TabTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
`

const TabNumber = styled.span`
	font-size: 12px;
	font-weight: 800;
	letter-spacing: 0.12em;
	color: ${props => {
		if (props.$isSecret) {
			return '#f3cf7a'
		}
		return props.$active ? '#8fd0ff' : 'rgba(249, 249, 249, 0.55)'
	}};
`

const TabStatus = styled.span`
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: ${props => (props.$active ? '#ffffff' : 'rgba(249, 249, 249, 0.45)')};
`

const TabTitle = styled.div`
	font-size: 14px;
	line-height: 1.3;
	font-weight: 700;
	color: #ffffff;
`

const TabSubtitle = styled.div`
	font-size: 12px;
	line-height: 1.35;
	color: rgba(249, 249, 249, 0.65);
`

const MotionSectionWrap = styled(motion.div)`
	width: 100%;
`

const BottomPager = styled.div`
	margin-top: 12px;
	padding-top: 22px;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
`

const PagerButton = styled.button`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	min-height: 44px;
	padding: 11px 16px;
	border-radius: 12px;
	border: 1px solid
		${props => (props.$highlight ? 'rgba(243, 207, 122, 0.65)' : 'rgba(124, 196, 255, 0.38)')};
	background: ${props =>
		props.$highlight ? 'rgba(243, 207, 122, 0.14)' : 'rgba(12, 20, 48, 0.85)'};
	color: ${props => (props.$highlight ? '#fff8e7' : '#f9f9f9')};
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.25s ease;

	&& svg {
		font-size: 16px;
	}

	@media (max-width: 480px) {
		padding: 10px 12px;
		font-size: 13px;
		gap: 6px;
	}

	@media (min-width: 700px) {
		&& svg {
			font-size: 18px;
		}
	}

	&:hover {
		background: ${props =>
			props.$highlight ? 'rgba(243, 207, 122, 0.24)' : 'rgba(0, 114, 210, 0.35)'};
		border-color: ${props =>
			props.$highlight ? 'rgba(243, 207, 122, 0.9)' : 'rgba(124, 196, 255, 0.8)'};
	}
`
