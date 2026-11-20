import styled from 'styled-components'
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded'
import FlightLandRoundedIcon from '@mui/icons-material/FlightLandRounded'
import ConnectingAirportsRoundedIcon from '@mui/icons-material/ConnectingAirportsRounded'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded'

import { FLIGHTS_DATA } from '@utils/resources/essenziale-data'

const TrolleyIllustration = () => (
	<svg width='68' height='84' viewBox='0 0 68 84' fill='none' aria-hidden='true'>
		<rect x='25' y='4' width='18' height='14' rx='3' stroke='#7CC4FF' strokeWidth='2.5' />
		<line x1='29' y1='10' x2='29' y2='18' stroke='#7CC4FF' strokeWidth='2.2' />
		<line x1='39' y1='10' x2='39' y2='18' stroke='#7CC4FF' strokeWidth='2.2' />
		<rect
			x='13'
			y='18'
			width='42'
			height='54'
			rx='8'
			fill='rgba(0, 114, 210, 0.16)'
			stroke='#7CC4FF'
			strokeWidth='2.5'
		/>
		<line x1='24' y1='26' x2='24' y2='64' stroke='rgba(124, 196, 255, 0.45)' strokeWidth='2' strokeLinecap='round' />
		<line x1='34' y1='26' x2='34' y2='64' stroke='rgba(124, 196, 255, 0.45)' strokeWidth='2' strokeLinecap='round' />
		<line x1='44' y1='26' x2='44' y2='64' stroke='rgba(124, 196, 255, 0.45)' strokeWidth='2' strokeLinecap='round' />
		<circle cx='21' cy='76' r='4' fill='#09132B' stroke='#7CC4FF' strokeWidth='2.2' />
		<circle cx='47' cy='76' r='4' fill='#09132B' stroke='#7CC4FF' strokeWidth='2.2' />
	</svg>
)

const BackpackIllustration = () => (
	<svg width='68' height='84' viewBox='0 0 68 84' fill='none' aria-hidden='true'>
		<path d='M24 17C24 10.5 28.5 7 34 7C39.5 7 44 10.5 44 17' stroke='#7CC4FF' strokeWidth='2.5' strokeLinecap='round' />
		<rect
			x='15'
			y='17'
			width='38'
			height='56'
			rx='14'
			fill='rgba(0, 114, 210, 0.16)'
			stroke='#7CC4FF'
			strokeWidth='2.5'
		/>
		<rect x='21' y='41' width='26' height='22' rx='6' fill='rgba(124, 196, 255, 0.12)' stroke='#7CC4FF' strokeWidth='2' />
		<line x1='25' y1='31' x2='43' y2='31' stroke='#7CC4FF' strokeWidth='2.2' strokeLinecap='round' />
		<circle cx='34' cy='50' r='2.5' fill='#7CC4FF' />
	</svg>
)

const Section02Flights = () => {
	const { airline, heroImage, passengersLabel, outbound, inbound, baggage } = FLIGHTS_DATA

	return (
		<SectionRoot>
			<SectionHeading>
				<Eyebrow>SEZIONE 02 • I NOSTRI VOLI</Eyebrow>
				<MainTitle>IL NOSTRO VIAGGIO INIZIA DA QUI</MainTitle>
			</SectionHeading>

			<FlightHeroBanner>
				<FlightHeroImg src={heroImage} alt='Aereo di linea ITA Airways' />
				<FlightHeroOverlay />
				<FlightHeroContent>
					<AirlineBadge>
						<FlightTakeoffRoundedIcon fontSize='small' />
						<span>COMPAGNIA AEREA: {airline.toUpperCase()}</span>
					</AirlineBadge>
					<PassengersPill>
						<PeopleAltOutlinedIcon fontSize='small' />
						<span>{passengersLabel}</span>
					</PassengersPill>
				</FlightHeroContent>
			</FlightHeroBanner>

			<BoardingPassCard>
				<PassHeader>
					<PassDate>{outbound.dateLabel}</PassDate>
					<PassAirline>{airline}</PassAirline>
				</PassHeader>

				<OutboundGrid>
					<LegBox>
						<LegTop>
							<FlightNumber>{outbound.firstLeg.flightNumber}</FlightNumber>
							<LegTime>{outbound.firstLeg.timeRange}</LegTime>
						</LegTop>
						<RouteRow>
							<AirportBlock>
								<AirportCode>{outbound.firstLeg.fromCode}</AirportCode>
								<AirportName>{outbound.firstLeg.fromCity}</AirportName>
								<TimeTag>{outbound.firstLeg.departureTime}</TimeTag>
							</AirportBlock>

							<RouteTrack aria-hidden='true'>
								<TrackDot />
								<TrackLine />
								<FlightTakeoffRoundedIcon fontSize='small' />
								<TrackLine />
								<TrackDot />
							</RouteTrack>

							<AirportBlock $align='right'>
								<AirportCode>{outbound.firstLeg.toCode}</AirportCode>
								<AirportName>{outbound.firstLeg.toCity}</AirportName>
								<TimeTag>{outbound.firstLeg.arrivalTime}</TimeTag>
							</AirportBlock>
						</RouteRow>
					</LegBox>

					<LayoverConnector>
						<LayoverIconWrap>
							<ConnectingAirportsRoundedIcon />
						</LayoverIconWrap>
						<LayoverText>
							<strong>{outbound.layover.label}</strong>
							<span>{outbound.layover.airport}</span>
							<LayoverTime>{outbound.layover.waitTime}</LayoverTime>
						</LayoverText>
					</LayoverConnector>

					<LegBox>
						<LegTop>
							<FlightNumber>{outbound.secondLeg.flightNumber}</FlightNumber>
							<LegTime>{outbound.secondLeg.timeRange}</LegTime>
						</LegTop>
						<RouteRow>
							<AirportBlock>
								<AirportCode>{outbound.secondLeg.fromCode}</AirportCode>
								<AirportName>{outbound.secondLeg.fromCity}</AirportName>
								<TimeTag>{outbound.secondLeg.departureTime}</TimeTag>
							</AirportBlock>

							<RouteTrack aria-hidden='true'>
								<TrackDot />
								<TrackLine />
								<FlightTakeoffRoundedIcon fontSize='small' />
								<TrackLine />
								<TrackDot />
							</RouteTrack>

							<AirportBlock $align='right'>
								<AirportCode>{outbound.secondLeg.toCode}</AirportCode>
								<AirportName>{outbound.secondLeg.toCity}</AirportName>
								<TimeTag>{outbound.secondLeg.arrivalTime}</TimeTag>
							</AirportBlock>
						</RouteRow>
					</LegBox>
				</OutboundGrid>
			</BoardingPassCard>

			<BoardingPassCard>
				<PassHeader>
					<PassDate>{inbound.dateLabel}</PassDate>
					<PassAirline>{airline}</PassAirline>
				</PassHeader>

				<InboundGrid>
					<LegBox>
						<LegTop>
							<FlightNumber>{inbound.firstLeg.flightNumber}</FlightNumber>
							<LegStatus>Prima tratta</LegStatus>
						</LegTop>
						<RouteRow>
							<AirportBlock>
								<AirportCode>{inbound.firstLeg.fromCode}</AirportCode>
								<AirportName>{inbound.firstLeg.fromCity}</AirportName>
							</AirportBlock>

							<RouteTrack aria-hidden='true'>
								<TrackDot />
								<TrackLine />
								<FlightLandRoundedIcon fontSize='small' />
								<TrackLine />
								<TrackDot />
							</RouteTrack>

							<AirportBlock $align='right'>
								<AirportCode>{inbound.firstLeg.toCode}</AirportCode>
								<AirportName>{inbound.firstLeg.toCity}</AirportName>
							</AirportBlock>
						</RouteRow>
					</LegBox>

					<ConnectionBox>
						<ConnectionBadge>
							<ConnectingAirportsRoundedIcon fontSize='small' />
							<span>{inbound.connection.label}</span>
						</ConnectionBadge>
						<ConnectionRoute>{inbound.connection.route}</ConnectionRoute>
						<ArrivalHighlight>
							<ScheduleRoundedIcon fontSize='small' />
							<span>{inbound.connection.expectedArrival}</span>
						</ArrivalHighlight>
					</ConnectionBox>
				</InboundGrid>
			</BoardingPassCard>

			<BaggageSection>
				<BaggageHeader>
					<div>
						<BaggageEyebrow>IN DOTAZIONE PER IL VIAGGIO</BaggageEyebrow>
						<BaggageTitle>I NOSTRI BAGAGLI</BaggageTitle>
					</div>
					<PassengersBadge>
						<PeopleAltOutlinedIcon fontSize='small' />
						<span>Viaggiamo in 2 persone (1 trolley + 1 zaino a testa)</span>
					</PassengersBadge>
				</BaggageHeader>

				<BaggageGrid>
					{baggage.map(item => (
						<BaggageCard key={item.id}>
							<IllustrationWrap>
								{item.id === 'trolley' ? <TrolleyIllustration /> : <BackpackIllustration />}
							</IllustrationWrap>
							<BaggageDetails>
								<BaggageName>{item.name}</BaggageName>
								<BaggageDim>Dimensioni: {item.dimensions}</BaggageDim>
								<BaggageNote>{item.perPersonNote}</BaggageNote>
							</BaggageDetails>
						</BaggageCard>
					))}
				</BaggageGrid>
			</BaggageSection>
		</SectionRoot>
	)
}

export default Section02Flights

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

const FlightHeroBanner = styled.div`
	position: relative;
	width: 100%;
	min-height: 220px;
	border-radius: 16px;
	overflow: hidden;
	border: 1px solid rgba(94, 184, 255, 0.28);
	box-shadow: 0 22px 44px -18px rgba(0, 0, 0, 0.85);
	display: flex;
	align-items: flex-end;
`

const FlightHeroImg = styled.img`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const FlightHeroOverlay = styled.div`
	position: absolute;
	inset: 0;
	background: linear-gradient(180deg, rgba(4, 7, 20, 0.25) 0%, rgba(4, 7, 20, 0.88) 100%);
`

const FlightHeroContent = styled.div`
	position: relative;
	z-index: 2;
	width: 100%;
	padding: 22px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
`

const AirlineBadge = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 8px 14px;
	border-radius: 10px;
	background: rgba(6, 15, 38, 0.82);
	border: 1px solid rgba(124, 196, 255, 0.45);
	font-size: 13px;
	font-weight: 700;
	letter-spacing: 0.1em;
	color: #ffffff;

	@media (max-width: 600px) {
		padding: 7px 10px;
		font-size: 12px;
		letter-spacing: 0.06em;

		&& svg {
			font-size: 16px;
		}
	}
`

const PassengersPill = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 8px 14px;
	border-radius: 10px;
	background: rgba(0, 114, 210, 0.25);
	border: 1px solid rgba(124, 196, 255, 0.4);
	font-size: 13px;
	font-weight: 600;
	color: #d7ecff;

	@media (max-width: 600px) {
		padding: 7px 10px;
		font-size: 12px;

		&& svg {
			font-size: 16px;
		}
	}
`

const BoardingPassCard = styled.div`
	background: linear-gradient(155deg, rgba(16, 24, 52, 0.94) 0%, rgba(7, 11, 26, 0.98) 100%);
	border: 1px solid rgba(94, 184, 255, 0.26);
	border-radius: 16px;
	overflow: hidden;
	box-shadow: 0 20px 40px -16px rgba(0, 0, 0, 0.8);
`

const PassHeader = styled.div`
	padding: 16px 22px;
	background: rgba(0, 114, 210, 0.16);
	border-bottom: 1px dashed rgba(124, 196, 255, 0.3);
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 10px;

	@media (max-width: 600px) {
		padding: 14px 16px;
	}
`

const PassDate = styled.div`
	font-size: 13px;
	font-weight: 800;
	letter-spacing: 0.12em;
	color: #ffffff;
`

const PassAirline = styled.span`
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: #7cc4ff;
`

const OutboundGrid = styled.div`
	padding: 22px;
	display: grid;
	grid-template-columns: 1fr;
	gap: 18px;
	align-items: center;

	@media (min-width: 980px) {
		grid-template-columns: 1fr auto 1fr;
		gap: 16px;
	}

	@media (max-width: 600px) {
		padding: 16px;
	}
`

const InboundGrid = styled.div`
	padding: 22px;
	display: grid;
	grid-template-columns: 1fr;
	gap: 18px;
	align-items: stretch;

	@media (min-width: 860px) {
		grid-template-columns: 1.1fr 0.9fr;
	}

	@media (max-width: 600px) {
		padding: 16px;
	}
`

const LegBox = styled.div`
	background: rgba(4, 7, 20, 0.65);
	border: 1px solid rgba(249, 249, 249, 0.12);
	border-radius: 14px;
	padding: 18px;
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (max-width: 420px) {
		padding: 14px;
	}
`

const LegTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
`

const FlightNumber = styled.span`
	padding: 4px 10px;
	border-radius: 6px;
	background: rgba(0, 114, 210, 0.25);
	border: 1px solid rgba(94, 184, 255, 0.45);
	font-size: 13px;
	font-weight: 800;
	letter-spacing: 0.08em;
	color: #8fd0ff;
`

const LegTime = styled.span`
	font-size: 14px;
	font-weight: 700;
	color: #ffffff;
`

const LegStatus = styled.span`
	font-size: 12px;
	font-weight: 600;
	color: rgba(249, 249, 249, 0.72);
`

const RouteRow = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
	align-items: center;
	gap: 12px;

	@media (max-width: 420px) {
		gap: 8px;
	}
`

const AirportBlock = styled.div`
	text-align: ${props => (props.$align === 'right' ? 'right' : 'left')};
	min-width: 0;
`

const AirportCode = styled.div`
	font-size: 26px;
	line-height: 1.1;
	font-weight: 900;
	letter-spacing: 0.06em;
	color: #ffffff;

	@media (max-width: 480px) {
		font-size: 22px;
	}

	@media (max-width: 360px) {
		font-size: 19px;
	}
`

const AirportName = styled.div`
	font-size: 12px;
	line-height: 1.35;
	color: rgba(249, 249, 249, 0.74);
	margin-top: 2px;
`

const TimeTag = styled.div`
	margin-top: 6px;
	font-size: 14px;
	font-weight: 700;
	color: #7cc4ff;
`

const RouteTrack = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	color: #5eb8ff;

	@media (max-width: 600px) {
		gap: 4px;

		&& svg {
			font-size: 16px;
		}
	}
`

const TrackDot = styled.span`
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: #5eb8ff;
`

const TrackLine = styled.span`
	width: 18px;
	height: 1px;
	border-top: 1px dashed rgba(124, 196, 255, 0.65);

	@media (max-width: 480px) {
		width: 10px;
	}

	@media (max-width: 360px) {
		width: 6px;
	}
`

const LayoverConnector = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;
	padding: 14px 16px;
	border-radius: 12px;
	background: rgba(0, 114, 210, 0.12);
	border: 1px dashed rgba(124, 196, 255, 0.45);
`

const LayoverIconWrap = styled.div`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background: rgba(0, 114, 210, 0.25);
	color: #8fd0ff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 auto;

	@media (max-width: 600px) {
		width: 28px;
		height: 28px;

		&& svg {
			font-size: 16px;
		}
	}
`

const LayoverText = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 12px;
	line-height: 1.4;
	color: rgba(249, 249, 249, 0.85);

	strong {
		font-size: 13px;
		color: #ffffff;
	}
`

const LayoverTime = styled.span`
	color: #7cc4ff;
	font-weight: 700;
`

const ConnectionBox = styled.div`
	background: rgba(4, 7, 20, 0.65);
	border: 1px solid rgba(249, 249, 249, 0.12);
	border-radius: 14px;
	padding: 18px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
`

const ConnectionBadge = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: #7cc4ff;

	@media (max-width: 600px) {
		&& svg {
			font-size: 16px;
		}
	}
`

const ConnectionRoute = styled.div`
	font-size: 17px;
	font-weight: 700;
	color: #ffffff;
`

const ArrivalHighlight = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 10px 12px;
	border-radius: 10px;
	background: rgba(0, 114, 210, 0.18);
	border: 1px solid rgba(94, 184, 255, 0.35);
	font-size: 14px;
	font-weight: 700;
	color: #d7ecff;

	@media (max-width: 600px) {
		font-size: 13px;

		&& svg {
			font-size: 16px;
		}
	}
`

const BaggageSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
`

const BaggageHeader = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
`

const BaggageEyebrow = styled.div`
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.14em;
	color: #5eb8ff;
`

const BaggageTitle = styled.h3`
	margin: 4px 0 0;
	font-size: 22px;
	font-weight: 800;
	color: #ffffff;
`

const PassengersBadge = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 8px 14px;
	border-radius: 10px;
	background: rgba(16, 24, 52, 0.9);
	border: 1px solid rgba(94, 184, 255, 0.3);
	font-size: 13px;
	font-weight: 600;
	color: #d7ecff;

	@media (max-width: 600px) {
		padding: 7px 11px;
		font-size: 12px;

		&& svg {
			font-size: 16px;
		}
	}
`

const BaggageGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 18px;

	@media (min-width: 680px) {
		grid-template-columns: 1fr 1fr;
	}
`

const BaggageCard = styled.div`
	background: linear-gradient(155deg, rgba(16, 24, 52, 0.94) 0%, rgba(8, 12, 28, 0.98) 100%);
	border: 1px solid rgba(94, 184, 255, 0.26);
	border-radius: 16px;
	padding: 22px;
	display: flex;
	align-items: center;
	gap: 20px;
	box-shadow: 0 18px 36px -16px rgba(0, 0, 0, 0.8);

	@media (max-width: 440px) {
		padding: 16px 14px;
		gap: 12px;
	}
`

const IllustrationWrap = styled.div`
	flex: 0 0 auto;
	width: 82px;
	height: 96px;
	border-radius: 12px;
	background: rgba(4, 7, 20, 0.72);
	border: 1px solid rgba(124, 196, 255, 0.22);
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 600px) {
		width: 62px;
		height: 74px;

		svg {
			width: 44px;
			height: 56px;
		}
	}

	@media (max-width: 360px) {
		width: 54px;
		height: 64px;

		svg {
			width: 38px;
			height: 48px;
		}
	}
`

const BaggageDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`

const BaggageName = styled.h4`
	margin: 0;
	font-size: 19px;
	font-weight: 800;
	letter-spacing: 0.08em;
	color: #ffffff;
`

const BaggageDim = styled.div`
	font-size: 15px;
	font-weight: 600;
	color: #7cc4ff;
`

const BaggageNote = styled.div`
	font-size: 13px;
	color: rgba(249, 249, 249, 0.74);
`
