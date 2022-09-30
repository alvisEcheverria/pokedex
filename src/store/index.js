import { configureStore } from '@reduxjs/toolkit'
import currentUserNameSlice from './slices/currentUserName.slice'

export default configureStore({
  reducer: {
        currentUserName: currentUserNameSlice
	}
})