import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './crypto/crypto';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});

export default store;
