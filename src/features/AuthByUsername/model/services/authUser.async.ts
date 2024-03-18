import i18next from 'i18next'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User';

export interface AuthUser {
  username: string;
  password: string;
}

export const authUser = createAsyncThunk<User, AuthUser, { rejectValue: string }>(
  'auth/authUser',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem('user', JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data))
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(i18next.t('Auth Error Message'))
    }
  }
)
