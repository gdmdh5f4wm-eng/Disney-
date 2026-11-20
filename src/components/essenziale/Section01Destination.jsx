import styled from 'styled-components'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined'
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined'
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined'
import SmokeFreeRoundedIcon from '@mui/icons-material/SmokeFreeRounded'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

import CinematicGallery from '@components/essenziale/CinematicGallery'
import {
	PARIS_HERO,
	PARIS_GALLERY,
	HOUSE_GALLERY,
	ACCOMMODATION_INFO,
} from '@utils/resources/essenziale-data'

const Section01Destination = () => {
	return (
		<SectionRoot>
			<SectionHeading>
				<Eyebrow>SEZIONE 01 • DESTINAZIONE E ALLOGGIO</Eyebrow>
				<MainTitle>PARIGI, LA NOSTRA DESTINAZIONE</MainTitle>
			</SectionHeading>

			<PartBlock>
				<HeroCover>
					<HeroImage src={PARIS_HERO.image} alt={PARIS_HERO.alt} />
					<HeroScrim />
					<HeroContent>
						<HeroBadge>{PARIS_HERO.eyebrow}</HeroBadge>
						<HeroTitle>{PARIS_HERO.title}</HeroTitle>
						<HeroIntro>{PARIS_HERO.intro}</HeroIntro>
						<HeroDescription>{PARIS_HERO.description}</HeroDescription>
					</HeroContent>
				</HeroCover>

				<SubHeader>
					<SubTitle>I luoghi simbolo del nostro itinerario</SubTitle>
					<SubCaption>
						Scorri la galleria con le frecce o con il dito e tocca qualsiasi foto per ammirarla a schermo intero.
					</SubCaption>
				</SubHeader>

				<CinematicGallery items={PARIS_GALLERY} aspectRatio='16 / 9' />
			</PartBlock>

			<Divider />

			<PartBlock>
				<SubHeader>
					<HouseEyebrow>
						<HomeOutlinedIcon fontSize='small' />
						<span>IL NOSTRO ALLOGGIO</span>
					</HouseEyebrow>
					<SubTitle>LA NOSTRA CASA A PARIGI</SubTitle>
					<SubCaption>
						Il nostro punto d’appoggio nel cuore di Montmartre per vivere quattro notti parigine in totale comodità.
					</SubCaption>
				</SubHeader>

				<AccommodationGrid>
					<GalleryColumn>
						<CinematicGallery items={HOUSE_GALLERY} aspectRatio='4 / 5' />
					</GalleryColumn>

					<BookingCard>
						<BookingHeader>
							<BookingBadge>PRENOTAZIONE CONFERMATA</BookingBadge>
							<BookingHeading>Dettagli del soggiorno</BookingHeading>
						</BookingHeader>

						<InfoList>
							<InfoRow>
								<IconBox>
									<LocationOnOutlinedIcon fontSize='small' />
								</IconBox>
								<div>
									<InfoLabel>Indirizzo</InfoLabel>
									<InfoValue>{ACCOMMODATION_INFO.address}</InfoValue>
								</div>
							</InfoRow>

							<InfoRow>
								<IconBox>
									<LoginRoundedIcon fontSize='small' />
								</IconBox>
								<div>
									<InfoLabel>Check-in</InfoLabel>
									<InfoValue>{ACCOMMODATION_INFO.checkIn}</InfoValue>
								</div>
							</InfoRow>

							<InfoRow>
								<IconBox>
									<LogoutRoundedIcon fontSize='small' />
								</IconBox>
								<div>
									<InfoLabel>Check-out</InfoLabel>
									<InfoValue>{ACCOMMODATION_INFO.checkOut}</InfoValue>
								</div>
							</InfoRow>

							<InfoRow>
								<IconBox>
									<NightsStayOutlinedIcon fontSize='small' />
								</IconBox>
								<div>
									<InfoLabel>Durata del soggiorno</InfoLabel>
									<InfoValue>{ACCOMMODATION_INFO.duration}</InfoValue>
								</div>
							</InfoRow>
						</InfoList>

						<RulesBox>
							<RulesTitle>Informazioni importanti della struttura</RulesTitle>
							<RuleItem>
								<RuleIcon>
									<LuggageOutlinedIcon fontSize='small' />
								</RuleIcon>
								<span>{ACCOMMODATION_INFO.notices[0]}</span>
							</RuleItem>
							<RuleItem>
								<RuleIcon>
									<LocalParkingOutlinedIcon fontSize='small' />
								</RuleIcon>
								<span>{ACCOMMODATION_INFO.notices[1]}</span>
							</RuleItem>
							<RuleItem>
								<RuleIcon>
									<SmokeFreeRoundedIcon fontSize='small' />
								</RuleIcon>
								<span>{ACCOMMODATION_INFO.notices[2]}</span>
							</RuleItem>
						</RulesBox>
					</BookingCard>
				</AccommodationGrid>
			</PartBlock>
		</SectionRoot>
	)
}

export default Section01Destination

const SectionRoot = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 32px;
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
	text-transform: uppercase;
`

const MainTitle = styled.h2`
	margin: 0;
	font-size: clamp(24px, 3.6vw, 38px);
	line-height: 1.15;
	font-weight: 800;
	letter-spacing: 0.03em;
	color: #ffffff;
`

const PartBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`

const HeroCover = styled.div`
	position: relative;
	width: 100%;
	min-height: 380px;
	border-radius: 16px;
	overflow: hidden;
	border: 1px solid rgba(249, 249, 249, 0.16);
	box-shadow: 0 28px 50px -20px rgba(0, 0, 0, 0.9);
	display: flex;
	align-items: flex-end;

	@media (min-width: 768px) {
		min-height: 460px;
	}
`

const HeroImage = styled.img`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const HeroScrim = styled.div`
	position: absolute;
	inset: 0;
	background: linear-gradient(
		180deg,
		rgba(4, 7, 20, 0.25) 0%,
		rgba(4, 7, 20, 0.52) 48%,
		rgba(4, 7, 20, 0.95) 100%
	);
`

const HeroContent = styled.div`
	position: relative;
	z-index: 2;
	padding: 28px;
	max-width: 720px;

	@media (max-width: 600px) {
		padding: 22px 18px;
	}
`

const HeroBadge = styled.div`
	display: inline-flex;
	padding: 5px 12px;
	margin-bottom: 12px;
	border-radius: 999px;
	border: 1px solid rgba(124, 196, 255, 0.45);
	background: rgba(6, 15, 38, 0.72);
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.14em;
	color: #9dd4ff;
`

const HeroTitle = styled.h3`
	margin: 0 0 10px;
	font-size: clamp(34px, 5vw, 56px);
	line-height: 1;
	font-weight: 900;
	letter-spacing: 0.1em;
	color: #ffffff;
	text-shadow: 0 6px 24px rgba(0, 0, 0, 0.7);
`

const HeroIntro = styled.p`
	margin: 0 0 10px;
	font-size: 18px;
	line-height: 1.45;
	font-weight: 500;
	color: #d7ecff;

	@media (max-width: 600px) {
		font-size: 16px;
	}
`

const HeroDescription = styled.p`
	margin: 0;
	font-size: 15px;
	line-height: 1.65;
	color: rgba(249, 249, 249, 0.88);

	@media (max-width: 600px) {
		font-size: 14px;
	}
`

const SubHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
`

const HouseEyebrow = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.14em;
	color: #5eb8ff;

	@media (max-width: 600px) {
		&& svg {
			font-size: 16px;
		}
	}
`

const SubTitle = styled.h3`
	margin: 0;
	font-size: clamp(20px, 2.5vw, 28px);
	line-height: 1.25;
	font-weight: 700;
	color: #ffffff;
`

const SubCaption = styled.p`
	margin: 0;
	font-size: 14px;
	line-height: 1.55;
	color: rgba(249, 249, 249, 0.74);
`

const Divider = styled.hr`
	width: 100%;
	border: none;
	height: 1px;
	background: linear-gradient(90deg, rgba(94, 184, 255, 0.35), rgba(255, 255, 255, 0.08), transparent);
	margin: 8px 0;
`

const AccommodationGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 24px;
	align-items: start;

	@media (min-width: 960px) {
		grid-template-columns: 1.05fr 0.95fr;
	}
`

const GalleryColumn = styled.div`
	min-width: 0;
`

const BookingCard = styled.div`
	background: linear-gradient(155deg, rgba(16, 24, 52, 0.94) 0%, rgba(8, 12, 28, 0.98) 100%);
	border: 1px solid rgba(94, 184, 255, 0.25);
	border-radius: 16px;
	padding: 24px;
	box-shadow: 0 22px 45px -16px rgba(0, 0, 0, 0.8);
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media (max-width: 600px) {
		padding: 20px 16px;
	}
`

const BookingHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding-bottom: 14px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const BookingBadge = styled.span`
	align-self: flex-start;
	padding: 4px 10px;
	border-radius: 6px;
	background: rgba(0, 114, 210, 0.24);
	border: 1px solid rgba(94, 184, 255, 0.45);
	color: #8fd0ff;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.12em;
`

const BookingHeading = styled.h4`
	margin: 0;
	font-size: 20px;
	font-weight: 700;
	color: #ffffff;
`

const InfoList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
`

const InfoRow = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 12px;

	& > div {
		min-width: 0;
	}
`

const IconBox = styled.div`
	flex: 0 0 auto;
	width: 36px;
	height: 36px;
	border-radius: 10px;
	background: rgba(0, 114, 210, 0.18);
	border: 1px solid rgba(94, 184, 255, 0.3);
	color: #6bc0ff;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 600px) {
		width: 28px;
		height: 28px;
		border-radius: 8px;

		&& svg {
			font-size: 16px;
		}
	}
`

const InfoLabel = styled.div`
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: rgba(249, 249, 249, 0.62);
`

const InfoValue = styled.div`
	font-size: 15px;
	font-weight: 500;
	line-height: 1.45;
	color: #ffffff;
	overflow-wrap: break-word;
`

const RulesBox = styled.div`
	background: rgba(4, 7, 20, 0.65);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 12px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 12px;
`

const RulesTitle = styled.div`
	font-size: 13px;
	font-weight: 700;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: #d7ecff;
`

const RuleItem = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 10px;
	font-size: 14px;
	line-height: 1.45;
	color: rgba(249, 249, 249, 0.86);
`

const RuleIcon = styled.span`
	flex: 0 0 auto;
	color: #f3b267;
	display: inline-flex;
	margin-top: 2px;

	@media (max-width: 600px) {
		&& svg {
			font-size: 16px;
		}
	}
`
