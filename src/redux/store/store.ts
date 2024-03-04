import { configureStore } from "@reduxjs/toolkit"
import menuReducer from '../slices/menuSlice'
import langReducer from '../slices/langSlice'
import messageReducer from '../slices/messageSlice'
import userReducer from '../slices/userAuthSlice'

export const store = configureStore ({
  reducer: {
    menu: menuReducer,
    lang: langReducer,
    message: messageReducer,
    userReducer: userReducer
  }
})