import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './state/index'

export default configureStore({
	reducer: rootReducer
})
