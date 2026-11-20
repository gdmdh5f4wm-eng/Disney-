import styled from 'styled-components'
import { motion } from 'framer-motion'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import CheckroomRoundedIcon from '@mui/icons-material/CheckroomRounded'

import { SURPRISE_DATA } from '@utils/resources/essenziale-data'

const Section05Surprise = () => {
	const { title, dateBadge, messageParagraphs, dressCodeReminderTitle, dressCodeReminderText } =
		SURPRISE_DATA

	return (
		<SectionRoot>
			<MysteryStage
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.75 }}
			>
				<AmbientGlowTop
					animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
					transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
				/>
				<AmbientGlowBottom
					animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.06, 1] }}
					transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
				/>

				<InnerFrame>
					<TopMeta>
						<SecretBadge>
							<LockOutlinedIcon fontSize='small' />
							<span>RISERVATO • {dateBadge}</span>
						</SecretBadge>
						<SparkleAccent
							animate={{ rotate: [0, 8, -8, 0], opacity: [0.75, 1, 0.75] }}
							transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
						>
							<AutoAwesomeRoundedIcon />
						</SparkleAccent>
					</TopMeta>

					<MainTitle>{title}</MainTitle>
					<GoldRule />

					<LetterCard
						initial={{ opacity: 0, scale: 0.98 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.65, delay: 0.15 }}
					>
						{messageParagraphs.map((paragraph, idx) => (
							<MessageParagraph key={idx}>{paragraph}</MessageParagraph>
						))}
					</LetterCard>

					<DressCodeBanner
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.28 }}
					>
						<DressIconWrap>
							<CheckroomRoundedIcon />
						</DressIconWrap>
						<DressTextCol>
							<DressTitle>{dressCodeReminderTitle}</DressTitle>
							<DressText>{dressCodeReminderText}</DressText>
						</DressTextCol>
					</DressCodeBanner>
				</InnerFrame>
			</MysteryStage>
		</SectionRoot>
	)
}

export default Section05Surprise

const SectionRoot = styled.section`
	width: 100%;
`

const MysteryStage = styled(motion.div)`
	position: relative;
	width: 100%;
	min-height: 520px;
	border-radius: 22px;
	overflow: hidden;
	background: radial-gradient(circle at 50% 18%, rgba(26, 38, 86, 0.85) 0%, #050817 62%, #02030a 100%);
	border: 1px solid rgba(229, 193, 88, 0.45);
	box-shadow: 0 32px 70px -20px rgba(0, 0, 0, 0.95), 0 0 50px -24px rgba(229, 193, 88, 0.32);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 42px 24px;

	@media (max-width: 600px) {
		min-height: 460px;
		padding: 28px 16px;
	}
`

const AmbientGlowTop = styled(motion.div)`
	position: absolute;
	top: -120px;
	right: -80px;
	width: 340px;
	height: 340px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(243, 207, 122, 0.22) 0%, rgba(243, 207, 122, 0) 70%);
	pointer-events: none;
`

const AmbientGlowBottom = styled(motion.div)`
	position: absolute;
	bottom: -140px;
	left: -100px;
	width: 360px;
	height: 360px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(94, 184, 255, 0.16) 0%, rgba(94, 184, 255, 0) 70%);
	pointer-events: none;
`

const InnerFrame = styled.div`
	position: relative;
	z-index: 2;
	width: 100%;
	max-width: 720px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 22px;
`

const TopMeta = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;
	flex-wrap: wrap;
`

const SecretBadge = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 7px 16px;
	border-radius: 999px;
	background: rgba(12, 17, 38, 0.85);
	border: 1px solid rgba(243, 207, 122, 0.52);
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.14em;
	color: #f3cf7a;

	@media (max-width: 600px) {
		padding: 6px 12px;
		font-size: 11px;
		letter-spacing: 0.1em;

		&& svg {
			font-size: 16px;
		}
	}
`

const SparkleAccent = styled(motion.div)`
	display: inline-flex;
	color: #f3cf7a;

	@media (max-width: 600px) {
		&& svg {
			font-size: 20px;
		}
	}
`

const MainTitle = styled.h2`
	margin: 0;
	font-size: clamp(28px, 4.4vw, 46px);
	line-height: 1.15;
	font-weight: 800;
	letter-spacing: 0.08em;
	color: #fff8e7;
	text-shadow: 0 4px 28px rgba(243, 207, 122, 0.24);
`

const GoldRule = styled.div`
	width: 110px;
	height: 2px;
	background: linear-gradient(90deg, transparent, #f3cf7a, transparent);
`

const LetterCard = styled(motion.div)`
	width: 100%;
	padding: 30px 28px;
	border-radius: 18px;
	background: rgba(7, 11, 26, 0.78);
	border: 1px solid rgba(243, 207, 122, 0.3);
	backdrop-filter: blur(10px);
	box-shadow: inset 0 0 32px rgba(243, 207, 122, 0.06);
	display: flex;
	flex-direction: column;
	gap: 18px;

	@media (max-width: 600px) {
		padding: 22px 18px;
	}
`

const MessageParagraph = styled.p`
	margin: 0;
	font-size: clamp(17px, 2.2vw, 22px);
	line-height: 1.65;
	font-weight: 400;
	font-style: italic;
	color: #fdf5e2;
`

const DressCodeBanner = styled(motion.div)`
	width: 100%;
	padding: 20px 22px;
	border-radius: 16px;
	background: linear-gradient(135deg, rgba(243, 207, 122, 0.18) 0%, rgba(243, 207, 122, 0.07) 100%);
	border: 1.5px solid rgba(243, 207, 122, 0.7);
	display: flex;
	align-items: center;
	text-align: left;
	gap: 16px;
	box-shadow: 0 12px 30px -14px rgba(243, 207, 122, 0.35);

	@media (max-width: 600px) {
		flex-direction: column;
		text-align: center;
		padding: 18px 16px;
	}
`

const DressIconWrap = styled.div`
	flex: 0 0 auto;
	width: 48px;
	height: 48px;
	border-radius: 12px;
	background: rgba(10, 14, 32, 0.85);
	border: 1px solid rgba(243, 207, 122, 0.55);
	color: #f3cf7a;
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

const DressTextCol = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`

const DressTitle = styled.div`
	font-size: 13px;
	font-weight: 800;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: #f3cf7a;
`

const DressText = styled.div`
	font-size: 15px;
	line-height: 1.5;
	font-weight: 600;
	color: #fff8e7;
`
