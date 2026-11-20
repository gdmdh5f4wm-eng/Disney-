import styled from 'styled-components'
import { motion } from 'framer-motion'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import TheaterComedyOutlinedIcon from '@mui/icons-material/TheaterComedyOutlined'
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'

import CinematicGallery from '@components/essenziale/CinematicGallery'
import { DISNEYLAND_DATA } from '@utils/resources/essenziale-data'

const Section04Disneyland = () => {
	const {
		title,
		dateLabel,
		intro,
		castleSpotlight,
		parks,
		gallery,
		attractionsAndShows,
		highlights,
	} = DISNEYLAND_DATA

	return (
		<SectionRoot>
			<MagicHeader
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.55 }}
			>
				<TopRow>
					<Eyebrow>SEZIONE 04 • DISNEYLAND PARIS</Eyebrow>
					<DatePill>
						<CalendarTodayOutlinedIcon fontSize='small' />
						<span>{dateLabel}</span>
					</DatePill>
				</TopRow>
				<MainTitle>{title}</MainTitle>
				<IntroText>{intro}</IntroText>
			</MagicHeader>

			<CastleSpotlightCard
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.1 }}
			>
				<CastleTextCol>
					<CastleBadge>
						<AutoAwesomeRoundedIcon fontSize='small' />
						<span>IL SIMBOLO DELLA MAGIA</span>
					</CastleBadge>
					<CastleTitle>{castleSpotlight.title}</CastleTitle>
					<CastleSubtitle>{castleSpotlight.subtitle}</CastleSubtitle>
					<CastleDesc>{castleSpotlight.description}</CastleDesc>
				</CastleTextCol>

				<CastleImagesCol>
					<CastlePhotoTile>
						<img src={castleSpotlight.dayImage} alt='Il Castello della Bella Addormentata di giorno' />
						<TileTag>Luce del giorno</TileTag>
					</CastlePhotoTile>
					<CastlePhotoTile>
						<img src={castleSpotlight.nightImage} alt='Il Castello della Bella Addormentata illuminato di notte' />
						<TileTag>Incanto notturno</TileTag>
					</CastlePhotoTile>
				</CastleImagesCol>
			</CastleSpotlightCard>

			<SubBlock>
				<SubHeader>
					<SubTitle>I due parchi della giornata</SubTitle>
					<SubCaption>Un’intera giornata per vivere entrambe le anime di Disneyland Paris.</SubCaption>
				</SubHeader>

				<ParksGrid>
					{parks.map((park, idx) => (
						<ParkCard
							key={park.id}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.12 * idx }}
						>
							<ParkMedia>
								<img src={park.image} alt={park.name} />
								<ParkMediaScrim />
								<ParkNumber>PARCO 0{idx + 1}</ParkNumber>
							</ParkMedia>
							<ParkBody>
								<ParkName>{park.name}</ParkName>
								<ParkDesc>{park.description}</ParkDesc>
							</ParkBody>
						</ParkCard>
					))}
				</ParksGrid>
			</SubBlock>

			<SubBlock>
				<SubHeader>
					<SubTitle>Galleria fotografica del parco</SubTitle>
					<SubCaption>Esplora gli scatti del Castello, dell’ingresso e dei dettagli fiabeschi.</SubCaption>
				</SubHeader>
				<CinematicGallery items={gallery} aspectRatio='16 / 9' />
			</SubBlock>

			<SubBlock>
				<SubHeader>
					<TitleWithIcon>
						<TheaterComedyOutlinedIcon />
						<SubTitle>Attrazioni e spettacoli</SubTitle>
					</TitleWithIcon>
					<SubCaption>
						Le informazioni operative non ancora confermate restano contrassegnate per essere aggiornate in seguito.
					</SubCaption>
				</SubHeader>

				<StatusGrid>
					{attractionsAndShows.map(item => (
						<StatusCard key={item.title}>
							<StatusHeader>
								<StatusTitle>{item.title}</StatusTitle>
								<StatusBadge>
									<UpdateRoundedIcon fontSize='small' />
									<span>{item.status}</span>
								</StatusBadge>
							</StatusHeader>
							<StatusDesc>{item.description}</StatusDesc>
						</StatusCard>
					))}
				</StatusGrid>
			</SubBlock>

			<MomentsPanel>
				<MomentsHeader>
					<FavoriteBorderRoundedIcon />
					<SubTitle>I momenti più belli da vivere</SubTitle>
				</MomentsHeader>

				<MomentsGrid>
					{highlights.map(moment => (
						<MomentCard key={moment.number}>
							<MomentNumber>{moment.number}</MomentNumber>
							<MomentTitle>{moment.title}</MomentTitle>
							<MomentDesc>{moment.description}</MomentDesc>
						</MomentCard>
					))}
				</MomentsGrid>
			</MomentsPanel>
		</SectionRoot>
	)
}

export default Section04Disneyland

const SectionRoot = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 32px;
`

const MagicHeader = styled(motion.div)`
	background: radial-gradient(circle at top right, rgba(124, 196, 255, 0.16), transparent 60%),
		linear-gradient(155deg, rgba(16, 24, 54, 0.94) 0%, rgba(7, 11, 26, 0.98) 100%);
	border: 1px solid rgba(124, 196, 255, 0.28);
	border-radius: 18px;
	padding: 28px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	box-shadow: 0 24px 50px -20px rgba(0, 0, 0, 0.85);

	@media (max-width: 600px) {
		padding: 20px 16px;
	}
`

const TopRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
`

const Eyebrow = styled.span`
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.16em;
	color: #5eb8ff;
`

const DatePill = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 7px;
	padding: 6px 12px;
	border-radius: 999px;
	background: rgba(0, 114, 210, 0.22);
	border: 1px solid rgba(124, 196, 255, 0.45);
	font-size: 13px;
	font-weight: 700;
	color: #d7ecff;

	@media (max-width: 600px) {
		font-size: 12px;

		&& svg {
			font-size: 16px;
		}
	}
`

const MainTitle = styled.h2`
	margin: 0;
	font-size: clamp(26px, 4vw, 42px);
	line-height: 1.15;
	font-weight: 800;
	color: #ffffff;
`

const IntroText = styled.p`
	margin: 0;
	font-size: 15px;
	line-height: 1.65;
	color: rgba(249, 249, 249, 0.86);
	max-width: 72ch;
`

const CastleSpotlightCard = styled(motion.div)`
	background: linear-gradient(150deg, rgba(16, 22, 50, 0.94) 0%, rgba(6, 10, 24, 0.98) 100%);
	border: 1px solid rgba(124, 196, 255, 0.25);
	border-radius: 18px;
	padding: 24px;
	display: grid;
	grid-template-columns: 1fr;
	gap: 24px;
	align-items: center;
	box-shadow: 0 22px 45px -18px rgba(0, 0, 0, 0.85);

	@media (min-width: 900px) {
		grid-template-columns: 1fr 1.1fr;
	}

	@media (max-width: 600px) {
		padding: 20px 16px;
	}
`

const CastleTextCol = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

const CastleBadge = styled.div`
	align-self: flex-start;
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 5px 12px;
	border-radius: 999px;
	background: rgba(124, 196, 255, 0.14);
	border: 1px solid rgba(124, 196, 255, 0.4);
	color: #9dd4ff;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.12em;

	@media (max-width: 600px) {
		&& svg {
			font-size: 16px;
		}
	}
`

const CastleTitle = styled.h3`
	margin: 0;
	font-size: clamp(22px, 2.8vw, 30px);
	font-weight: 800;
	color: #ffffff;
`

const CastleSubtitle = styled.div`
	font-size: 14px;
	font-weight: 600;
	color: #7cc4ff;
`

const CastleDesc = styled.p`
	margin: 4px 0 0;
	font-size: 15px;
	line-height: 1.65;
	color: rgba(249, 249, 249, 0.85);
`

const CastleImagesCol = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 14px;

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`

const CastlePhotoTile = styled.div`
	position: relative;
	height: 250px;
	border-radius: 12px;
	overflow: hidden;
	border: 1px solid rgba(249, 249, 249, 0.16);

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
`

const TileTag = styled.span`
	position: absolute;
	left: 10px;
	bottom: 10px;
	padding: 4px 10px;
	border-radius: 999px;
	background: rgba(4, 7, 20, 0.8);
	border: 1px solid rgba(249, 249, 249, 0.25);
	font-size: 12px;
	font-weight: 600;
	color: #ffffff;
`

const SubBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
`

const SubHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
`

const TitleWithIcon = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	color: #7cc4ff;

	@media (max-width: 600px) {
		gap: 8px;

		&& svg {
			font-size: 18px;
		}
	}
`

const SubTitle = styled.h3`
	margin: 0;
	font-size: clamp(20px, 2.5vw, 26px);
	font-weight: 700;
	color: #ffffff;
`

const SubCaption = styled.p`
	margin: 0;
	font-size: 14px;
	line-height: 1.55;
	color: rgba(249, 249, 249, 0.74);
`

const ParksGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;

	@media (min-width: 760px) {
		grid-template-columns: 1fr 1fr;
	}
`

const ParkCard = styled(motion.div)`
	background: linear-gradient(155deg, rgba(16, 24, 52, 0.92) 0%, rgba(8, 12, 28, 0.98) 100%);
	border: 1px solid rgba(249, 249, 249, 0.14);
	border-radius: 16px;
	overflow: hidden;
	box-shadow: 0 20px 40px -18px rgba(0, 0, 0, 0.82);
`

const ParkMedia = styled.div`
	position: relative;
	height: 220px;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
`

const ParkMediaScrim = styled.div`
	position: absolute;
	inset: 0;
	background: linear-gradient(180deg, rgba(4, 7, 20, 0.1) 20%, rgba(4, 7, 20, 0.85) 100%);
`

const ParkNumber = styled.span`
	position: absolute;
	left: 16px;
	bottom: 12px;
	padding: 4px 10px;
	border-radius: 6px;
	background: rgba(0, 114, 210, 0.35);
	border: 1px solid rgba(124, 196, 255, 0.45);
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.12em;
	color: #ffffff;
`

const ParkBody = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`

const ParkName = styled.h4`
	margin: 0;
	font-size: 20px;
	font-weight: 800;
	color: #ffffff;
`

const ParkDesc = styled.p`
	margin: 0;
	font-size: 14px;
	line-height: 1.6;
	color: rgba(249, 249, 249, 0.82);
`

const StatusGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 16px;

	@media (min-width: 780px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

const StatusCard = styled.div`
	background: rgba(12, 18, 40, 0.85);
	border: 1px solid rgba(94, 184, 255, 0.22);
	border-radius: 14px;
	padding: 18px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`

const StatusHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

const StatusTitle = styled.h4`
	margin: 0;
	font-size: 17px;
	font-weight: 700;
	color: #ffffff;
`

const StatusBadge = styled.span`
	align-self: flex-start;
	display: inline-flex;
	align-items: center;
	gap: 5px;
	padding: 4px 10px;
	border-radius: 999px;
	background: rgba(245, 158, 11, 0.14);
	border: 1px solid rgba(251, 191, 36, 0.4);
	font-size: 12px;
	font-weight: 700;
	color: #fcd34d;

	@media (max-width: 600px) {
		&& svg {
			font-size: 16px;
		}
	}
`

const StatusDesc = styled.p`
	margin: 0;
	font-size: 14px;
	line-height: 1.55;
	color: rgba(249, 249, 249, 0.78);
`

const MomentsPanel = styled.div`
	background: linear-gradient(155deg, rgba(16, 24, 52, 0.9) 0%, rgba(8, 12, 28, 0.96) 100%);
	border: 1px solid rgba(249, 249, 249, 0.14);
	border-radius: 18px;
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 18px;

	@media (max-width: 600px) {
		padding: 20px 16px;
	}
`

const MomentsHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	color: #7cc4ff;

	@media (max-width: 600px) {
		gap: 8px;

		&& svg {
			font-size: 18px;
		}
	}
`

const MomentsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 16px;

	@media (min-width: 780px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

const MomentCard = styled.div`
	background: rgba(4, 7, 20, 0.65);
	border: 1px solid rgba(249, 249, 249, 0.1);
	border-radius: 14px;
	padding: 18px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`

const MomentNumber = styled.span`
	font-size: 13px;
	font-weight: 800;
	letter-spacing: 0.12em;
	color: #5eb8ff;
`

const MomentTitle = styled.h4`
	margin: 0;
	font-size: 17px;
	font-weight: 700;
	color: #ffffff;
`

const MomentDesc = styled.p`
	margin: 0;
	font-size: 14px;
	line-height: 1.55;
	color: rgba(249, 249, 249, 0.78);
`
