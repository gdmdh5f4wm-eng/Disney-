import PropTypes from 'prop-types'
import styled from 'styled-components'

import useCredentials from '@hooks/use-credentials'
import AuthenticationInputBox from '@components/ui/AuthenticationInputBox'

const AuthenticationForm = ({ onSignin, error, onClearError, isSubmitting }) => {
	const {
		email,
		emailError,
		password,
		showPassword,
		passwordInputRef,
		canSubmit,
		emailChangeHandler,
		emailBlurHandler,
		passwordChangeHandler,
		passwordKeyDownHandler,
		toggleShowPasswordHandler,
		submitHandler,
	} = useCredentials({ onSignin, onClearError })

	return (
		<StyledContainer>
			<AmbientGlow aria-hidden='true' />
			<AuthenticationBox>
				<LogoWrapper>
					<DisneyArc viewBox='0 0 220 34' aria-hidden='true'>
						<path
							d='M12 28 C 68 2, 152 2, 208 26'
							fill='none'
							stroke='url(#parigiArc)'
							strokeWidth='2.5'
							strokeLinecap='round'
						/>
						<defs>
							<linearGradient id='parigiArc' x1='0%' y1='0%' x2='100%' y2='0%'>
								<stop offset='0%' stopColor='#0063e5' stopOpacity='0.1' />
								<stop offset='50%' stopColor='#3b9eff' stopOpacity='1' />
								<stop offset='100%' stopColor='#00d4ff' stopOpacity='0.15' />
							</linearGradient>
						</defs>
					</DisneyArc>
					<MissionTitle>INSERISCI LE CREDENZIALI PER ACCEDERE</MissionTitle>
					<MissionSubtitle>Accesso Riservato</MissionSubtitle>
				</LogoWrapper>

				<StyledForm onSubmit={submitHandler} noValidate>
					<FormHeader>Accedi alla piattaforma</FormHeader>
					<AuthenticationInputBox
						email={email}
						emailError={emailError}
						emailChangeHandler={emailChangeHandler}
						emailBlurHandler={emailBlurHandler}
						password={password}
						showPassword={showPassword}
						passwordInputRef={passwordInputRef}
						passwordChangeHandler={passwordChangeHandler}
						passwordKeyDownHandler={passwordKeyDownHandler}
						toggleShowPasswordHandler={toggleShowPasswordHandler}
						error={error}
					/>
					<SubmitButton type='submit' disabled={!canSubmit || isSubmitting}>
						{isSubmitting ? 'ACCESSO IN CORSO...' : 'ACCEDI'}
					</SubmitButton>
				</StyledForm>
			</AuthenticationBox>
		</StyledContainer>
	)
}

AuthenticationForm.propTypes = {
	onSignin: PropTypes.func,
	error: PropTypes.string,
	onClearError: PropTypes.func,
	isSubmitting: PropTypes.bool,
}

export default AuthenticationForm

const StyledContainer = styled.div`
	position: relative;
	min-height: 100vh;
	min-height: 100dvh;
	width: 100%;
	padding: 24px 16px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: radial-gradient(circle at 50% 20%, rgba(16, 42, 108, 0.72) 0%, rgba(4, 7, 20, 0.96) 65%, #030408 100%);
	overflow: hidden;
`

const AmbientGlow = styled.div`
	position: absolute;
	top: -120px;
	width: min(540px, 90vw);
	height: 280px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(0, 99, 229, 0.28) 0%, rgba(0, 99, 229, 0) 70%);
	pointer-events: none;
`

const AuthenticationBox = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	max-width: 420px;
	padding: 28px 20px;
	color: #f9f9f9;
	background: linear-gradient(160deg, rgba(16, 24, 52, 0.92) 0%, rgba(9, 13, 30, 0.96) 100%);
	border: 1px solid rgba(255, 255, 255, 0.14);
	border-radius: 18px;
	box-shadow: 0px 28px 60px -15px rgba(0, 0, 0, 0.85);
	backdrop-filter: blur(12px);

	@media (max-width: 360px) {
		padding: 24px 16px;
	}

	@media (min-width: 600px) {
		padding: 40px 36px;
	}
`

const LogoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-bottom: 12px;
`

const DisneyArc = styled.svg`
	width: 180px;
	height: 28px;
	margin-bottom: 4px;

	@media (max-width: 360px) {
		width: 150px;
		height: 24px;
	}
`

const MissionTitle = styled.h1`
	margin: 0;
	font-size: 20px;
	font-weight: 700;
	letter-spacing: 2.5px;
	color: #ffffff;
	text-shadow: 0 2px 14px rgba(0, 120, 255, 0.45);

	@media (max-width: 360px) {
		font-size: 17px;
		letter-spacing: 1.8px;
	}

	@media (min-width: 414px) {
		font-size: 22px;
	}
`

const MissionSubtitle = styled.span`
	margin-top: 6px;
	font-size: 11px;
	letter-spacing: 3px;
	text-transform: uppercase;
	color: #8fb8ff;
`

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`

const FormHeader = styled.h2`
	margin: 20px 0 18px;
	font-size: 18px;
	font-weight: 500;
	color: #f9f9f9;
	text-align: center;

	@media (min-width: 1000px) {
		font-size: 20px;
	}
`

const SubmitButton = styled.button`
	width: 100%;
	min-height: 46px;
	padding: 12px 20px;
	font-size: 15px;
	font-weight: 700;
	letter-spacing: 1.5px;
	color: #ffffff;
	background: linear-gradient(135deg, #0063e5 0%, #0483ee 100%);
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: transform 0.2s ease, background-color 0.3s ease, opacity 0.25s ease, box-shadow 0.25s ease;

	&:hover:not(:disabled) {
		background: linear-gradient(135deg, #0473ff 0%, #1a94ff 100%);
		box-shadow: 0 8px 24px rgba(0, 99, 229, 0.4);
	}

	&:active:not(:disabled) {
		transform: scale(0.99);
	}

	&:disabled {
		opacity: 0.42;
		cursor: not-allowed;
		box-shadow: none;
	}
`
