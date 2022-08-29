import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { commitsApi } from '../apis/commits.api';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    [commitsApi.reducerPath]: commitsApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(commitsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
