import { useState, useRef } from 'react'
import {
	isValidEmail,
	extractPasswordDigits,
	formatAccessPassword,
} from '@utils/auth/auth-service'

const useCredentials = ({ onSignin, onClearError }) => {
	const [email, setEmail] = useState('')
	const [emailTouched, setEmailTouched] = useState(false)
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const passwordInputRef = useRef(null)

	const emailIsValid = isValidEmail(email)
	const passwordDigits = extractPasswordDigits(password)
	const passwordIsComplete = passwordDigits.length === 8
	const canSubmit = emailIsValid && passwordIsComplete

	const emailError =
		emailTouched && email.trim().length > 0 && !emailIsValid
			? 'Inserisci un indirizzo email valido.'
			: ''

	const emailChangeHandler = e => {
		setEmail(e.target.value)
		onClearError?.()
	}

	const emailBlurHandler = () => {
		setEmailTouched(true)
	}

	const applyPasswordWithCaret = (rawValue, digitsBeforeCaret) => {
		const formatted = formatAccessPassword(rawValue)
		setPassword(formatted)
		onClearError?.()

		requestAnimationFrame(() => {
			const input = passwordInputRef.current
			if (!input) {
				return
			}
			let caretPos = 0
			let seenDigits = 0
			while (caretPos < formatted.length && seenDigits < digitsBeforeCaret) {
				if (/\d/.test(formatted[caretPos])) {
					seenDigits += 1
				}
				caretPos += 1
			}
			// If caret stopped right before a slash and digits were just typed, place after slash
			if (digitsBeforeCaret > 0 && formatted[caretPos] === '/') {
				caretPos += 1
			}
			input.setSelectionRange(caretPos, caretPos)
		})
	}

	const passwordChangeHandler = e => {
		const inputValue = e.target.value
		const selectionStart = e.target.selectionStart ?? inputValue.length
		const digitsBeforeCaret = extractPasswordDigits(inputValue.slice(0, selectionStart)).length
		applyPasswordWithCaret(inputValue, digitsBeforeCaret)
	}

	const passwordKeyDownHandler = e => {
		if (e.key !== 'Backspace') {
			return
		}
		const input = e.target
		const start = input.selectionStart ?? 0
		const end = input.selectionEnd ?? 0

		// If user presses Backspace right after an auto-inserted slash, remove the digit before that slash
		if (start === end && start > 0 && password[start - 1] === '/') {
			e.preventDefault()
			const digitsBeforeSlash = extractPasswordDigits(password.slice(0, start - 1))
			const digitsAfterSlash = extractPasswordDigits(password.slice(start))
			const nextDigits = digitsBeforeSlash.slice(0, -1) + digitsAfterSlash
			const targetDigitsBeforeCaret = Math.max(0, digitsBeforeSlash.length - 1)
			applyPasswordWithCaret(nextDigits, targetDigitsBeforeCaret)
		}
	}

	const toggleShowPasswordHandler = () => {
		setShowPassword(prev => !prev)
	}

	const submitHandler = e => {
		e.preventDefault()
		setEmailTouched(true)
		if (!canSubmit) {
			return
		}
		onSignin({ email: email.trim(), password })
	}

	return {
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
	}
}

export default useCredentials
