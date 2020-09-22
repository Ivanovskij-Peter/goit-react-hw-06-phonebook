import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contacts from './redusers';
const milldeware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contacts,
  },
  milldeware,
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
