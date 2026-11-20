import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded'
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'

import {
	PACKING_CATEGORIES,
	SPECIAL_EVENING_CATEGORY,
} from '@utils/resources/essenziale-data'

const STORAGE_KEY = 'mp2027_packing_checklist_v1'

const loadInitialChecked = () => {
	try {
		const raw = localStorage.getItem(STORAGE_KEY)
		if (!raw) {
			return {}
		}
		const parsed = JSON.parse(raw)
		return parsed && typeof parsed === 'object' ? parsed : {}
	} catch {
		return {}
	}
}

const Section03Packing = () => {
	const [checkedMap, setCheckedMap] = useState(loadInitialChecked)
	const [confirmResetOpen, setConfirmResetOpen] = useState(false)

	const allItems = [
		...PACKING_CATEGORIES.flatMap(cat => cat.items),
		...SPECIAL_EVENING_CATEGORY.items,
	]
	const totalCount = allItems.length
	const completedCount = allItems.filter(item => Boolean(checkedMap[item.id])).length
	const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedMap))
		} catch {
			// Ignore storage quota errors
		}
	}, [checkedMap])

	useEffect(() => {
		if (!confirmResetOpen) {
			return undefined
		}
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				setConfirmResetOpen(false)
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [confirmResetOpen])

	const toggleItem = itemId => {
		setCheckedMap(prev => ({
			...prev,
			[itemId]: !prev[itemId],
		}))
	}

	const handleConfirmReset = () => {
		setCheckedMap({})
		setConfirmResetOpen(false)
	}

	return (
		<SectionRoot>
			<SectionHeading>
				<Eyebrow>SEZIONE 03 • COSA METTERE IN VALIGIA</Eyebrow>
				<MainTitle>NON DIMENTICARE NULLA</MainTitle>
				<LeadText>
					Spunta ogni elemento mano a mano che prepari i bagagli: i tuoi progressi restano salvati automaticamente sul dispositivo.
				</LeadText>
			</SectionHeading>

			<ProgressPanel>
				<ProgressTop>
					<div>
						<ProgressLabel>AVANZAMENTO VALIGIA</ProgressLabel>
						<ProgressStats>
							<strong>{completedCount}</strong> su <strong>{totalCount}</strong> elementi preparati
						</ProgressStats>
					</div>

					<ProgressActions>
						<PercentageValue>{percentage}%</PercentageValue>
						<ResetButton
							type='button'
							onClick={() => setConfirmResetOpen(true)}
							disabled={completedCount === 0}
						>
							<RestartAltRoundedIcon fontSize='small' />
							<span>Azzera</span>
						</ResetButton>
					</ProgressActions>
				</ProgressTop>

				<ProgressBarTrack role='progressbar' aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
					<ProgressBarFill $percentage={percentage} />
				</ProgressBarTrack>

				{percentage === 100 && (
					<CompletedBanner>
						Valigia completata al 100%: tutto pronto per partire verso Parigi!
					</CompletedBanner>
				)}
			</ProgressPanel>

			<CategoriesGrid>
				{PACKING_CATEGORIES.map(category => {
					const catDone = category.items.filter(item => Boolean(checkedMap[item.id])).length
					return (
						<CategoryCard key={category.id}>
							<CategoryMedia>
								<img src={category.image} alt={category.imageAlt} />
								<CategoryMediaScrim />
								<CategoryHeaderOverlay>
									<CategoryTitle>{category.title}</CategoryTitle>
									<CategoryCounter>
										{catDone}/{category.items.length}
									</CategoryCounter>
								</CategoryHeaderOverlay>
							</CategoryMedia>

							<ChecklistBody>
								{category.items.map(item => {
									const isChecked = Boolean(checkedMap[item.id])
									return (
										<ChecklistRow
											key={item.id}
											type='button'
											$checked={isChecked}
											onClick={() => toggleItem(item.id)}
											aria-pressed={isChecked}
										>
											<CheckIconWrap $checked={isChecked}>
												{isChecked ? (
													<CheckCircleRoundedIcon fontSize='small' />
												) : (
													<RadioButtonUncheckedRoundedIcon fontSize='small' />
												)}
											</CheckIconWrap>
											<ItemLabel $checked={isChecked}>{item.label}</ItemLabel>
										</ChecklistRow>
									)
								})}
							</ChecklistBody>
						</CategoryCard>
					)
				})}
			</CategoriesGrid>

			<SpecialCard>
				<SpecialHeader>
					<SpecialTextGroup>
						<SpecialBadge>
							<AutoAwesomeRoundedIcon fontSize='small' />
							<span>{SPECIAL_EVENING_CATEGORY.badge}</span>
						</SpecialBadge>
						<SpecialTitle>{SPECIAL_EVENING_CATEGORY.title}</SpecialTitle>
						<SpecialSubtitle>{SPECIAL_EVENING_CATEGORY.subtitle}</SpecialSubtitle>
					</SpecialTextGroup>

					<SpecialCounter>
						{SPECIAL_EVENING_CATEGORY.items.filter(item => Boolean(checkedMap[item.id])).length} /{' '}
						{SPECIAL_EVENING_CATEGORY.items.length}
					</SpecialCounter>
				</SpecialHeader>

				<SpecialItemsGrid>
					{SPECIAL_EVENING_CATEGORY.items.map(item => {
						const isChecked = Boolean(checkedMap[item.id])
						return (
							<SpecialItemButton
								key={item.id}
								type='button'
								$checked={isChecked}
								onClick={() => toggleItem(item.id)}
								aria-pressed={isChecked}
							>
								<CheckIconWrap $checked={isChecked} $gold>
									{isChecked ? (
										<CheckCircleRoundedIcon fontSize='small' />
									) : (
										<RadioButtonUncheckedRoundedIcon fontSize='small' />
									)}
								</CheckIconWrap>
								<ItemLabel $checked={isChecked}>{item.label}</ItemLabel>
							</SpecialItemButton>
						)
					})}
				</SpecialItemsGrid>
			</SpecialCard>

			{confirmResetOpen && (
				<ConfirmOverlay role='dialog' aria-modal='true' aria-labelledby='reset-dialog-title'>
					<ConfirmDialog>
						<ConfirmIconWrap>
							<WarningAmberRoundedIcon />
						</ConfirmIconWrap>
						<ConfirmTitle id='reset-dialog-title'>Azzerare la checklist?</ConfirmTitle>
						<ConfirmText>
							Tutte le spunte salvate fino a questo momento verranno rimosse. Potrai selezionarle nuovamente in qualsiasi momento.
						</ConfirmText>
						<ConfirmButtons>
							<CancelButton type='button' onClick={() => setConfirmResetOpen(false)}>
								Annulla
							</CancelButton>
							<ConfirmActionButton type='button' onClick={handleConfirmReset}>
								Conferma azzeramento
							</ConfirmActionButton>
						</ConfirmButtons>
					</ConfirmDialog>
				</ConfirmOverlay>
			)}
		</SectionRoot>
	)
}

export default Section03Packing

const SectionRoot = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 28px;
`

const SectionHeading = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

const Eyebrow = styled.span`
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.16em;
	color: #5eb8ff;
`

const MainTitle = styled.h2`
	margin: 0;
	font-size: clamp(24px, 3.6vw, 38px);
	line-height: 1.15;
	font-weight: 800;
	color: #ffffff;
`

const LeadText = styled.p`
	margin: 0;
	font-size: 15px;
	line-height: 1.55;
	color: rgba(249, 249, 249, 0.78);
	max-width: 68ch;
`

const ProgressPanel = styled.div`
	background: linear-gradient(155deg, rgba(16, 24, 52, 0.94) 0%, rgba(8, 12, 28, 0.98) 100%);
	border: 1px solid rgba(94, 184, 255, 0.28);
	border-radius: 16px;
	padding: 20px 22px;
	display: flex;
	flex-direction: column;
	gap: 14px;
	box-shadow: 0 20px 40px -18px rgba(0, 0, 0, 0.85);

	@media (max-width: 600px) {
		padding: 18px 16px;
	}
`

const ProgressTop = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
`

const ProgressLabel = styled.div`
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.14em;
	color: #5eb8ff;
	margin-bottom: 4px;
`

const ProgressStats = styled.div`
	font-size: 15px;
	color: rgba(249, 249, 249, 0.85);

	strong {
		color: #ffffff;
	}
`

const ProgressActions = styled.div`
	display: flex;
	align-items: center;
	gap: 14px;
`

const PercentageValue = styled.span`
	font-size: 26px;
	font-weight: 900;
	color: #7cc4ff;
	letter-spacing: 0.02em;
`

const ResetButton = styled.button`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	min-height: 44px;
	padding: 8px 13px;
	border-radius: 10px;
	border: 1px solid rgba(249, 249, 249, 0.22);
	background: rgba(4, 7, 20, 0.65);
	color: #f9f9f9;
	font-size: 13px;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;

	&& svg {
		font-size: 16px;
	}

	@media (min-width: 700px) {
		&& svg {
			font-size: 18px;
		}
	}

	&:hover:not(:disabled) {
		border-color: #f87171;
		color: #fecaca;
		background: rgba(127, 29, 29, 0.35);
	}

	&:disabled {
		opacity: 0.42;
		cursor: not-allowed;
	}
`

const ProgressBarTrack = styled.div`
	width: 100%;
	height: 11px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.08);
	overflow: hidden;
`

const ProgressBarFill = styled.div`
	width: ${props => props.$percentage}%;
	height: 100%;
	border-radius: 999px;
	background: linear-gradient(90deg, #0072d2 0%, #3ea6ff 60%, #7ce2ff 100%);
	transition: width 0.35s ease;
`

const CompletedBanner = styled.div`
	padding: 10px 14px;
	border-radius: 10px;
	background: rgba(16, 185, 129, 0.16);
	border: 1px solid rgba(52, 211, 153, 0.45);
	color: #a7f3d0;
	font-size: 14px;
	font-weight: 600;
`

const CategoriesGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;

	@media (min-width: 820px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

const CategoryCard = styled.div`
	background: linear-gradient(160deg, rgba(16, 24, 52, 0.92) 0%, rgba(8, 12, 28, 0.98) 100%);
	border: 1px solid rgba(249, 249, 249, 0.14);
	border-radius: 16px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	box-shadow: 0 20px 40px -18px rgba(0, 0, 0, 0.82);
`

const CategoryMedia = styled.div`
	position: relative;
	width: 100%;
	height: 170px;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
`

const CategoryMediaScrim = styled.div`
	position: absolute;
	inset: 0;
	background: linear-gradient(180deg, rgba(4, 7, 20, 0.15) 0%, rgba(4, 7, 20, 0.88) 100%);
`

const CategoryHeaderOverlay = styled.div`
	position: absolute;
	left: 16px;
	right: 16px;
	bottom: 14px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
`

const CategoryTitle = styled.h3`
	margin: 0;
	font-size: 18px;
	font-weight: 800;
	letter-spacing: 0.1em;
	color: #ffffff;
`

const CategoryCounter = styled.span`
	padding: 3px 10px;
	border-radius: 999px;
	background: rgba(4, 7, 20, 0.78);
	border: 1px solid rgba(124, 196, 255, 0.4);
	font-size: 12px;
	font-weight: 700;
	color: #8fd0ff;
`

const ChecklistBody = styled.div`
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	flex: 1;
`

const ChecklistRow = styled.button`
	width: 100%;
	min-height: 44px;
	text-align: left;
	padding: 10px 12px;
	border-radius: 10px;
	border: 1px solid ${props => (props.$checked ? 'rgba(62, 166, 255, 0.5)' : 'rgba(249, 249, 249, 0.12)')};
	background: ${props => (props.$checked ? 'rgba(0, 114, 210, 0.18)' : 'rgba(4, 7, 20, 0.55)')};
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		border-color: rgba(124, 196, 255, 0.6);
		background: ${props => (props.$checked ? 'rgba(0, 114, 210, 0.24)' : 'rgba(18, 28, 60, 0.72)')};
	}
`

const CheckIconWrap = styled.span`
	flex: 0 0 auto;
	display: inline-flex;
	color: ${props => {
		if (!props.$checked) {
			return 'rgba(249, 249, 249, 0.48)'
		}
		return props.$gold ? '#f3cf7a' : '#4cc3ff'
	}};

	@media (max-width: 600px) {
		&& svg {
			font-size: 16px;
		}
	}
`

const ItemLabel = styled.span`
	font-size: 14px;
	line-height: 1.4;
	font-weight: 500;
	color: ${props => (props.$checked ? 'rgba(249, 249, 249, 0.56)' : '#f9f9f9')};
	text-decoration: ${props => (props.$checked ? 'line-through' : 'none')};
	transition: color 0.2s ease;
`

const SpecialCard = styled.div`
	position: relative;
	background: radial-gradient(circle at top right, rgba(229, 193, 88, 0.16), transparent 55%),
		linear-gradient(145deg, rgba(20, 26, 56, 0.96) 0%, rgba(7, 10, 24, 0.98) 100%);
	border: 1px solid rgba(229, 193, 88, 0.55);
	border-radius: 18px;
	padding: 26px;
	box-shadow: 0 24px 48px -18px rgba(0, 0, 0, 0.9), 0 0 28px -10px rgba(229, 193, 88, 0.25);
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media (max-width: 600px) {
		padding: 20px 16px;
	}
`

const SpecialHeader = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
	gap: 14px;
`

const SpecialTextGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

const SpecialBadge = styled.div`
	align-self: flex-start;
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 5px 12px;
	border-radius: 999px;
	background: rgba(229, 193, 88, 0.16);
	border: 1px solid rgba(243, 207, 122, 0.5);
	color: #f3cf7a;
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.14em;

	@media (max-width: 600px) {
		&& svg {
			font-size: 16px;
		}
	}
`

const SpecialTitle = styled.h3`
	margin: 0;
	font-size: clamp(22px, 3vw, 30px);
	font-weight: 800;
	letter-spacing: 0.04em;
	color: #fff8e7;
`

const SpecialSubtitle = styled.p`
	margin: 0;
	font-size: 14px;
	line-height: 1.5;
	color: rgba(255, 244, 214, 0.8);
`

const SpecialCounter = styled.span`
	padding: 6px 14px;
	border-radius: 999px;
	background: rgba(12, 16, 36, 0.82);
	border: 1px solid rgba(243, 207, 122, 0.45);
	font-size: 14px;
	font-weight: 800;
	color: #f3cf7a;
`

const SpecialItemsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 12px;

	@media (min-width: 640px) {
		grid-template-columns: 1fr 1fr;
	}
`

const SpecialItemButton = styled.button`
	width: 100%;
	min-height: 44px;
	text-align: left;
	padding: 12px 14px;
	border-radius: 12px;
	border: 1px solid ${props => (props.$checked ? 'rgba(243, 207, 122, 0.65)' : 'rgba(243, 207, 122, 0.25)')};
	background: ${props => (props.$checked ? 'rgba(229, 193, 88, 0.16)' : 'rgba(4, 7, 20, 0.58)')};
	display: flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		border-color: rgba(243, 207, 122, 0.72);
	}
`

const ConfirmOverlay = styled.div`
	position: fixed;
	inset: 0;
	z-index: 1600;
	background: rgba(3, 5, 14, 0.85);
	backdrop-filter: blur(8px);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
`

const ConfirmDialog = styled.div`
	width: 100%;
	max-width: 420px;
	background: #0d1328;
	border: 1px solid rgba(249, 249, 249, 0.2);
	border-radius: 16px;
	padding: 24px;
	box-shadow: 0 28px 60px rgba(0, 0, 0, 0.9);
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`

const ConfirmIconWrap = styled.div`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	background: rgba(245, 158, 11, 0.16);
	border: 1px solid rgba(251, 191, 36, 0.45);
	color: #fbbf24;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 600px) {
		width: 38px;
		height: 38px;

		&& svg {
			font-size: 20px;
		}
	}
`

const ConfirmTitle = styled.h4`
	margin: 0;
	font-size: 20px;
	font-weight: 700;
	color: #ffffff;
`

const ConfirmText = styled.p`
	margin: 0;
	font-size: 14px;
	line-height: 1.55;
	color: rgba(249, 249, 249, 0.78);
`

const ConfirmButtons = styled.div`
	margin-top: 8px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
`

const CancelButton = styled.button`
	min-height: 44px;
	padding: 11px 14px;
	border-radius: 10px;
	border: 1px solid rgba(249, 249, 249, 0.25);
	background: transparent;
	color: #f9f9f9;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;

	&:hover {
		background: rgba(255, 255, 255, 0.08);
	}
`

const ConfirmActionButton = styled.button`
	min-height: 44px;
	padding: 11px 14px;
	border-radius: 10px;
	border: none;
	background: #dc2626;
	color: #ffffff;
	font-size: 14px;
	font-weight: 700;
	cursor: pointer;

	&:hover {
		background: #ef4444;
	}
`
