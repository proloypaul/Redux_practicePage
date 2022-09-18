import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
  value: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialValue,
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
    decrementByTen: (state, action) => {
      state.value -= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByTen } = counterSlice.actions

export default counterSlice.reducer