import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, UserShema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

const initialState: UserShema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    checkExistingAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    userLogout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }
  }
})

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
