import { configureStore } from '@reduxjs/toolkit'
import { users } from './Slice/testSlice'
// ...
const store = configureStore({
  reducer: {
    // one: oneSlice.reducer,
    // two: twoSlice.reducer,
    users:users.reducer
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store