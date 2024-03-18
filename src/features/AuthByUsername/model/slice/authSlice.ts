import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthSchema } from '../types/authShema';
import { authUser } from '../services/authUser.async';

const initialState: AuthSchema = {
  username: '',
  password: '',
  isLoading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
  }
})

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
