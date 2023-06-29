import { configureStore } from '@reduxjs/toolkit'
import heartSlice from './heart'
import cart from './cart'
import productreload from './productreload'
export const store = configureStore({
  reducer: {
    heart: heartSlice,
    cart,
    productreload
  }
})