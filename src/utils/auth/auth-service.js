const SESSION_STORAGE_KEY = 'mp2027_auth_session'
const ACCESS_PASSWORD_VALUE = '02/02/2009'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isValidEmail = email => EMAIL_REGEX.test(String(email || '').trim())

export const extractPasswordDigits = value => String(value || '').replace(/\D/g, '').slice(0, 8)

export const formatAccessPassword = value => {
	const digits = extractPasswordDigits(value)
	if (digits.length <= 2) {
		return digits
	}
	if (digits.length <= 4) {
		return `${digits.slice(0, 2)}/${digits.slice(2)}`
	}
	return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`
}

export const getStoredSession = () => {
	try {
		const raw = sessionStorage.getItem(SESSION_STORAGE_KEY)
		if (!raw) {
			return null
		}
		const parsed = JSON.parse(raw)
		if (parsed && typeof parsed.email === 'string' && parsed.uid) {
			return parsed
		}
		return null
	} catch {
		return null
	}
}

export const saveSession = user => {
	try {
		sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user))
	} catch {
		// Ignore storage quota errors
	}
}

export const clearSession = () => {
	try {
		sessionStorage.removeItem(SESSION_STORAGE_KEY)
	} catch {
		// Ignore storage errors
	}
}

const buildUserDisplayName = email => {
	const localPart = String(email || '').split('@')[0] || 'Agente'
	return localPart.slice(0, 18)
}

/**
 * Confine di verifica credenziali predisposto per futura migrazione lato server
 * (es. POST /api/auth/login con token HTTP-only).
 * Nota: la verifica lato client funge esclusivamente da blocco funzionale UI.
 */
export const authenticateWithCredentials = async ({ email, password }) => {
	const normalizedEmail = String(email || '').trim().toLowerCase()
	const formattedPassword = formatAccessPassword(password)

	if (!isValidEmail(normalizedEmail)) {
		return {
			ok: false,
			error: 'Inserisci un indirizzo email valido.',
		}
	}

	if (formattedPassword.length < 10) {
		return {
			ok: false,
			error: 'Inserisci la password completa di 8 cifre.',
		}
	}

	if (formattedPassword !== ACCESS_PASSWORD_VALUE) {
		return {
			ok: false,
			error: 'Password errata. Verifica il codice di accesso e riprova.',
		}
	}

	const user = {
		uid: normalizedEmail,
		email: normalizedEmail,
		userName: buildUserDisplayName(normalizedEmail),
	}

	return { ok: true, user }
}
