import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categorySlice from "./reducers/CategorySlice";

export const store = configureStore({
    reducer: categorySlice
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof categorySlice>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
