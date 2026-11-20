import { createSlice } from '@reduxjs/toolkit'
import { getStoredSession, saveSession, clearSession } from '@utils/auth/auth-service'

const initialUserState = {
	user: getStoredSession(),
}

const userSlice = createSlice({
	name: 'user',
	initialState: initialUserState,
	reducers: {
		signInUser(state, action) {
			state.user = action.payload
			saveSession(action.payload)
		},
		signOutUser(state) {
			state.user = null
			clearSession()
		},
	},
})

export const userActions = userSlice.actions
export default userSlice
