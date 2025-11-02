import { createSlice } from '@reduxjs/toolkit'

const initialToken = localStorage.getItem('token')

const authSlice = createSlice({
  name: ' auth',
  initialState: {
    token: initialToken,
    isAuthenticated: !!initialToken,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
      localStorage.setItem('token', action.payload)
    },
    logout: (state) => {
      state.token = null
      state.isAuthenticate = false
      localStorage.removeItem('token')
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
