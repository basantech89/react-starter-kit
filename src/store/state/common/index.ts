import { createSlice } from '@reduxjs/toolkit'

const initialState = { isLoading: false, message: '' }

const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		showLoader: (state, action?) => {
			state.isLoading = true
			state.message = action?.payload?.message || ''
		},
		hideLoader: (state) => {
			state.isLoading = false
			state.message = ''
		}
	}
})

export const { showLoader, hideLoader } = commonSlice.actions
export default commonSlice.reducer
