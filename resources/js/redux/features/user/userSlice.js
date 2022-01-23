import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profile: {
      firstName: '',
      lastName: '',
      telephone: '',
      age: 28,
      email: '',
      state: '',
      country: '',
      address: 'Home',
      address1: '',
      address2: '',
      interests: [],
      profileImage: '',
      subscribenewsletter: false
    },
    formSubmitted: false
  }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer
