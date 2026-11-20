import PropTypes from 'prop-types'
import styled from 'styled-components'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'

const AuthenticationInputBox = ({
	email,
	emailError,
	emailChangeHandler,
	emailBlurHandler,
	password,
	showPassword,
	passwordInputRef,
	passwordChangeHandler,
	passwordKeyDownHandler,
	toggleShowPasswordHandler,
	error,
}) => {
	return (
		<InputBox>
			<FieldGroup>
				<FieldLabel htmlFor='auth-email'>Email</FieldLabel>
				<InputField
					id='auth-email'
					type='email'
					name='email'
					autoComplete='email'
					placeholder='nome@esempio.it'
					value={email}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					required
				/>
				{emailError && <ErrorText role='alert'>{emailError}</ErrorText>}
			</FieldGroup>

			<FieldGroup>
				<FieldLabel htmlFor='auth-password'>Password di accesso</FieldLabel>
				<PasswordWrapper>
					<PasswordInputField
						ref={passwordInputRef}
						id='auth-password'
						type={showPassword ? 'text' : 'password'}
						name='password'
						inputMode='numeric'
						autoComplete='off'
						maxLength={10}
						placeholder='GG/MM/AAAA'
						value={password}
						onChange={passwordChangeHandler}
						onKeyDown={passwordKeyDownHandler}
						required
					/>
					<TogglePasswordButton
						type='button'
						onClick={toggleShowPasswordHandler}
						aria-label={showPassword ? 'Nascondi password' : 'Mostra password'}
						title={showPassword ? 'Nascondi password' : 'Mostra password'}>
						{showPassword ? <VisibilityOffRoundedIcon fontSize='small' /> : <VisibilityRoundedIcon fontSize='small' />}
					</TogglePasswordButton>
				</PasswordWrapper>
				{error && <ErrorText role='alert'>{error}</ErrorText>}
			</FieldGroup>
		</InputBox>
	)
}

AuthenticationInputBox.propTypes = {
	email: PropTypes.string,
	emailError: PropTypes.string,
	emailChangeHandler: PropTypes.func,
	emailBlurHandler: PropTypes.func,
	password: PropTypes.string,
	showPassword: PropTypes.bool,
	passwordInputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
	passwordChangeHandler: PropTypes.func,
	passwordKeyDownHandler: PropTypes.func,
	toggleShowPasswordHandler: PropTypes.func,
	error: PropTypes.string,
}

export default AuthenticationInputBox

const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
	margin-bottom: 24px;
`

const FieldGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
`

const FieldLabel = styled.label`
	font-size: 13px;
	font-weight: 500;
	color: rgba(249, 249, 249, 0.85);
`

const InputField = styled.input`
	width: 100%;
	min-height: 46px;
	padding: 12px 14px;
	font-size: 16px;
	color: #ffffff;
	background-color: rgba(49, 52, 62, 0.85);
	border: 1px solid rgba(255, 255, 255, 0.18);
	border-radius: 8px;
	outline: none;
	transition: border-color 0.2s ease, background-color 0.2s ease;

	&::placeholder {
		color: rgba(255, 255, 255, 0.42);
	}

	&:focus {
		border-color: #3b9eff;
		background-color: rgba(58, 62, 75, 0.95);
	}
`

const PasswordWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`

const PasswordInputField = styled(InputField)`
	padding-right: 46px;
	letter-spacing: 1px;
`

const TogglePasswordButton = styled.button`
	position: absolute;
	right: 2px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 44px;
	height: 44px;
	padding: 0;
	color: rgba(255, 255, 255, 0.72);
	background: transparent;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	transition: color 0.2s ease, background-color 0.2s ease;

	&& svg {
		font-size: 17px;
	}

	@media (min-width: 700px) {
		&& svg {
			font-size: 18px;
		}
	}

	&:hover {
		color: #ffffff;
		background-color: rgba(255, 255, 255, 0.08);
	}
`

const ErrorText = styled.p`
	padding: 0;
	margin: 4px 0 0;
	font-size: 13px;
	line-height: 1.4;
	color: #ff7b89;
`
