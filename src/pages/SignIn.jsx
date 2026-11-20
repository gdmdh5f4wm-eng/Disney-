import { MotionContainer } from '@components/ui/MotionContainer'
import AuthenticationForm from '@components/AuthenticationForm'
import useAuthentication from '@hooks/use-authentication'

const SignInPage = () => {
	const { signIn, error, clearError, isSubmitting } = useAuthentication()

	return (
		<MotionContainer>
			<AuthenticationForm
				onSignin={signIn}
				error={error}
				onClearError={clearError}
				isSubmitting={isSubmitting}
			/>
		</MotionContainer>
	)
}

export default SignInPage
