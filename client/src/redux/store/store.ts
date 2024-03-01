import { configureStore } from "@reduxjs/toolkit"
import menuReducer from '../slices/menuSlice'
import langReducer from '../slices/langSlice'
import messageReducer from '../slices/messageSlice'
import workerAuthReducer from '../slices/workerAuthSlice'

export const store = configureStore ({
  reducer: {
    menu: menuReducer,
    lang: langReducer,
    message: messageReducer,
    workerAuth: workerAuthReducer
  }
})